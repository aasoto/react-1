import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

/** ---- PARA EVALUAR QUE UNA FUNCIÓN DE UNA LIBRERÍA HA SIDO LLAMADA -----
 * Mock de la función a evaluar */
const mockedUseNavigate = jest.fn();

/** Mock de la librería donde se encuentra la función */
jest.mock('react-router-dom', () => ({
  /** usa el operador spread para mandar el resto de métodos de los librería */
  ...jest.requireActual('react-router-dom'),
  /** Sobre escribe la función de la librería con el mock */
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas con el <Navbar/>', () => {

  const contextValue = {
    logged: true,
    user: {
      name: 'Andrés Soto',
      id: '123'
    },
    logout: jest.fn()
  }

  /** Cuando se usan mocks de manera global se tiene que llamar el beforeEach para limpiar los funciones utilizadas */
  beforeEach(() => jest.clearAllMocks());

  test('debe mostrar el nombre del usuario', () => {

    render(
      /** Se ingresa desde la ruta /login para que esta redireccione a la página principal de marvel despues de la autenticación */
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  /** La función navigate es una función de una librería de terceros por lo que se debe probar de manera especíal */
  test('debe llamar el logout y navigate cuando se hace clic en el boton logout', () => {

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const buttonElement = screen.getByLabelText('btn-logout');
    fireEvent.click(buttonElement);

    expect(contextValue.logout).toHaveBeenCalled();
    /** Ir a la parte superior para ver como se configura un mock de la función y de la librería entera */
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
  });

});