import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

describe('Pruebas en <SearchPage />', () => {

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

});