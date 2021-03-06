import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useCap from '../../hooks/useCap'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../cap/utils'
import { getFarms } from '../../cap/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const cap = useCap()
  const { account } = useWallet()

  const farms = getFarms(cap)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
