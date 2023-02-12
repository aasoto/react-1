import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas del useForm', () => {

  const initialForm = {
    email: 'admin@gmail.com',
    password: '12345678'
  }

  test('debe regresar los valores por defecto', () => {

    const {result} = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      email: initialForm.email,
      password: initialForm.password,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    });

  });

  test('debe cambiar el nombre en el formulario', () => {

    const newValue = 'andresalfredosotosuarez@gmail.com';

    const {result} = renderHook(() => useForm(initialForm));
    const {onInputChange} = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'email',
          value: newValue
        }
      });
    });

    expect(result.current.email).toBe("andresalfredosotosuarez@gmail.com");
    expect(result.current.formState.email).toBe("andresalfredosotosuarez@gmail.com");

  });

  test('debe resetear el formulario', () => {

    const {result} = renderHook(() => useForm(initialForm));
    const {onInputChange, onResetForm} = result.current;
    const newValue = 'andresalfredosotosuarez@gmail.com';

    expect(result.current.email).toBe(initialForm.email);

    act(() => {
      onInputChange({
        target: {
          name: 'email',
          value: newValue
        }
      });
    });

    expect(result.current.email).toBe("andresalfredosotosuarez@gmail.com");

    act(() => onResetForm());

    expect(result.current.formState).toBe(initialForm);
  });

});