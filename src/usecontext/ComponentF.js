import React from 'react'
import { ChannelContext, UserContext } from './Context'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                        return (
                            <ChannelContext.Consumer>
                                {channel => {
                                        return <div> User context value {user},channel value {channel} </div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
