import React,{useState} from 'react';
export default function HooksCountertwo(){
    const initialCount = 0
    const [count , setCount] = useState(0);
    
    //update state in functional component 
    const incrementfive = () =>{
        for(let i = 0 ; i < 5 ; i++){
            //setCount(count + 1)
            //update the state based on the previous state value 
            setCount(prevCount => prevCount + 1)
        }
    }

    //update state in class component
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return{
    //             count : prevState.count+1
    //         }
    //     })
    // }
    
    return(
        <div>
            Count : {count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
            <button onClick={()=>setCount(count - 1)}>Decrement</button>
            <button onClick={incrementfive}>Increment 5</button>
        </div>
    )
}