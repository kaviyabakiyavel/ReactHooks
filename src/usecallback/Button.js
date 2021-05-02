import React from 'react'
//react.memo tat will prevent a functional component from being re-render 
function Button({ handleClick, children }) {
    console.log('Rendering button' , children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button)
