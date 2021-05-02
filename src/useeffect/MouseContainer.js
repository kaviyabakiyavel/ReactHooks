import React, { useState } from 'react'
import HooksMouse from './HooksMouse'

export default function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle button</button>
            { display && <HooksMouse />}
        </div>
    )
}