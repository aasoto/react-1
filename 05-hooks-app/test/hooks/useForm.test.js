import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { UseForm } from "../../src/hooks/UseForm";

describe('Pruebas del useForm', () => {

  const initialForm = {
    name: 'Andrés',
    email: 'andres@gmail.com'
  }

  test('debe regresar los valores por defecto', () => {

    const {result} = renderHook(() => UseForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    });

  });

  test('debe cambiar el nombre en el formulario', () => {

    const newValue = 'Juan';

    const {result} = renderHook(() => UseForm(initialForm));
    const {onInputChange} = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValue
        }
      });
    });
    
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

  });

  test('debe cambiar resetear el formulario', () => {

    const newValue = 'Juan';

    const {result} = renderHook(() => UseForm(initialForm));
    const {onInputChange, onResetForm} = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValue
        }
      });
    });
    
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

    act(() => {
      onResetForm();
    });
    
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);

  });

});