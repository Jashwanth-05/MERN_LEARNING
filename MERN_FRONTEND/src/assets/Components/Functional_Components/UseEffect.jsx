import React from 'react'
import { useState,useEffect } from 'react'

const UseEffect = () => {
    var [text,setText]=useState("Hi");
    var [text1,setText1]=useState("Hello");
    useEffect(()=>{
        console.log(text)
        // console.log(text1)
    },[text])    
    return (
    <section>
        <h1>This is useEffect Example</h1>
        Type your Text:<input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        <h2>The text typed is {text}</h2>
        Type your Text:<input type='text' value={text1} onChange={(e)=>setText1(e.target.value)}/>
        <h2>The text typed is {text1}</h2>
    </section>
  )
}

export default UseEffect