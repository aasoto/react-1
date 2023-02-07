import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

  /** Este es un custom Hook de react-router-dom para facilitar la navegación
   * entre componentes.
   * Los Hooks que son hechos por librería de terceros como en esta caso react-router-dom tambien se conocen como custom Hooks.
   */
  const navigate = useNavigate();

  /** Se obtiene las variables y funciones del contexto de la autentición */
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    /** Cuando se cierra la sesión se debe reemplazar la ruta para que no se puedan regresar */
    navigate('/login', {
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          
          <span className='nav-item nav-link text-primary'>
            {user?.name}
          </span>

          <button 
            className='nav-item nav-link btn'
            aria-label='btn-logout'
            onClick={() => onLogout()}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}