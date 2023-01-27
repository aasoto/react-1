import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas 07-deses-arr', () => {

  test('validar tipos de datos del array', () => {

    const [letters, numbers] = retornaArreglo();

    /** Comparar tipo de dato de variables */
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toEqual(expect.any(String));
  });

});