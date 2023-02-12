import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas del <AppRouter />', () => {

  test('debe redirigir al login si el usuario no está autenticado', () => {

    render(
      <MemoryRouter initialEntries={['/winner']}>
        <AuthContext.Provider value={{logged: false}}>
          <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Login')).toBeTruthy();

  });

  test('debe mostrar la página de /winner', () => {

    render(
      <MemoryRouter initialEntries={['/winner']}>
        <AuthContext.Provider value={{logged: true}}>
          <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Miss Universe 2022')).toBeTruthy();

  });

});