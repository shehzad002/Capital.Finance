import {useCallback} from 'react'

import useCap from './useCap'
import {useWallet} from 'use-wallet'

import {leave, getXCapStakingContract} from '../cap/utils'

const useLeave = () => {
  const {account} = useWallet()
  const cap = useCap()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXCapStakingContract(cap),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, cap],
  )

  return {onLeave: handle}
}

export default useLeave
