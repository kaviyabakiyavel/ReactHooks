//context provides a way to pass data through the compoennt tree 
//without having to pass props down manually at every level.

//Context API
//Goal is to pass username from app component to compocnntF by using context


import React from 'react'
import ComponentC from './ComponentC'

//create context 
//wrap a componentC with provider 
//And need to provide contxt value 
//export context from this component
//and import in componentF
//
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function Context() {
    return (
        <div>
            <UserContext.Provider value={'kaviya'}>
                <ChannelContext.Provider value = {'Frontend developer'}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Context
