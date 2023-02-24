import { Link } from "react-router-dom"
import { ArrowRightOnRectangle, UserPlus} from "../../icons"

export const AuthMenu = () => {
  
  return (
    <div className="auth-menu">
      <div className="contains">
        <Link to={'/auth/login'}>
          <button className="group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-white">
              <ArrowRightOnRectangle/>
            </svg>
            <span>Iniciar sesión</span>
          </button>
        </Link>
        <Link to={'/auth/create-account'}>
          <button className="group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-white">
              <UserPlus/>
            </svg>
            <span>Crear cuenta</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

