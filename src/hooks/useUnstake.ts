import { useCallback } from 'react'

import useCap from './useCap'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../cap/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const cap = useCap()
  const masterChefContract = getMasterChefContract(cap)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, cap],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
