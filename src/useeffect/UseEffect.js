//Working with class component would facce the sideeffects i your component 
//Example updating dom fetching data from an API endpoint and setting up subscriptions or timers
//facing issues on lifecycle methods 

//lifecycle methods
//Updating the documents title to the current counter value 
// componentDidmount(){
//     document.title = "you clicked" {this.state.count}  "times";
// }
// componentDidUpdate(){
//     document.title = "you clicked" {this.state.count} "times";
// }

//timer
// componentDidmount (){
//     this.interval = setIterval(this.tick,1000)
// }
// componentwillUnmount(){
//     clearInterval(this.interval)
// }


//UseEffect - close replacement for componentDidMount,componentDidUpdate and componentWillUnmount
//https://daveceddia.com/useeffect-hook-examples/

import ClassCounterOne from './ClassCounterOne'
import HookCounterone from './HookCounterone'
import ClassMouse from './ClassMouse'
import HooksMouse from './HooksMouse'
import MouseContainer from './MouseContainer'
import IntervalClassCounter from './IntervalClassCounter'
import IntervalHookCounter from './IntervalHookCounter'
import DataFetching from './DataFetching'

export default function UseEffect() {
    return (
        <div>
            {/* <ClassCounterOne />
            <HookCounterone/>
            <ClassMouse/> */}
            {/* <HooksMouse/> */}
            {/* <MouseContainer/> */}
            {/* <IntervalClassCounter/>
            <IntervalHookCounter/> */}
            <DataFetching/>
        </div>
    )
}