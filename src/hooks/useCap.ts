import { useContext } from 'react'
import { Context } from '../contexts/CapProvider'

const useCap = () => {
  const { cap } = useContext(Context)
  return cap
}

export default useCap
