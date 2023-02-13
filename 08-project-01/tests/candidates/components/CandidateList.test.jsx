import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CandidateList } from "../../../src/candidates";
import { SidebarContext } from "../../../src/ui";

const showSidebarMocked = jest.fn();

describe('Prueba de <CandidateList/>', () => {

  test('debe mostrar listado', () => {

    render(
      <MemoryRouter>
        <SidebarContext.Provider value={{showSidebar: showSidebarMocked}}>
          <CandidateList page={'Finalists'} placement={'finalist'}/>
        </SidebarContext.Provider>
      </MemoryRouter> 
    );

    const candidateCard = screen.getAllByLabelText('candidate-card');
    expect(candidateCard.length).toBe(2);

  });

});