import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
const UseEffectAPI = () => {
    var [post,setPost]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(post)
            setPost(res.data);
            })
        .catch((err)=>{console.log("ERROR")})
    },[])
  return (
    <div>
        <h1>This is UseEffect example with API call</h1>
        <h2>We are going to fetch data from JSONPlaceHolder and diplay the data.</h2>
        <ol>
            {
                post.map((p)=>(
                    <li key={p.id}>{p.title}</li>
                ))
            }
        </ol>
    </div>
  )
}

export default UseEffectAPI