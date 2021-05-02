
import React, { useReducer } from 'react'
//state will changes once at a time .. for modifying the state we have to use spread operator (or) merge the state object 
const initalState = {
    firstCounter: 0,
    secondCounter: 10,
}
const reducer = (state, action) => {
    // return newState
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initalState
        default:
            return state
    }
}
function CounterTwo() {
    //count is bascially new state
    const [count, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <div>First Count - {count.firstCounter}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment 1</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement 1</button>
            </div>
            <div>Second Count - {count.secondCounter}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment 5</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement 5</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}
export default CounterTwo
