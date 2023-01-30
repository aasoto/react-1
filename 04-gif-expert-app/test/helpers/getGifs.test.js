import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas de getGifs', () => {

  test('retorna un objecto de imagenes', async() => {
    const gifs = await getGifs('Valledupar');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });

});