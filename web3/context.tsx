'use client'

import { WagmiProvider } from 'wagmi'
import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { chains } from './chains'
import { RainbowKitProvider, darkTheme, getDefaultConfig } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

export type Web3ContextProps = {
  children: React.ReactNode
}

const config = getDefaultConfig({
  appName: 'MBA',
  projectId: '2f401cd160fef7b5273568bb85ccddc9',
  chains,
  ssr: true,
})

export const Web3Context: React.FC<Web3ContextProps> = ({ children }) => {
  const queryClient = useMemo(() => new QueryClient(), [])

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          locale="en-US"
          theme={darkTheme({
            accentColor: '#006FEE',
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
