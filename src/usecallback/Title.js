import React from 'react'
//what
//usecallback hook that will return a memoized version of the callback function that only change 
//if one of the dependencies has changed.

//why?
// it is useful when passing callbacks to optimized child components 
// that rely on reference equality to prevent unnecessary render 

function Title() {
    return (
        <h2>
            useCallback Hook
        </h2>
    )
}

export default  React.memo(Title)
