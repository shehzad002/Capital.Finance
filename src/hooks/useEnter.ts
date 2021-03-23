import {useCallback} from 'react'

import useCap from './useCap'
import {useWallet} from 'use-wallet'

import {enter, getXCapStakingContract} from '../cap/utils'

const useEnter = () => {
  const {account} = useWallet()
  const cap = useCap()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXCapStakingContract(cap),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, cap],
  )

  return {onEnter: handle}
}

export default useEnter
