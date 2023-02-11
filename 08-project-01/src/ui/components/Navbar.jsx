import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth";
import { SidebarContext } from "../context";
import { OptionsNavbar } from "./OptionsNavbar";

export const Navbar = () => {

  const {logout} = useContext(AuthContext);

  const { switchShowSidebar, logoPath } = useContext(SidebarContext);


  return (
    <div className="fixed z-10 flex justify-center items-center w-full h-24 p-4">
      <nav className="w-full h-full bg-white rounded-lg px-5 md:px-10 py-2 shadow-lg">

        <div className="w-full h-full flex justify-between items-center">

          <div className="flex justify-start items-center gap-5">

            <button className="text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 scale-100 hover:scale-105" onClick={() => switchShowSidebar()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 sm:w-6 h-4 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            <NavLink className={({isActive}) => `text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 ${ isActive ? 'bg-gray-100' : '' }`} to="/">
              <img className="h-5" src={`${logoPath}images/miss-universe-logo.svg`} alt="miss-universe-logo" />
            </NavLink>

            <div className="group relative">
              <button className="block md:hidden text-gray-400 hover:text-gray-500 font-normal hover:font-medium px-4 py-2 hover:bg-gray-100 rounded-md transition duration-200 scale-100 hover:scale-105" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 sm:w-6 h-4 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              <div className="absolute md:static hidden group-hover:block md:block">
                <div className="flex flex-col md:flex-row justify-start items-center ml-5 gap-3 -translate-x-14 md:translate-x-0 translate-y-8 md:translate-y-0 px-8 md:px-0 py-4 md:py-0 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-lg md:shadow-none">
                  <OptionsNavbar/>
                </div>
              </div>
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
