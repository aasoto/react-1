import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas de <LoginPages />', () => {



  test('debe mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage/>
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre-user');
    expect(preTag.innerHTML).toBe('null');

  });

  test('debe llamar al setUser cuando se hace click en el botón', () => {
    const setUserMock = jest.fn();

    const user = { id: 123,
      name: 'Andrés Soto',
      email: 'andres@gmail.com'
    }

    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <LoginPage/>
      </UserContext.Provider>
    )

    const btnSend = screen.getByLabelText('btn-send-user');
    fireEvent.click(btnSend);

    expect(setUserMock).toHaveBeenCalledWith(user);

  });

});