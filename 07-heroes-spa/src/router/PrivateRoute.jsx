import { useEffect } from "react";
import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"

/** Recibe la prop children porque este es un higher order component */
export const PrivateRoute = ({children}) => {

  const {logged} = useContext(AuthContext);
  const {pathname, search} = useLocation();
  
  useEffect(() => {
    
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    
  }, [pathname, search])
  

  /** Evalúa si la constante logged está true o false para devolver las rutas privadas o redirigir de nuevo al login */
  return (logged)
    ? children
    : <Navigate to="/login"/>
}
