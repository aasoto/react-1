import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { fireEvent, render, screen} from '@testing-library/react';
import { AuthContext } from "../../../src/auth/context";

const loginMock = jest.fn();

describe('Pruebas de <LoginPage />', () => {

  beforeEach(() => jest.clearAllMocks());

  test('debe hacer match con el snapshot', () => {

    const {container} = render(
      <AuthContext.Provider value={{login: loginMock}}>
        <LoginPage />
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();

  });

  test('no debe enviar los campos en blanco', () => {

    render(
      <AuthContext.Provider value={{login: loginMock}}>
        <LoginPage />
      </AuthContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(loginMock).not.toHaveBeenCalled();

  });

  test('debe mostrar alerta de error cuando usuario y/o contraseña son incorrectos', () => {

    render(
      <AuthContext.Provider value={{login: loginMock}}>
        <LoginPage />
      </AuthContext.Provider>
    );

    const email = 'admin@gmail.com';
    const password = '123456789';

    const inputEmail = screen.getByRole('textbox', { name: 'email' });
    fireEvent.input(inputEmail, {target: {value: email}});
    expect(inputEmail.value).toBe(email);

    const inputPassword = screen.getByPlaceholderText('Password');
    fireEvent.input(inputPassword, {target: {value: password}});
    expect(inputPassword.value).toBe(password);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText('The email and/or password are wrong')).toBeTruthy();
    const alertErrorAuth = screen.getByLabelText('alert-error-auth');
    expect(alertErrorAuth.className).toContain('block');

  });

  test('debe llamar función login con argumentos', () => {
    
    render(
      <AuthContext.Provider value={{login: loginMock}}>
        <LoginPage />
      </AuthContext.Provider>
    );

    const email = 'admin@gmail.com';
    const password = '12345678';

    const inputEmail = screen.getByRole('textbox', { name: 'email' });
    fireEvent.input(inputEmail, {target: {value: email}});
    expect(inputEmail.value).toBe(email);

    const inputPassword = screen.getByPlaceholderText('Password');
    fireEvent.input(inputPassword, {target: {value: password}});
    expect(inputPassword.value).toBe(password);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(loginMock).toHaveBeenCalledWith("Administrador");
  });
});