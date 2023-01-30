import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas de <AddCategory/>', () => {

  test('debe cambiar valor en la caja de texto', () => {
    /** Se crea el sujeto de prueba */
    render(<AddCategory onNewCategory={() => {}}/>);

    /** Se extrae el input */
    const input = screen.getByRole('textbox');

    /** Se dispara el evento */
    fireEvent.input(input, { target: { value: 'Saitama' } });

    /** Aserción de lo que se espera que suceda */
    expect( input.value ).toBe('Saitama');
  });

  test('llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Saitama';

    render(<AddCategory onNewCategory={ () => {} }/>);

    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form', {name: 'main-form'});

    fireEvent.input(input, {target: { value: inputValue } });
    fireEvent.submit( form );

    expect(input.value).toBe('');
  });

  test('llamar onNewCategory si el input tiene un valor y si ese input es enviado', () => {

    const inputValue    = 'Saitama';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory }/> );

    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form', {name: 'main-form'});

    fireEvent.input(input, {target: { value: inputValue } });
    fireEvent.submit( form );

    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

  });

  test('llamar onNewCategory si el input está vacio y si ese input es enviado', () => {

    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory }/> );

    const form  = screen.getByRole('form', {name: 'main-form'});
    fireEvent.submit( form );

    expect( onNewCategory ).toHaveBeenCalledTimes(0);

  });

});