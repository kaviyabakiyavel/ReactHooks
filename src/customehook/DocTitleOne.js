//Custom Hooks 
//A Custom hook is bascially a javascript function whose name starts with use.
//A custom hook can also call other Hooks if required.

//why?
//share logic - alternative to hoc and render props

//How to create custom hooks?

import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)
    //reusing logic instead of duplicating it 
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleOne
