/* eslint-disable testing-library/no-unnecessary-act */
import App from '../App';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from './renderWithredux';
import { mockGhibliAPI } from './mock/mockApp';
import { filmsMock, peopleMock, locationMock } from './mock/apiMock';


describe('App page test', () => {

  it('should have input and button search', () => {
    renderWithRedux(<App />);

    expect(screen.getByTestId('input-search')).toBeInTheDocument();
    expect(screen.getByTestId('button-search')).toBeInTheDocument();
    expect(screen.getByTestId('film')).toBeInTheDocument();
    expect(screen.getByTestId('people')).toBeInTheDocument();
    expect(screen.getByTestId('locations')).toBeInTheDocument();
  });

  it('should have a film card app start', async () => {
    mockGhibliAPI(filmsMock);
    renderWithRedux(<App />);

    const card = await screen.findByTestId(filmsMock[0].id);
    expect(card).toBeInTheDocument();
  });

  it ('should have a people card  when people button click',  async () => {
    mockGhibliAPI(peopleMock);
    renderWithRedux(<App />);

    const peopleBtn = screen.getByTestId('people');
    act(() => {
      userEvent.click(peopleBtn)
    });
    
    const card = await screen.findByTestId(peopleMock[0].id);
    expect(card).toBeInTheDocument();

  });

  it ('should have a location card when location button click',  async () => {
    mockGhibliAPI(locationMock);
    renderWithRedux(<App />);

    const locationBtn = screen.getByTestId('locations');
    act(() => {
      userEvent.click(locationBtn)
    });
    
    const card = await screen.findByTestId(locationMock[0].id);
    expect(card).toBeInTheDocument();

  });
  
});
