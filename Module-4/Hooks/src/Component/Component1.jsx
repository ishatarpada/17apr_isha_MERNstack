import { useContext } from 'react'
import { counterContext } from '../context/context'

export default function Component1() {
  const value = useContext(counterContext)
  return (
    <div>{ value.counter }</div>
  )
}
