import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementBy, increment, incrementBy } from './actions/actions'
import { product } from './product'

function App() {
  // const[count,setCount]=useState(0)
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()
  console.log(product)
  return (
    <div>
      <h1>welocome to redux</h1>
      <h1>my counter {count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementBy())}>incrementBy</button>
      <button onClick={()=>dispatch(decrementBy())}>decrementBy</button>

    </div>
  )
}

export default App