import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas de <GifItem/>', () => {

  const image = {
    id: 1,
    title: 'imagen',
    url: 'http://gifexpect.xyz/images/123.jpg'
  };

  test('hace match con el snapshot', () => {

    const {container} = render( <GifItem key={image.id} {...image}/>);
    expect(container).toMatchSnapshot();
  });

  test('mostrar URL de la imagen y el ALT indicado', () => {

    render(<GifItem title={image.title} url={image.url}/>);

    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(image.url);
    expect(alt).toBe(image.title);
  });

  test('mostrar el título en el componente', () => {

    render(<GifItem title={image.title} url={image.url}/>);
    expect(screen.getByText(image.title)).toBeTruthy();

  })

});
