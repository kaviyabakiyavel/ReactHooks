//rfce
import React, { useState, useEffect } from 'react'

function HookCounterone() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    //useeffect function will call first render and after every updates 
    //useeffect second parameter is an array and it will check the previous state or props need to check 
    //Prevent useEffect From Running Every Render
    // If you want your effects to run less often, you can provide a second argument – an array of values. Think of them as the dependencies for that effect. If one of the dependencies has changed since the last time, the effect will run again. (It will also still run after the initial render)
    // const [value, setValue] = useState('initial');
    // useEffect(() => {
    //   // This effect uses the `value` variable,
    //   // so it "depends on" `value`.
    //   console.log(value);
    // }, [value])  // pass `value` as a dependency
    //Another way to think of this array: it should contain every variable that the effect function uses from the surrounding scope.
    //So if it uses a prop ? That goes in the array.
    //If it uses a piece of state ? That goes in the array.

    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = 'Clicked' + count + 'times'
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>
                Click functional component {count} times
            </button>
        </div>
    )
}

export default HookCounterone
