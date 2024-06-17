import { BigNumber } from 'bignumber.js'
import { Address } from 'viem'

export enum SYMBOL {
  USDT = 'USDT',
  ETH = 'ETH',
  BTCB = 'BTCB',
  BBUSD = 'BBUSD',
  BNB = 'BNB',
  BB = 'BB',
}

export type TokenType = {
  symbol: SYMBOL | string
  decimals: 6 | 8 | 18 | number // USDT / BTC / TOKEN
  name?: string
  icon: string
  value?: BigNumber
  price?: BigNumber
  address?: Address
}

export const Tokens: Record<SYMBOL | string, TokenType> = {
  [SYMBOL.BTCB]: {
    name: 'Bitcoin',
    symbol: SYMBOL.BTCB,
    decimals: 18,
    icon: '/imgs/tokens/btc.svg',
  },

  [SYMBOL.ETH]: {
    name: 'Ethereum',
    symbol: SYMBOL.ETH,
    decimals: 18,
    icon: '/imgs/tokens/eth.svg',
  },
  [SYMBOL.USDT]: {
    name: 'Tether USD',
    symbol: SYMBOL.USDT,
    decimals: 6,
    icon: '/imgs/tokens/usdt.svg',
  },
  [SYMBOL.BB]: {
    name: 'BounceBit',
    symbol: SYMBOL.BB,
    decimals: 18,
    icon: '/imgs/tokens/bb.svg',
  },
}
