import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRoute = ({children}) => {
  const {logged} = useContext(AuthContext);

  /** Evalúa si la constante logged está true o false para devolver las rutas privadas o redirigir de nuevo al login */
  return (!logged)
    ? children
    : <Navigate to={'/marvel'}/>
}
