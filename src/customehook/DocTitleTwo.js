import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleTwo() {
    const [count, setCount] = useState(0)
    //reusing logic instead of duplicating it 
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleTwo
