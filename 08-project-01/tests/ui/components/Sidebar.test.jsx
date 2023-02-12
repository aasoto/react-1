import { render } from "@testing-library/react";
import { Sidebar, SidebarContext } from "../../../src/ui";

const showSidebarMock = jest.fn();

describe('Pruebas de <Sidebar />', () => {

  test('debe hacer match con el snapshot', () => {

    const {container} = render(
      <SidebarContext.Provider value={{showSidebar: showSidebarMock}}>
        <Sidebar/>
      </SidebarContext.Provider>
    );

    expect(container).toMatchSnapshot();

  });

});