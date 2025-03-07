import { Link } from "react-router-dom"
import { useState } from "react"
import "../../Styles/Navbar.css"
const Navbar = () => {
  var [dropdown,setDropdown]=useState(false);
  var [dropdown1, showDropdown1] = useState(false);
  return (
    <header>
        <nav >
            <li><Link to='/home' className="nav-link">Home</Link></li>
            <li><Link to='/about' className="nav-link">About</Link></li>
            <li><Link to='/gallery' className="nav-link">Gallery</Link></li>
            <li className="dropdown-container" onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>(setDropdown(false))}>Hooks
              {dropdown && (<ul className="drop-down" >
              <li><Link to="/usestate" className="nav-link">UseState</Link></li>
              <li><Link to="/useeffect" className="nav-link">UseEffect</Link></li>
              <li><Link to="/useeffectapi" className="nav-link">UseEffectAPI</Link></li>
              <li><Link to="/useref" className="nav-link">UseRef</Link></li>
              <li><Link to="/usememo" className="nav-link">UseMemo</Link></li>
              <li><Link to="/usecallback" className="nav-link">UseCallback</Link></li>
              <li>
                <Link to="/use-memoize" className="nav-link">
                  useMemoizeCustomHook
                </Link>
              </li>
              </ul>)}
            </li>
            <li>
          <Link to="/hoc" className="nav-link">
            HoC
          </Link>
        </li>
        <li
          className="dropdown-container"
          onMouseEnter={() => showDropdown1(!dropdown1)}
          onMouseLeave={() => showDropdown1(!dropdown1)}
        >
          <span className="nav-link">Memoization</span>
          
            {dropdown1 && (
              <ol className="drop-down">
              <li>
                <Link to="/memo" className="nav-link">
                  Memo
                </Link>
              </li>
              <li>
                <Link to="/lazy" className="nav-link">
                  Lazy Component
                </Link>
              </li>
              </ol>
            )}
          
        </li>
            <li><Link to="/res" className="nav-link">ContextAPI</Link></li>
            <li><Link to='/contact' className="nav-link">Contact</Link></li>
            <li><Link to='/login' className="nav-link">Login</Link></li>
        </nav>
    </header>

  )
}

export default Navbar;