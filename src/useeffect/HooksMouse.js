import React, { useState, useEffect } from 'react'

export default function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        debugger
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    //useeffect ill call everytime . unitll mention the dependency array
    //logmouseposition as to call only once initally 
    //second parameter should be empty array
    //this.useeffect doesnt depends on any state or props 
    //this useffect as to call only once on inital render and forgot about this function


    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () =>{
            console.log("unmount event listener")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
        <div>
            Hooks x - {x} y - {y}
        </div>
    )
}