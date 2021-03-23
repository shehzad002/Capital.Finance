import { useCallback } from 'react'

import useCap from './useCap'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../cap/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const cap = useCap()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(cap),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, cap],
  )

  return { onStake: handleStake }
}

export default useStake
