import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas de <CounterApp />', () => {

  const start = 100;

  test('hacer match con el snapshot', () => {
    const {container} = render(<CounterApp value={start}/>);
    expect(container).toMatchSnapshot();
  });

  test('mostrar valor iniciar de 100', () => {
    render(<CounterApp value={start}/>);
    expect(parseInt(screen.getByRole('heading', {level: 2}).innerHTML)).toBe(start);
  });

  test('debe de incrementar con el botón +1', () => {
    render(<CounterApp value={start}/>);
    fireEvent.click(screen.getByRole('button', {name: 'increment'}));
    expect(parseInt(screen.getByRole('heading', {level: 2, name: 'counter'}).innerHTML)).toBe(start + 1);
  });

  test('debe de incrementar con el botón -1', () => {
    render(<CounterApp value={start}/>);
    fireEvent.click(screen.getByRole('button', {name: 'decrement'}));
    expect(parseInt(screen.getByRole('heading', {level: 2, name: 'counter'}).innerHTML)).toBe(start - 1);
  });

  test('debe regresar el conteo al valor inicial', () => {
    render(<CounterApp value={start}/>);

    fireEvent.click(screen.getByRole('button', {name: 'increment'}));
    fireEvent.click(screen.getByRole('button', {name: 'increment'}));
    fireEvent.click(screen.getByRole('button', {name: 'increment'}));

    fireEvent.click(screen.getByRole('button', {name: 'reset'}));

    expect(parseInt(screen.getByRole('heading', {level: 2, name: 'counter'}).innerHTML)).toBe(start);
  });
});