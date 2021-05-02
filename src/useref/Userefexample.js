
//Useref hooks its possible to access the dom node directly within functional Component

//by default use name  should be focused 

import React,{useEffect,useRef} from 'react'

function Userefexample() {
    const inputRef = useRef(null)
    useEffect ( () => {
      //focus the input element
      inputRef.current.focus()
    } , [])
    return (
        <div>
           <input ref={inputRef} type="text"/>
        </div>
    )
}
export default Userefexample
