import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas del <AppRouter/>', () => {

  test('debe de mostrar el login si no está autenticado', () => {

    const contextValue = {
      logged: false
    }

    render(
      /** Como se están utilizando las rutas se tiene que colocar el MemoryRouter en vez del BrowserRouter */
      <MemoryRouter initialEntries={['/marvel']}>
        {/** Se usa el AuthContext porque se usa este contexto de autenticación para obtener el esquema y el reducer de la autenticación */}
        <AuthContext.Provider value={contextValue}>
          {/** Componente a probar o sujeto de pruebas */}
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('debe mostrar el componente de Marvel si está autenticado', () => {

    const contextValue = {
      logged: true
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

  });

});