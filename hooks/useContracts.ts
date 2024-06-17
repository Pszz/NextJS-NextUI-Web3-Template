import { Contracts } from '@/constant/contract'
import { useAccount } from 'wagmi'

export function useContracts(_chainId?: number) {
  const { chainId } = useAccount()

  if (_chainId) {
    return Contracts[_chainId]
  }

  if (chainId) {
    return Contracts[chainId]
  }

  return null
}
