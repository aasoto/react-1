import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas de authReducer', () => {

  const initialState = {
    user: 'Andrés Soto',
    logged: false
  }

  test('debe retornar el estado por defecto', () => {

    const newState = authReducer(initialState, {});
    expect( newState ).toBe( initialState );

  });

  test('debe de (login) llamar el login autenticar y establecer el user', () => {
    
    const action = {
      type: types.login,
      payload: {
        user: 'Andrés Soto'
      }
    };

    const {user, logged} = authReducer(initialState, action);
    expect(user).toBe(action.payload);
    expect(logged).toBeTruthy();
  });

  test('debe de (logout) borrar el name del usuario y logged en false', () => {
    
    const state = {
      logged: true,
      user: {id: '123', name: 'Andrés'}
    }

    const action = {
      type: types.logout
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });

});