import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba 06-deses-obj', () => {
  
  test('función retorna object', () => {

    const params = {
      clave: '12345678', 
      edad: 24
    };

    const response = usContext(params);

    expect(response).toStrictEqual({
      nombreClave: params.clave,
      anios: params.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    });

  });

});