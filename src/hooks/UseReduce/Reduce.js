import React from 'react'
import {useReducer} from "react"
const conuterReducer=(state,action)=>
{
  switch(action.type)
  {
    case 'INCREMENT':
      return {count:state.count+1};
    case 'DECREMENT':
      return {count:state.count-1};
    default:
      return state;
  }
}
export default function Reduce() 
{
  const [state,dispatch]=useReducer(conuterReducer,{count:0});
  return (
    <div>
      <p>Count:{state.count}</p>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>INCREASE</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREASE</button>    
    </div>
  )
}