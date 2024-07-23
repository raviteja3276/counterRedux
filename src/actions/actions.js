import { DECREMENT, DECREMENT_BY, INCREMENT, INCREMENT_BY } from "./ActionType";

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