import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

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

describe('Pruebas en <SearchPage />', () => {

  /** Cuando se usan mocks de manera global se tiene que llamar el beforeEach para limpiar los funciones utilizadas */
  beforeEach(() => jest.clearAllMocks());

  test('debe mostrarse correctamente con valores por defecto (snapshot)', () => {

    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect( container ).toMatchSnapshot();
  });

  test('debe mostrar a Batman y el input con el valor del queryString', () => {

    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');

    const img = screen.getByRole('img');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    
    const divSearch = screen.getByLabelText('div-search');
    expect(divSearch.style.display).toBe("none");

    const divNoHero = screen.getByLabelText('div-no-hero');
    expect(divNoHero.style.display).toBe("none");

  });

  test('debe mostrar un error si no se encuentra el hero (batman123)', () => {

    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );

    const divNoHero = screen.getByLabelText('div-no-hero');
    expect(divNoHero.style.display).toBe("");
  });

  test('debe llamar el navigate a la pantalla nueva', () => {

    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: {name: 'searchText', value: 'superman' } });

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');
    
  });

});