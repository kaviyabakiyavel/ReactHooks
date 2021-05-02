import { useState } from 'react'

function UseCounter(initialCount = 0, value) {
    const [count, setCount] = useState(initialCount)
    const increment = () => {
        // setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + value)
    }
    const decrement = () => {
        // setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(0)
    }
    return [count, increment, decrement, reset]
}

export default UseCounter
