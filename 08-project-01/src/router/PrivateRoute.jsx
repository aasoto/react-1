import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({children}) => {

  const {logged} = useContext(AuthContext);

  const {pathname} = useLocation();
  
  useEffect(() => {
    localStorage.setItem('lastPath', pathname);
  }, [pathname]);
  

  return (logged)
    ? children
    : <Navigate to="/login"/>
}
