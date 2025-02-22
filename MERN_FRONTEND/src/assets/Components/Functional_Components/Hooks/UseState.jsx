import React from 'react'
import { useState } from 'react';
const UseState = () => {
    var initialVal=0;
    var [num,setNum]=useState(initialVal)
  return (
    <div>
        <h2>State Initial Valueis {initialVal}</h2>
        <button onClick={()=>{setNum(num-1)}}>-</button>
        <h3>Updating State:{num}</h3>
        <button onClick={()=>{setNum(num+1)}}>+</button>
        <button onDoubleClick={()=>{setNum(0)}}>Reset</button>
    </div>
  )
}

export default UseState