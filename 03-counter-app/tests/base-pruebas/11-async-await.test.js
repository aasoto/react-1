import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => {

  test('getImage debe retornar un URL de la imagen', async() => {

    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe('string');

  });

  // test('getImage no returna la imagen', async() => {

  //   const resp = await getImagen();
  //   console.log(resp);
  //   expect(resp).toBe('No se encontró la imagen.');

  // });
});