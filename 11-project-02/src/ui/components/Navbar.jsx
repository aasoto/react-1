import { ShoppingBag, ShoppingCart, UserCircle } from "../icons"

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <ShoppingBag size="md"/>
            <span className="text-black font-bold text-2xl italic">Shopping Store</span>
          </div>
          <div className="flex items-center gap-5">
            <ShoppingCart size="md" />
            <UserCircle size="md"/>
          </div>
        </div>
      </nav>
    </div>
  )
}
