import { types } from "../../../src/auth/types";

describe('Pruebas del types.js', () => {

  test('debe regresar estos types', () => {

    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    });

  });

});