import { useChainModal, useConnectModal } from '@rainbow-me/rainbowkit'
import React from 'react'
import { useAccount } from 'wagmi'

export function ConnectButton({ children, chainId }: { chainId?: number; children: React.ReactElement }) {
  const { openConnectModal } = useConnectModal()
  const { isConnected, chainId: currChainId } = useAccount()
  const { openChainModal } = useChainModal()

  if (!isConnected) {
    return React.cloneElement(children, {
      children: 'Connect Wallet',
      onPress: () => {
        openConnectModal?.()
      },
    })
  }

  if (chainId && chainId !== currChainId) {
    return React.cloneElement(children, {
      children: 'Switch Network',
      onPress: () => {
        openChainModal?.()
      },
    })
  }

  return children
}
