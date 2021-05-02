
import React, { useReducer } from 'react'
const initalState = {
    firstCounter : 0,
}
const reducer = (state, action) => {
    // return newState
    switch (action.type) {
        case 'increment':
            return {firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return {firstCounter : state.firstCounter - action.value}
        case 'reset':
            return initalState
        default:
            return state
    }
}
function CounterTwo() {
    //count is bascially new state
   const [count,dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <button onClick={()=>dispatch({type : 'increment',value : 1 })}>Increment 1</button>
            <button onClick={()=>dispatch({type : 'decrement',value : 1})}>Decrement 1</button>
            <button onClick={()=>dispatch({type : 'increment',value : 5 })}>Increment 5</button>
            <button onClick={()=>dispatch({type : 'decrement',value : 5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type : 'reset'})}>Reset</button>
        </div>
    )
}
export default CounterTwo
