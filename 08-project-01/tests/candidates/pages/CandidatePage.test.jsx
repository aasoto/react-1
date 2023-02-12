import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { getCandidateById } from "../../../src/candidates/helpers/getCandidateById";
import { CandidatePage } from "../../../src/candidates/pages/CandidatePage";
import { SidebarContext } from "../../../src/ui";

/** AQUI SE ESTÁ UTILIZANDO UN HELPER */
//se debe hacer un mock de todo el archivo del helper
jest.mock('../../../src/candidates/helpers/getCandidateById');

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
})); 

const showSidebarMock = jest.fn();
const pathUpMock = jest.fn();


describe('Pruebas de <CandidatePage/>', () => {

  /** se debe dar el valor que debería retornar con la url dada */
  getCandidateById.mockReturnValue({
    'id': 'co',
    'name': 'MARÍA FERNANDA ARISTIZÁBAL',
    'country': 'Colombia',
    'age': '25',
    'instagram': '@mafearistizabalu',
    'meet': 'María Fernanda Aristizabál is a motivational speaker, model, and influencer with a degree in media and journalism. Through her campaign #MakeEveryMomentWorthIt, she shares her philosophy of life via supporting vulnerable communities in Colombia. She is especially passionate about generating a positive impact in children’s mental health. Aristizabal works with various nonprofit organizations, including Smile Train and Best Buddies. Aristizabal wishes to use her Miss Universe platform to give visibility and awareness to water scarcity through her campaign #SOSWATER.',
    'placement': 'semi-finalist'
  });

  beforeEach(() => jest.clearAllMocks());

  test('debe mostrarse correctamente el snapshot', () => {

    const {container} = render(
      <AuthContext.Provider value={{logged: true}}>
        <MemoryRouter>
          <SidebarContext.Provider value={{showSidebar: showSidebarMock, pathUp: pathUpMock}}>
            <CandidatePage/>
          </SidebarContext.Provider>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( container ).toMatchSnapshot();

  });

  test('debe llamar a la función onNavigateBack()', () => {

    render(
      <AuthContext.Provider value={{logged: true}}>
        <MemoryRouter initialEntries={['/candidate/co']}>
          <SidebarContext.Provider value={{showSidebar: showSidebarMock, pathUp: pathUpMock}}>
            <CandidatePage/>
          </SidebarContext.Provider>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const btnBack = screen.getByLabelText('btn-back');
    fireEvent.click(btnBack);

    expect(mockedUseNavigate).toHaveBeenCalledWith(-1);
  });

});