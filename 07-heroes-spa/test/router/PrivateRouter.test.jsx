import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas del <PrivateRouter/>', () => {

  test('debe mostrar el children si está autenticado', () => {

    /** Emular el localStorage en el testing */
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 'abc',
        name: 'Andrés Soto'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        {/** Como se está utilizando useLocation se debe utilizar el MemoryRouter
         * En el initialEntries se mannda una ruta para que la tome como la última ruta utilizada.
         */}
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    expect(screen.getByText('Ruta privada')).toBeTruthy();
    /** Para obtener los valores del toHaveBeenCalledWith se debe ejecutar este mismo método sin parametros y copiar los que sale en el Received */
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
  });

});