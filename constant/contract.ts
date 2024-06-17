import { Chain } from '@/web3'
import { SYMBOL } from './tokens'

export const Contracts = {
  [Chain.BSC_Mainnet]: {
    MultibitBridge: '0x8B93033a42c14306f5349c25167EDda39153cB33',
    [SYMBOL.BTCB]: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
  },
  [Chain.ETH_Mainnet]: {
    [SYMBOL.USDT]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  },
  [Chain.BB_Mainnet]: {
    [SYMBOL.BBUSD]: '0x77776b40C3d75cb07ce54dEA4b2Fd1D07F865222',
  },
  // TEST
  [Chain.Sepolia]: {
    [SYMBOL.BBUSD]: '0x77776b40C3d75cb07ce54dEA4b2Fd1D07F865222',
    [SYMBOL.USDT]: '0xb6D0BFDFff83D17B3221fF71475198BC36dcFa0d',
  },
} as const
