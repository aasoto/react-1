import { render, screen } from "@testing-library/react";
import { AlertErrorAuth } from "../../../src/auth/components/AlertErrorAuth";

describe('Pruebas de <AlertError />', () => {

  test('debe mostrar alerta de error', () => {

    render(<AlertErrorAuth/>);

    expect(screen.getByText('The email and/or password are wrong')).toBeTruthy();

  });

});