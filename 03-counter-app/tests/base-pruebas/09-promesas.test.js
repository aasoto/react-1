import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas de 09-promesas', () => {

  /**La propiedad done es para esperar el valor de la promesa */
  test('getHeroeByIdAsync debe retornar un héroe', (done) => {
    
    const id = 1;
    getHeroeByIdAsync(id)
      .then(hero => {

        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });

        done();
      });

  });

  /**La propiedad done es para esperar el valor de la promesa */
  test('getHeroeByIdAsync debe retornar un héroe', (done) => {
    
    const id = 100;
    getHeroeByIdAsync(id)
      .catch(error => {

        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

        done();
      });

  });

});