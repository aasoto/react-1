import { NavLink } from "react-router-dom"

export const OptionsNavbar = () => {
  return (
    <>
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
    </>
  )
}
