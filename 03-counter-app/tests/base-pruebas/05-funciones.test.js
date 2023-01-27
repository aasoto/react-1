import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

  test('getUser debe retornar un object', () => {

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test('getUsuarioActivo debe retornar un object', () => {

    const nombre = 'Andrés';

    const response = getUsuarioActivo(nombre);

    expect(response).toStrictEqual({
      uid: 'ABC567',
      username: nombre
    });
  })
});