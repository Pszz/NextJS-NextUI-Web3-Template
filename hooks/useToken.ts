import { BigNumber } from 'bignumber.js'
import { useCallback, useMemo, useState } from 'react'
import { Address, erc20Abi } from 'viem'
import { useAccount, useBalance, useConfig, useReadContract, useReadContracts, useWriteContract } from 'wagmi'
import { waitForTransactionReceipt } from '@wagmi/core'
import { delay } from '@/utils'
import { SYMBOL, Tokens } from '@/constant/tokens'
import { useContracts } from './useContracts'
import { USDT_ABI } from '@/constant/abis/usdt'

export const useAllowance = (token: Address, owner: Address) => {
  const { address } = useAccount()

  const { data, refetch } = useReadContract({
    query: {
      enabled: !!(address && token && owner),
    },
    abi: erc20Abi,
    functionName: 'allowance',
    args: [address as any, owner as any],
  })

  const allowance = useMemo(() => new BigNumber(String(data) || 0), [data])
  return { allowance, refetch }
}

export const useApprove = (token: Address, owner: Address, amount: string) => {
  const config = useConfig()
  const [loading, setLoading] = useState(false)
  const { writeContractAsync } = useWriteContract()
  const { allowance, refetch } = useAllowance(token, owner)

  const approve = useCallback(
    async (isUSDT?: boolean) => {
      let _amount = BigInt(amount)

      // USDT
      if (isUSDT && allowance.gt(0)) {
        if (allowance.lt(amount)) {
          _amount = BigInt(0)
        }
      }

      try {
        setLoading(true)
        const hash = await writeContractAsync({
          address: token,
          abi: isUSDT ? USDT_ABI : erc20Abi,
          functionName: 'approve',
          args: [owner, _amount],
        })
        await waitForTransactionReceipt(config, { hash, confirmations: 2 })
        await delay(1000)
        await refetch()
        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.log('Approve Error:', err)
        return Promise.reject(err)
      }
    },
    [allowance, amount, config, owner, refetch, token, writeContractAsync],
  )

  return {
    approve,
    needApprove: allowance.gt(0),
    isLoading: loading,
  }
}

export const useNativeBalance = () => {
  const { address } = useAccount()
  const { data, ...rest } = useBalance({
    query: {
      refetchInterval: 10_000,
      refetchIntervalInBackground: true,
    },
    address,
  })
  const _balance = data?.value ? new BigNumber(String(data.value)) : undefined
  const _data = {
    ...data,
    value: _balance,
    formatted: _balance?.shiftedBy(-(data?.decimals || 0)),
  }

  return {
    ...rest,
    data: _data,
  }
}

export const useTokenBalance = (token: Address, chainId?: number) => {
  const { address } = useAccount()

  const { data, refetch } = useReadContracts({
    query: {
      enabled: !!(address && token),
    },
    contracts: [
      {
        functionName: 'balanceOf',
        args: [address as any],
      },
      {
        functionName: 'decimals',
        args: [],
      },
      {
        functionName: 'symbol',
        args: [],
      },
    ].map((v) => ({
      chainId,
      address: token,
      abi: erc20Abi,
      ...v,
    })),
  })

  const _data = useMemo(() => {
    const [_balanceOf, _decimals, _symbol] = data || []
    return {
      address: token,
      value: new BigNumber(String(_balanceOf?.result || 0)),
      decimals: Number(_decimals?.result || 0),
      symbol: String(_symbol?.result),
    }
  }, [data, token])

  return {
    data: _data,
    refetch,
  }
}

// Business hooks
export const useToken = (symbol: SYMBOL, chainId?: number) => {
  const contracts = useContracts(chainId)
  const { data } = useTokenBalance((contracts as any)?.[symbol], chainId)

  return useMemo(
    () => ({
      ...Tokens[symbol], // static data
      ...data, // dynamic data
    }),
    [data, symbol],
  )
}
