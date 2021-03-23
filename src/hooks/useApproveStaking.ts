import {useCallback} from 'react'

import useCap from './useCap'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getCapContract,
  getXCapStakingContract
} from '../cap/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const cap = useCap()
  const lpContract = getCapContract(cap)
  const contract = getXCapStakingContract(cap)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
