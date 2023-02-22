import { useState } from "react"
import { Link } from "react-router-dom";
import { Icon, ShoppingBag, ShoppingCart, UserCircle } from "../icons"
import { AuthMenu } from "./auth/AuthMenu";

export const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="navbar">
        <nav>
          <div className="nav-container">
            <div className="nav-section">
              <Link className="nav-section" to={'/'}>
                <Icon color="black" size="md">
                  <ShoppingBag/>
                </Icon>
                <h1>Shopping Store</h1>
              </Link>            
            </div>
            <div className="nav-section">

              <Icon color="black" size="md">
                <ShoppingCart/>
              </Icon>

              <div onMouseEnter={() => setDropdown(!dropdown)}>
                <Icon color="black" size="md">
                  <UserCircle/>
                </Icon>
              </div>
              
            </div>
          </div>
        </nav>
      </div>

      <div onMouseLeave={() => setDropdown(false)} className={`${dropdown ? 'translate-x-0': 'translate-x-[120%]'} fixed top-24 right-5 transition duration-200`}>
        <AuthMenu/>
      </div>
    </>
  )
}
