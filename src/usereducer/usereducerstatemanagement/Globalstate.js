//useReducer with useContext
//useReducer - Local State management 
//share state between components - global state management 
//useReducer + useContext
//-> App.js =>A=>B=>C
//A->(Counter)
//B->D(Counter)
//C->E->F(Counter)

import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CountContext = React.createContext()
const initalState = 0
const reducer = (state, action) => {
    // return newState
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initalState
        default:
            return state
    }
}
function Globalstate() {
    const [count, dispatch] = useReducer(reducer, initalState)
    return (
        <CountContext.Provider value={{countState : count , countDispatch : dispatch}}>
            <div>
                Count  - {count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}

export default Globalstate
