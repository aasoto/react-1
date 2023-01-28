import { render } from "@testing-library/react";
import { PropsApp } from "../src/PropsApp";

describe('Pruebas de <PropsApp />', () => {

  test('debe hacer match con el snapshoot', () => {
    const title = 'Prueba de PropsApp'
    const {container} = render( <PropsApp title={title}/>);

    expect(container).toMatchSnapshot();
  });

  test('debe mostrar el título en un h1', () => {
    const title = 'Prueba de PropsApp'
    const {container, getByText} = render( <PropsApp title={title}/>);

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(title);
  });

});