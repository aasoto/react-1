import { Link } from "react-router-dom"
import { ArrowRightOnRectangle, UserPlus} from "../../icons"

export const AuthMenu = () => {
  
  return (
    <div className="w-56 px-5 py-3 backdrop-blur-md bg-white/50 rounded-md shadow-lg">
      <div className="flex flex-col gap-3">
        <Link to={'/auth/login'}>
          <button className="flex group items-center gap-3 w-full px-4 py-3 rounded-md hover:bg-black hover:text-white transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`text-black group-hover:text-white w-6 h-6 transition duration-200`}>
              <ArrowRightOnRectangle/>
            </svg>
            <span>Iniciar sesión</span>
          </button>
        </Link>
        <Link to={'/auth/create-account'}>
          <button className="flex group items-center gap-3 w-full px-4 py-3 rounded-md hover:bg-black hover:text-white transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`text-black group-hover:text-white w-6 h-6 transition duration-200`}>
              <UserPlus/>
            </svg>
            <span>Crear cuenta</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

