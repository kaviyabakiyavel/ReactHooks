import React, { useState } from 'react'

export default function HookCounterFour() {
    const [items,setItems] = useState([])

    const addItem = () => {
        setItems([...items , {
            id : items.length,
            value : 1,
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            {items.map(item => (
                <div key={item.id}>{item.value}</div>
            ))}
        </div>
    )
}

//summary of useState
//usestate hook let you add state to functional components 
//in classes the state is always an object
//with usestate hook , the state doesnt have to be an object 
//the useState hook returns an array with 2 elements .
//first eleements is the current value of the state and the second eleemnt is state setter function .
//new state value depends on the previous state you can pass a function to the setter function.
// when dealing with object or arrays , always make sure to spread you state variable and then call the setter function .