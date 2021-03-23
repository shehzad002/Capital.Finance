import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../cap/utils'
import useCap from './useCap'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const cap = useCap()
  const masterChefContract = getMasterChefContract(cap)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, cap])

  useEffect(() => {
    if (account && masterChefContract && cap) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, cap])

  return balance
}

export default useEarnings
