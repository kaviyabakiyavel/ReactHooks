//useReducer is a hook that is used for state management 
//already we have a usestate for  state management 
//its is an alternative to useState
//what is difference?
//usestate is built using useReducer
//when to use  useReducer vs useState ?


//Hooks so far 
// useState - state
// useEffect - side effects
// useContext -context API
//useReducer - reducers

//video1
//array inbulit method -> foreach,reduce,map
//reduce function  - the reduce() method excutes a reducer function(that you provide) on each element of the array , resulting in a single output value .
// const array1 = [1,2,3,4]
// const reducer = ( accumulator,currentvalue)=>accumulator+currentvalue;
// console.log(array1.reduce(reducer))
//op 1+2+3+4 = 10

//console.log(array1.reduce(reducer,5))
//o/p : 5+1+2+3+4 = 15
//reducer takes two parameter one is reducer function and second is inital number 

//reduce in javascript ....................//usereducer in react
//array.reduce(reducer,initalValu).........//useReducer(reducer,initialState)
//singlevalue = reducer(accumulator,itemValue)......//newState=reducer(currentState,action)
//reduce method returns a single value..............//useReducer returns a pair of values.[newState,dispatch]

//usereducer basically update the state in the hooks 

//video2
import React, { useReducer } from 'react'
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
function CounterOne() {
    //count is bascially new state
   const [count,dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}
export default CounterOne
