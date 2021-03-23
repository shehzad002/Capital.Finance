import { useCallback } from 'react'

import useCap from './useCap'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../cap/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const cap = useCap()
  const masterChefContract = getMasterChefContract(cap)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, cap])

  return { onReward: handleReward }
}

export default useReward
