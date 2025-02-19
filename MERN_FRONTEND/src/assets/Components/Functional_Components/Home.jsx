import React from 'react'

const Home = (props) => {
  var Styling={
    textAlign:"center",
    backgroundColor:"black",
    color:"white",
  }
  return (
    <div>
         <h1 style={Styling}>home page</h1>
            <h2>i am going to pass props in the next tag</h2>  
            <h3>props:{Styling.backgroundColor}</h3>
            <h3>props:{props.sjit},{props.properties}</h3>
    </div>
  )
}

export default Home