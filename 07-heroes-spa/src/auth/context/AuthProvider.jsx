import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
  logged: false
}

export const AuthProvider = ({children}) => {

  /** este es un hook propio de react, el cual recibe la función del reducer y el estado inicial de la petición.
   * En la desectructuración se pueden nombrar las variables como se desee porque se está desestructurando un arreglo y estas se obtienen es por posiciones.
   */
  const [authState, dispatch] = useReducer( authReducer, initialState);

  return (
    <AuthContext.Provider value={{}}>
      { children }
    </AuthContext.Provider>
  )
}
