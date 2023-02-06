import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

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

  /** este es un hook propio de react, el cual recibe la función del reducer y el estado inicial de la petición.
   * En la desectructuración se pueden nombrar las variables como se desee porque se está desestructurando un arreglo y estas se obtienen es por posiciones.
   */
  const [authState, dispatch] = useReducer( authReducer, {}, init);

  /** Iniciar sesión */
  const login = (name = '') => {

    const user = { id: 'ABC', name }

    const action = {
      type: types.login,
      payload: user
    }

    /** Guarda los datos del usuario en un variable en el localstorage */
    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  /** Cerrar sesión */
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
      ...authState,
      login: login,
      logout: logout
    }}>
      { children }
    </AuthContext.Provider>
  )
}
