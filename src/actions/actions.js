import { type } from "@testing-library/user-event/dist/type";
import { ADD_TO_CARD, DECREASE_BY, DECREMENT, DECREMENT_BY, INCREASE_BY, INCREMENT, INCREMENT_BY, REMOVE_ALL_CART, REMOVE_FROM_CARD } from "./ActionType";
import { product } from "../product";

export function increment(){
   return{
    type: INCREMENT
   } 
}

export function decrement(){
    return{
     type: DECREMENT
    } 
 }

 export function incrementBy(){
    return{
     type: INCREMENT_BY,
     payload: 10
    } 
 }
 
 export function decrementBy(){
     return{
      type: DECREMENT_BY,
     payload: 5
     } 
  }

  export function addToCart(product){
   return{
      type: ADD_TO_CARD,
      payload: product
   }
  }

  export function removeFromCart(product){
   return{
      type: REMOVE_FROM_CARD,
      payload: product
   }
  }

  export function decreaseCartBy(product){
   return{
      type: DECREASE_BY,
      payload: product
   }
  }

  export function increaseCartBy(product){
   return{
      type: INCREASE_BY,
      payload: product
   }
  }

  export function removeAllCart(){
   return{
      type: REMOVE_ALL_CART,
      payload: []
   }
  }