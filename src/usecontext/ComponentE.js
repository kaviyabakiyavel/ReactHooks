import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,ChannelContext} from './Context'

//another way of using context 
function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {/* <ComponentF/> */}
            {user} - {channel}
        </div>
    )
}

export default ComponentE
