import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Cap } from '../../cap'

export interface CapContext {
  cap?: typeof Cap
}

export const Context = createContext<CapContext>({
  cap: undefined,
})

declare global {
  interface Window {
    capsauce: any
  }
}

const CapProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [cap, setCap] = useState<any>()

  // @ts-ignore
  window.cap = cap
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const capLib = new Cap(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setCap(capLib)
      window.capsauce = capLib
    }
  }, [ethereum])

  return <Context.Provider value={{ cap }}>{children}</Context.Provider>
}

export default CapProvider
