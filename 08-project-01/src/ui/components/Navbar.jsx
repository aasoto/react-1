import { useContext } from "react";
import { AuthContext } from "../../auth";
import { SidebarContext } from "../context";

export const Navbar = () => {

  const {logout} = useContext(AuthContext);

  const { switchShowSidebar } = useContext(SidebarContext);

  return (
    <div className="fixed z-10 flex justify-center items-center w-full h-24 p-4">
      <nav className="w-full h-full bg-white rounded-lg px-10 py-2 shadow-lg">
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-5">
            <button onClick={() => switchShowSidebar()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <img className="h-5" src="images/miss-universe-logo.svg" alt="" />
          </div>
          <div className="flex justify-end items-center gap-5">
            <button onClick={logout}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
