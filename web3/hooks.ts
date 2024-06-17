import { useConfig } from 'wagmi'
import { getWalletClient } from '@wagmi/core'

type AssetType = {
  address: string
  symbol: string
  decimals: number
  image?: string
}
export const useWalletWatchAsset = () => {
  const config = useConfig()

  const watchAsset = async (asset: AssetType) => {
    const client = await getWalletClient(config)
    try {
      await client?.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: asset,
        },
      })
    } catch (err) {
      console.log('watchAsset error:', err)
    }
  }

  return { watchAsset }
}
