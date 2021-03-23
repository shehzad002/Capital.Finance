import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../cap/utils'
import useCap from './useCap'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const cap = useCap()
  const farms = getFarms(cap)
  const masterChefContract = getMasterChefContract(cap)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, cap])

  useEffect(() => {
    if (account && masterChefContract && cap) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, cap])

  return balances
}

export default useAllEarnings
