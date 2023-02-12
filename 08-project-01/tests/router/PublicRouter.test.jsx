import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas del <PublicRouter/>', () => {

  test('debe mostrar el children si no está autenticado', () => {

    render(
      <AuthContext.Provider value={{logged: false}}>
        <PublicRoute>
          <h1>Rutas públicas</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Rutas públicas')).toBeTruthy();
  });

  test('debe navegar si está autenticado', () => {

    render(
      <AuthContext.Provider value={{logged: true}}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="login" element={
              <PublicRoute>
                <h1>Rutas públicas</h1>
              </PublicRoute>
            } />
            <Route path="/" element={ <h1>R'bonny Nola</h1> } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("R'bonny Nola")).toBeTruthy();
  });

});