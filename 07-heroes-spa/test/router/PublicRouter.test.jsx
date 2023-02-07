import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas de <PublicRouter />', () => {

  test('debe de mostrar el children si no está autenticado', () => {

    const contextValue = {
      logged: false
    }

    render(
      /** Para poder utilizar el <PublicRouter/> se debe obtener el contexto
       * Es decir el <AuthContext/>
       * En el value se proporciona el estado que se tiene en este momento.
       */
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          {/** Bajo de premisa de que el <PublicRoute/> solo protege lo que está dentro de el, se puede colocar cualquier cosa aquí para que se encuentre protegida */}
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    
    /** se espera que en el screen exista 'Ruta pública' */
    expect(screen.getByText('Ruta pública')).toBeTruthy();
  });

});