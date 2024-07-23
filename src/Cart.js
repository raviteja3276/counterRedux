import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { product } from './product'
import './App.css'
import { removeFromCart } from './actions/actions'
function Cart() {
  const navigate = useNavigate()
  const products = useSelector(state => state.products)
    const dispatch = useDispatch()
  const removeFromCarts=(product)=>{
    dispatch(removeFromCart(product))
  }

  return (
    <>
    <div className='header'>
        <h1>Product Cart List</h1>
        <button onClick={()=>navigate('/')}>Home</button>
    </div>
    <div className='cartPriduct'>
      {
        products.map(data=>(
          <div id={data.id} className='cartCard'>
            <img src={data.image} alt='img' />
            <h5>{data.title.length>10 ? data.title.substring(0,25).concat('...') : data.title}</h5>
            <h5>{data.price}</h5>
            <button onClick={()=>removeFromCarts(data)}>Remove from cart</button>
          </div>
        ))
      }
      </div>
    </>
    
  )
}

export default Cart