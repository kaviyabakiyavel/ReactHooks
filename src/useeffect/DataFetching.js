import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    // const [posts, setPosts] = useState([])
    const[post,setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)
    //data should be fetch only on componentdidmount so for achieving that pass empty array 
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             //storing res.data value into setPosts . so it will update the posts value
    //             setPosts(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // },[])

    //based on id making the API call 
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             console.log(res)
    //             setPost(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // },[id])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[idFromButtonClick])
    return (
        <div>
            {/* constrolled component bascially on onchange value ill set */}
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <ul>
                {
                    // posts.map(post => <li key={post.id}>{post.title}</li>)
                    <li key={post.id}>{post.title}</li>
                }
            </ul>
        </div>
    )
}

export default DataFetching
