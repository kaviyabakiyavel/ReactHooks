import React,{useState} from 'react'

function UseInput(initalValue) {
    const [value,setValue] = useState(initalValue)
    //onclick of submit this function will get called and rest to inital value
    const reset = () => {
        setValue(initalValue)
    }
    const bind = {
        value,
        onChange : e =>{
            setValue(e.target.value)
        }
    }
    return [value,bind,reset]
}

export default UseInput
