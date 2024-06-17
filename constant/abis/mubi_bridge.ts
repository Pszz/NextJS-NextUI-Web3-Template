export const MUBI_ABI = [
  {
    type: 'function',
    name: 'getBridgeBaseFee',
    inputs: [{ name: '_target', type: 'uint32', internalType: 'uint32' }],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
] as const
