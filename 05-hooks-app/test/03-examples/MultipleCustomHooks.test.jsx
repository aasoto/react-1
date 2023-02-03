import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

/**
 * Cuando se va a probar un componente que tiene custom hooks se debe crear un mock por cada custom hook
 */

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas de <MultipleCustomHooks />', () => {

  /** inicialización de una función de un custom hook que se va a evaluar */
  const mockIncrement = jest.fn();

  /** Especificación de la data de retorno del custom hook que se está probando
   * En este caso de manera global
   */
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  /** Limpieza de la data de los mocks */
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe mostrar el componente por defecto', () => {

    /** Especificación de la data de retorno del custom hook que se está probando
     * En este caso de manera local
     */
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });

    render(<MultipleCustomHooks/>);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));

    const nextButton = screen.getByRole('button', {name: 'Next quote'});
    expect(nextButton.disabled).toBeTruthy();

  });

  test('debe mostrat un Quote', () => {

    /** Especificación de la data de retorno del custom hook que se está probando
     * En este caso de manera local
     */
    useFetch.mockReturnValue({
      data: [{author: 'Andrés', quote: 'Hola Mundo'}],
      isLoading: false,
      hasError: null
    });

    render( <MultipleCustomHooks /> );
    expect( screen.getByText('Hola Mundo') ).toBeTruthy();
    expect( screen.getByText('Andrés') ).toBeTruthy();

    const nextButton = screen.getByRole('button', {name: 'Next quote'});
    expect(nextButton.disabled).toBeFalsy();

  });

  test('debe llamar la función de incrementar', () => {

    /** Especificación de la data de retorno del custom hook que se está probando
     * En este caso de manera local
     */
    useFetch.mockReturnValue({
      data: [{author: 'Andrés', quote: 'Hola Mundo'}],
      isLoading: false,
      hasError: null
    });

    render( <MultipleCustomHooks /> );
    const nextButton = screen.getByRole('button', {name: 'Next quote'});
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();

  });

});