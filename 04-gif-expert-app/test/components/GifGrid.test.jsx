import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');  

describe('Pruebas de <GifGrid/>', () => {

  const category = 'One Punch';

  test('debe mostrar loading inicial', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={category}/>);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));

  });

  test('debe mostrar los gifs cargados', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },{
        id: '123',
        title: 'Gokú',
        url: 'https://localhost/goku.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
    
  });
});