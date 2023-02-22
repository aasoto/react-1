import { IconBlack, ShoppingBag, ShoppingCart, UserCircle } from "../icons"

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
            <IconBlack size="md">
              <UserCircle/>
            </IconBlack>
          </div>
        </div>
      </nav>
    </div>
  )
}
