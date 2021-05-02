import React, { useState, useEffect } from 'react'

export default function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    // const tick = () => {
    //     setCount(count+1)
    // }

    //Empty array -> ignore the changes 
    // useEffect(() => {
    //     const interval = setInterval(tick,1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])

    //want to see the changes of the count then pass[count] dependecy
    // useEffect(() => {
    //     const interval = setInterval(tick,1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [count])

    //another way if your not using dependecy 
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    //inside useeffect you can write a function and pass a dependecy 
    // useEffect(() => {
    //     function doSomething(){
    //         console.log('someprops')
    //     }
    //     doSomething()
    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, ['someprops']
    // )
    
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}