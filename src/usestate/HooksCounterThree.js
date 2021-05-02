import React, { useState } from 'react'
{/* display name state  variable */ }
{/* when i type firstname -> lastname property removed from the state varible  */ }
{/* if i start typing lastname -> first name property removed from the state variable */ }
{/* usestate does not automatically merge or update the object */ }
{/* this is the key difference b/w setstate ans usestate . where setstate will merge the state update automatically  */ }
{/* where usestate not merge the state we as to do manually  */ }
{/* By using spread operator we can merge the state */ }
export default function HooksCounterThree() {
    const [name, setName] = useState({ firstname: '', lastname: '' })
    return (
        <form>
            <input type="text" value={name.firstname} onChange={e => setName({ ...name ,firstname: e.target.value })} />
            <input type="text" value={name.lastname} onChange={e => setName({ ...name , lastname: e.target.value })} />
            <h1>Your first name is - {name.firstname}</h1>
            <h1>Your last name is - {name.lastname}</h1>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}