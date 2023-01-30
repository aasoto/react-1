import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas del <GifExpertApp/>', () => {

  test('debe hacer match con el snapshot', () => {
    
    const {container} = render( <GifExpertApp/>);
    expect(container).toMatchSnapshot();

  });

  test('debe aceptar categoría', () => {
    render(<GifExpertApp/>);

    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form', {name: 'main-form'});

    fireEvent.input(input, { target: { value: 'Saitama' } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(screen.getByText('Saitama'));

  });

  test('debe rechazar categoría repetida', () => {
    render(<GifExpertApp/>);

    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form', {name: 'main-form'});

    fireEvent.input(input, { target: { value: 'Saitama' } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(screen.getByText('Saitama'));

    fireEvent.input(input, { target: { value: 'Saitama' } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(screen.getAllByText('Saitama').length).toBe(1);
    // screen.debug();
  });

});