import React from 'react'
import { useState } from 'react';

const About = () => {
  var initialVal=0;
  var [num,setNum]=useState(initialVal)
  return (
    <div>
      <h1>About Page</h1>
      <h2>State Initial Valueis {initialVal}</h2>
      <button onClick={()=>{setNum(num-1)}}>-</button>
      <h3>Updating State:{num}</h3>
      <button onClick={()=>{setNum(num+1)}}>+</button>
    </div>
  )
}

export default About