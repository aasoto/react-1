import { getByTestId, getByText, render } from "@testing-library/react";
import { PropsApp } from "../src/PropsApp";

describe('Pruebas de <PropsApp />', () => {

  // test('debe hacer match con el snapshoot', () => {
  //   const title = 'Prueba de PropsApp'
  //   const {container} = render( <PropsApp title={title}/>);

  //   expect(container).toMatchSnapshot();
  // });

  test('debe mostrar el título en un h1', () => {
    const title = 'Prueba de PropsApp'
    const {container, getByText, getByTestId} = render( <PropsApp title={title}/>);

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
  });

  test('debe mostrar el subtitulo enviado por props', () => {
    const title = "Testing title";
    const subTitle = "Testing subtitle";
    const {getAllByText} = render(
      <PropsApp
        title={title}
        subTitle={subTitle}
      />
    );

    expect(getAllByText(subTitle).length).toBe(2);
  });
});