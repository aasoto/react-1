import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types";

describe('Pruebas de authReducer', () => {

  const initialState = {
    email: 'admin@gmail.com',
    password: '12345678',
    logged: false
  }

  test('debe retornar el estado por defecto', () => {

    /** En esta prueba se testea el default del ciclo switch porque no se recibe acción alguna,
     * es decir que en el segundo parametro donde se encuentra el objecto vacio debería estar el action con las propiedades logged y user.
     */
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);

  });

  test('debe de (login) llamar el login autenticar y establecer el user', () => {

    /** recibe la propiedad type el tipo de acción que va a ejecutar el reducer,
     * en el payload se envian los datos del usuario para que este los repique con el estado de logeado.
     */
    const action = {
      type: types.login,
      payload: {
        email: 'admin@gmail.com'
      }
    }

    /** recibe el estado inicial y la acción, luego retorna los datos de usuario y el estado del logeado */
    const {user, logged} = authReducer(initialState, action);
    expect(user).toBe(action.payload);
    expect(logged).toBeTruthy();

  });

  test('debe de (logout) borrar el email del usuario y logged en false', () => {

    const state = {
      logged: true,
      user: {email: 'admin@gmail.com'}
    }

    const action = {
      type: types.logout
    }

    const newState = authReducer(state, action);
    expect(newState).toEqual({logged: false});
  });

});