import React from 'react'
import { useReducer } from 'react'
const initialState=0;
const reducer=(action,state)=>{
    if(action.type==="INCREMENT") return state+1;
    if(action.type==="DECFEMENT") return state-1;
    else return state;
}
const LearnReducer = () => {
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={dispatch({type:"INCREMENT"})}>ADD</button>
        <button onClick={dispatch({type:"DECREMENT"})}>LESS</button>
    </div>
  )
}

export default LearnReducer