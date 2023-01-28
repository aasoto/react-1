import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => {

  test('getImage debe retornar un URL de laimagen', async() => {

    const url = await getImagen();
    expect(typeof url).toBe('string');

  });

});