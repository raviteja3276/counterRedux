import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { product } from './product'
import './App.css'
import { decreaseCartBy, increaseCartBy, removeAllCart, removeFromCart } from './actions/actions'
function Cart() {
  const navigate = useNavigate()
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()
  const removeFromCarts = (product) => {
    dispatch(removeFromCart(product))
  }
  const cartItemDecreasedBy = (prod) => {
    dispatch(decreaseCartBy(prod))

  }

  const cartItemIncreaasedBy = (prod) => {
      dispatch(increaseCartBy(prod))
  }

  return (
    <>
    <div className='header'>
    <h1>shopping application</h1>
    <div>
    <button onClick={()=>navigate('/')}>Home</button>
    <button onClick={()=>dispatch(removeAllCart())}>Remove All</button>
    </div>
    </div>
    {
    products.length > 0 ?
      <div className="cart-container">
        <div className="cart-items-container">
          <div className="cart-header cart-item-container">
            <div className="cart-item">Item</div>
            <div className="item-price">Price</div>
            <div className="quantity">Quantity</div>
            <div className="total">Total</div>
            <div className="remove">Remove</div>

          </div>
          {
            products.map(data => (
              <div id={data.id} className="cart-item-container">
                <div className="cart-item">
                  <img src={data.image} alt={data.title} />
                  <div>
                    <h3>{data.title}</h3>
                  </div>
                </div>
                <div className="item-price">${data.price}</div>
                <div className="item-quantity">
                  <button onClick={() => cartItemDecreasedBy(data)}>
                    -
                  </button>
                  <span>{data.quantity || 1}</span>
                  <button onClick={() => cartItemIncreaasedBy(data)}>
                    +
                  </button>
                </div>
                <div className="item-total">${data.quantity * data.price}</div>
                <div className="item-delete">
                  <button onClick={() => removeFromCarts(data)}>Remove Item</button>
                </div>

              </div>
            ))
          }

          <div className="cart-header cart-item-container">
            <div></div>
            <div></div>
            <div></div>
            <div className="total">
              ${
                products.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
              }
            </div>
          </div>
        </div>
      </div>
     :
    
    <h1>There is not cart items</h1>
    }
    </>
  )
}

export default Cart


