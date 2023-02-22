import { IconBlack, ShoppingBag, ShoppingCart, UserCircle } from "../icons"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="nav-container">
          <div className="nav-section">
            <IconBlack size="md">
              <ShoppingBag/>
            </IconBlack>
            <h1>Shopping Store</h1>
          </div>
          <div className="nav-section">

            <IconBlack size="md">
              <ShoppingCart/>
            </IconBlack>

            <Link to={'/auth/login'}>
              <IconBlack size="md">
                <UserCircle/>
              </IconBlack>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
