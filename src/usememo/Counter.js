import React, { useState, useMemo } from 'react'

function Counter() {
    const [CounterOne, setCounterOne] = useState(0)
    const [CounterTwo, setCounterTwo] = useState(0)
    const incrementOne = () => {
        setCounterOne(CounterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(CounterTwo + 1)
    }
    //iseven function is called only onclick of countone 
    // application is slow both button slow
    //by using usememo optimize the render
    // const isEven = () => {
    //     let i  = 0
    //     while(i < 200000000 ) i++
    //     return CounterOne % 2 === 0
    // }
    //}

    //now only first button delay is there
    //second button working fast
    //whenuse cached function use call back 
    // when use useMemo cached the result 
    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return CounterOne % 2 === 0
    }, [CounterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {CounterOne}</button>
                {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}
                <span>{isEven ? 'Even' : 'Odd' }</span>
            </div>
            <button onClick={incrementTwo}>Count Two - {CounterTwo}</button>
        </div>
    )
}

export default Counter
