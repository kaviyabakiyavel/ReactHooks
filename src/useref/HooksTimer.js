import React, { useState, useEffect, useRef, useContext, useReducer } from 'react'

function HooksTimer() {
    const [Timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        //componentdidmount
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        //componentwillunmount
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])

    return (
        <div>
            Hooks Timer - {Timer}
            <button onClick={() => clearInterval((intervalRef.current))} >Clear Hook Timer</button>
        </div >
    )
}

export default HooksTimer

//rarely used reacthooks methods 
//1) useimperative handle
//2)uselayout effect
//3)usedebugg value

//Hooks so far
// useState
// useEffect
// useContext
// useReducer
// useCallback
// useMemo
// useRef


