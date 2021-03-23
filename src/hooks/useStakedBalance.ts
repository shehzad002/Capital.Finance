import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../cap/utils'
import useCap from './useCap'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const cap = useCap()
  const masterChefContract = getMasterChefContract(cap)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, cap])

  useEffect(() => {
    if (account && cap) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, cap])

  return balance
}

export default useStakedBalance
