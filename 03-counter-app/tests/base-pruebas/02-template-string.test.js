import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas de 02-template-string', () => {

  test('getSaludo desde retornar Hola Andrés', () => { 
    const name = 'Andrés';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  })

})