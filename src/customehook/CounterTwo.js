import React from 'react'
import UseCounter from '../customehook/UseCounter'

function CounterTwo() {
    const [count ,increment,decrement,reset] = UseCounter(10,10)
    return (
        <div>
            <h2>Count = {count} </h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CounterTwo