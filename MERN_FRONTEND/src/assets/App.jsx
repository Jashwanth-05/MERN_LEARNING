import React from 'react'
import Home from './Components/Functional_Components/Home'
import About from './Components/Functional_Components/About'
import Contact from './Components/Functional_Components/Contact'
import Gallery from './Components/Functional_Components/Gallery'
import Login from './Components/Functional_Components/Login'
import Signup from './Components/Functional_Components/Signup'
import Navbar from './Components/Functional_Components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ClassCompEg from './Components/Class_Components/ClassComponentEG'
import "./App.css"
import UseEffect from './Components/Functional_Components/UseEffect'
import UseEffectAPI from './Components/Functional_Components/UseEffectAPI'
import UseState from './Components/Functional_Components/UseState'
import UseRef from './Components/Functional_Components/UseRef'
import UseMemo from './Components/Functional_Components/UseMemo'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/useeffect" element={<UseEffect />} />
            <Route path="/usestate" element={<UseState/>} />
            <Route path="/useeffectapi" element={<UseEffectAPI />} />
            <Route path="/useref" element={<UseRef/>} />
            <Route path="/usememo" element={<UseMemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App