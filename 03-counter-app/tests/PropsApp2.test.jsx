import { render, screen } from "@testing-library/react";
import { PropsApp } from "../src/PropsApp";

describe('Pruebas de <PropsApp />', () => {

  const title = 'Testing del title';
  const subTitle = 'Testing del subTitle';

  test('debe hacer match con el snapshot', () => {
    const {container} = render(<PropsApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar el mensaje "Testing title"', () => {
    render(<PropsApp title={title}/>);
    //screen obtiene el objecto del render como variable donde se pueden aplicar todos los métodos.
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe mostrar titulo en un h1', () => {
    render(<PropsApp title={title} />);
    /**getByRol contiene en su mayoría etiquetas HTML con su nombre completo */
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });

  test('debe mostrar subtitle enviado por preps', () => {

    render(
      <PropsApp
        title={title}
        subTitle={subTitle}
      />
    );
    expect(screen.getAllByText(subTitle).length).toBe(2);

  });
});