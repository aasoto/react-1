import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchCandidateInput } from "../../../src/candidates";

describe('Pruebas del <SearchCandidateInput />', () => {

  test('debe mostrar resultados en la busqueda de candidatas', () => {
    render(
      <MemoryRouter>
        <SearchCandidateInput />
      </MemoryRouter>
    );

    const searchingBox = screen.getByPlaceholderText('Type the name of the contestant');
    fireEvent.input(searchingBox, {target: {value: 'mar'}});

    const links = screen.getAllByLabelText('link-redirect');
    expect(links.length).toBe(2);
  });

});