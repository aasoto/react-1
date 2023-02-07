import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
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

  test('debe navegar si está autenticado', () => {

    const contextValue = {
      logged: true
    }

    render(
      <AuthContext.Provider value={contextValue}>
        {/** Si un componente renderiza el <Navigate/> este debe ser definido dentro de un MemoryRouter que hace de emulador del BrowserRouter */}
        <MemoryRouter initialEntries={['/login']}>
          {/** Dentro del MemoryRouter se deben definir las rutas de la prueba.
           * Estas pueden ser rutas diferentes a las que se tiene
           */}
          <Routes>
            <Route path="login" element={
              <PublicRoute>
                <h1>Ruta pública</h1>
              </PublicRoute>
            } />
            <Route path="marvel" element={ <h1>Página Marvel</h1> } />
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Página Marvel')).toBeTruthy();

  });
});