import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrement, decrementBy, increment, incrementBy } from './actions/actions'
import { product } from './product'
import './App.css'
import { useNavigate } from 'react-router-dom'
function App() {
  // const[count,setCount]=useState(0)
  const navigate = useNavigate()
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const addProductToCart=(product)=>{
    dispatch(addToCart(product))
  }
  return (
    <>
    <div className='header'>
    <h1>shopping application</h1>
    <button onClick={()=>navigate('/cart')}>Cart ({products.length})</button>
    </div>
    <div className='productList'>
      {
        product.map(data=>(
          <div id={data.id} className='productCard'>
            <img src={data.image} alt='img' />
            <h5>{data.title.length>10 ? data.title.substring(0,25).concat('...') : data.title}</h5>
            <h5>{data.price}</h5>
            <button onClick={()=>addProductToCart(data)}>Add to cart</button>
          </div>
        ))
      }
      {/* <h1>my counter {count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementBy())}>incrementBy</button>
      <button onClick={()=>dispatch(decrementBy())}>decrementBy</button> */}

    </div>
    </>
  )
}

export default App