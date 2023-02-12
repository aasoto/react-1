import { fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';
import { SidebarContext } from '../../../src/ui/context';

const logoutMock = jest.fn();
const switchShowSidebarMock = jest.fn();
const logoPathMock = jest.fn();

describe('Pruebas del <Navbar />', () => {

  test('debe mostrar logo y opciones del navbar', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{logout: logoutMock}}>
          <SidebarContext.Provider value={{ 
              switchShowSidebar: switchShowSidebarMock, 
              logoPath: logoPathMock 
            }}>
            <Navbar/>
          </SidebarContext.Provider>
        </AuthContext.Provider>
      </MemoryRouter>
    );
    
    expect(screen.getByLabelText('logo-image')).toBeTruthy();

    expect(screen.getByText('Winner')).toBeTruthy();
    expect(screen.getByText('Runners Up')).toBeTruthy();
    expect(screen.getByText('Finalists')).toBeTruthy();
    expect(screen.getByText('Semifinalists')).toBeTruthy();
  });

  test('debe llamar a la función logout()', () => {

    render(
      <MemoryRouter>
        <AuthContext.Provider value={{logout: logoutMock}}>
          <SidebarContext.Provider value={{ 
              switchShowSidebar: switchShowSidebarMock, 
              logoPath: logoPathMock 
            }}>
            <Navbar/>
          </SidebarContext.Provider>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const btnLogout = screen.getByTitle('Logout');
    fireEvent.click(btnLogout);

    expect(logoutMock).toHaveBeenCalled();

  });

  test('debe llamar <Sidebar />', () => {

    render(
      <MemoryRouter>
        <AuthContext.Provider value={{logout: logoutMock}}>
          <SidebarContext.Provider value={{ 
              switchShowSidebar: switchShowSidebarMock, 
              logoPath: logoPathMock 
            }}>
            <Navbar/>
          </SidebarContext.Provider>
        </AuthContext.Provider>
      </MemoryRouter>
    );
    
    const btnSearch = screen.getByLabelText('btn-search');
    fireEvent.click(btnSearch);
    expect(switchShowSidebarMock).toHaveBeenCalled();
  });

});