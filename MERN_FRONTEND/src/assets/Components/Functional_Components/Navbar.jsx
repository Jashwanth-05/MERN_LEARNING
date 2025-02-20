import { Link } from "react-router-dom"
import { useState } from "react"
import "../../Styles/Navbar.css"
const Navbar = () => {
  var [dropdown,setDropdown]=useState(false);
  return (
    <header>
        <nav >
            <li><Link to='/home' className="nav-link">Home</Link></li>
            <li><Link to='/about' className="nav-link">About</Link></li>
            <li><Link to='/gallery' className="nav-link">Gallery</Link></li>
            <li onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>(setDropdown(false))}>Hooks
              {dropdown && (<div className="drop-down" >
              <li>UseState</li>
              <li><Link to="/useeffect" className="nav-link">UseEffect</Link></li>
              </div>)}
            </li>
            <li><Link to='/contact' className="nav-link">Contact</Link></li>
            <li><Link to='/login' className="nav-link">Login</Link></li>
        </nav>
    </header>

  )
}

export default Navbar;