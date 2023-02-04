import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Pruebas del <HomePage/>', () => {

  test('debe mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre-user');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe mostrar el componente con el usuario', () => {

    const user = { id: 123,
      name: 'Andrés Soto',
      email: 'andres@gmail.com'
    }
    
    render(
      <UserContext.Provider value={{user: user}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre-user');
    expect(preTag.innerHTML).toContain(JSON.stringify(user, null, 3));
  });

});