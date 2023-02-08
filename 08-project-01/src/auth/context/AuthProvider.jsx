import { useReducer } from "react";
import { types } from "../types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

/** Función de inicialización */
const init = () => {
  /** Obtiene los datos del usuario en el localstorage */
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({children}) => {

  /** El authState es para obtener la información que retorna el reducer.
   * El dispatch es para enviarle las acciones que este requiera.
   */
  const [authState, dispatch] = useReducer( authReducer, {}, init);

  const login = (name = '') => {

    const user = {id: 'ABC', name};

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');

    const action = {
      type: types.logout,
      payload: ''
    }

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState, //variables o datos que retornan del reducer de autenticación
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
