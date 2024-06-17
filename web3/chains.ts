import { defineChain } from 'viem'
import { bsc, mainnet, sepolia } from 'viem/chains'

// custom chain
export const bounceBitMainnet = defineChain({
  id: 6001,
  name: 'BounceBit',
  testnet: true,
  nativeCurrency: { name: 'BB', symbol: 'BB', decimals: 18 },
  iconUrl: '/imgs/chains/bouncebit.svg',
  rpcUrls: {
    default: {
      http: ['https://fullnode-mainnet.bouncebitapi.com/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'bbscan',
      url: 'https://mainnet.bbscan.io',
      apiUrl: 'https://mainnet.bbscan.io',
    },
  },
  contracts: {
    multicall3: {
      address: '0x3DD3cfc05d65355f0F7df74C266dEEf49E080084',
      blockCreated: 371338,
    },
  },
})

export const bounceBitTestnet = defineChain({
  id: 6000,
  name: 'BounceBit Testnet',
  testnet: true,
  nativeCurrency: { name: 'tBB', symbol: 'tBB', decimals: 18 },
  iconUrl: '/imgs/chains/bouncebit.svg',
  rpcUrls: {
    default: {
      http: ['https://polyhedra-rpc-vip.bouncebitapi.com/', 'https://fullnode-testnet.bouncebitapi.com/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'bbscan',
      url: 'https://bbscan.io',
      apiUrl: 'https://bbscan.io',
    },
  },
  contracts: {
    multicall3: {
      address: '0xC19aF9ADB2B3c43C4ba34FE57C4a12359fAd733c',
      blockCreated: 371338,
    },
  },
})

export enum Chain {
  ETH_Mainnet = mainnet.id,
  BB_Test = bounceBitTestnet.id,
  BB_Mainnet = bounceBitMainnet.id,
  BSC_Mainnet = bsc.id,
  Sepolia = sepolia.id,
}

export const ChainInfo = {
  [Chain.BB_Mainnet]: {
    name: bounceBitMainnet.name,
    icon: '/imgs/chains/bouncebit.svg',
    nativeCurrency: bounceBitMainnet.nativeCurrency,
    blockExplorers: bounceBitMainnet.blockExplorers,
  },
  [Chain.BB_Test]: {
    name: bounceBitTestnet.name,
    icon: '/imgs/chains/bouncebit.svg',
    nativeCurrency: bounceBitTestnet.nativeCurrency,
    blockExplorers: bounceBitTestnet.blockExplorers,
  },
  [Chain.ETH_Mainnet]: {
    name: mainnet.name,
    icon: '/imgs/chains/eth.svg',
    nativeCurrency: mainnet.nativeCurrency,
    blockExplorers: mainnet.blockExplorers,
  },
  [Chain.BSC_Mainnet]: {
    name: bsc.name,
    icon: '/imgs/chains/bsc.svg',
    nativeCurrency: bsc.nativeCurrency,
    blockExplorers: bsc.blockExplorers,
  },
  [Chain.Sepolia]: {
    name: sepolia.name,
    icon: '/imgs/chains/sepolia.svg',
    nativeCurrency: sepolia.nativeCurrency,
    blockExplorers: sepolia.blockExplorers,
  },
} as const

// default use
export const chains = [
  { ...sepolia, iconUrl: ChainInfo[Chain.Sepolia].icon },
  bsc,
  mainnet,
  bounceBitMainnet,
  bounceBitTestnet,
] as const
