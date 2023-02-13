import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "../../../src/candidates";
import { SidebarContext } from "../../../src/ui";

const showSidebarMocked = jest.fn();

describe('Pruebas de <HomePage/>', () => {

  test('debe mostrar HomePage', () => {
    render(
      <MemoryRouter>
        <SidebarContext.Provider value={{showSidebar: showSidebarMocked}}>
          <HomePage/>
        </SidebarContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('71th edition - Contestants')).toBeTruthy();

  });

});