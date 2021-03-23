import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  cap: {
    3: '0xeC6416bE970385B84592e6aB4f5943DDb649F979',
  },
  masterChef: {
    3: '0x3364394ab1435324cCE954ac3aFA3D130308161C',
  },
  weth: {
    3: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xCap: {
    3: '0x63beE86e00b57B2A002F8381507dD1C505eb5096'
  }
}


export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      3: '0xeC6416bE970385B84592e6aB4f5943DDb649F979',
    },
    tokenAddresses: {
      3: '0xeC6416bE970385B84592e6aB4f5943DDb649F979',
    },
    name: 'Cap Party!',
    symbol: 'CAP-ETH SLP',
    tokenSymbol: 'CAP',
    icon: '🛍️',
  },
   {
    pid: 1,
    lpAddresses: {
      3: '0xeC6416bE970385B84592e6aB4f5943DDb649F979',
    },
    tokenAddresses: {
      3: '0xeC6416bE970385B84592e6aB4f5943DDb649F979',
    },
    name: 'Cap GO!!!',
    symbol: 'CAP-WBTC SLP',
    tokenSymbol: 'CAP',
    icon: '🎗️',
  }
  
]
