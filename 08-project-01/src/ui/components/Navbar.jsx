import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth";
import { SidebarContext } from "../context";

export const Navbar = () => {

  const {logout} = useContext(AuthContext);

  const { switchShowSidebar, logoPath } = useContext(SidebarContext);

  return (
    <div className="fixed z-10 flex justify-center items-center w-full h-24 p-4">
      <nav className="w-full h-full bg-white rounded-lg px-10 py-2 shadow-lg">

        <div className="w-full h-full flex justify-between items-center">

          <div className="flex justify-start items-center gap-5">

            <button className="text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 scale-100 hover:scale-105" onClick={() => switchShowSidebar()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            <NavLink className={({isActive}) => `text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 ${ isActive ? 'bg-gray-100' : '' }`} to="/">
              <img className="h-5" src={`${logoPath}images/miss-universe-logo.svg`} alt="miss-universe-logo" />
            </NavLink>

            <div className="flex justify-start items-center ml-5 gap-3">
              <NavLink className={({isActive}) => `text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 ${ isActive ? 'border border-gray-500 font-medium bg-gray-100' : '' }`} to="/winner">
                Winner
              </NavLink>

              <NavLink className={({isActive}) => `text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 ${ isActive ? 'border border-gray-500 font-medium bg-gray-100' : '' }`} to="/runnersup">
                Runners Up
              </NavLink>

              <NavLink className={({isActive}) => `text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 ${ isActive ? 'border border-gray-500 font-medium bg-gray-100' : '' }`} to="/finalists">
                Finalists
              </NavLink>

              <NavLink className={({isActive}) => `text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 ${ isActive ? 'border border-gray-500 font-medium bg-gray-100' : '' }`} to="/semifinalists">
                Semifinalists
              </NavLink>
            </div>

          </div>

          <div className="flex justify-end items-center gap-5">

            <button className="text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 scale-100 hover:scale-105" title="Logout" onClick={logout}>
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
