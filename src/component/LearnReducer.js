import React from 'react'
import { useReducer } from 'react'
const reducer=(state,action)=>{
    if(action.type==="INCREMENT"){
        return state+1;
    }else if(action.type==="DECREMENT"){
        return state-1;
    }else{
        return state;
    }
}

const LearnReducer = () => {
    const initialState=0;

    const[state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
    </div>
  )
}

export default LearnReducer