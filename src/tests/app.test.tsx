/* eslint-disable testing-library/no-unnecessary-act */
import App from '../App';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from './renderWithredux';
import { mockApp, mockGhibliAPI } from './mock/mockApp';
import { filmsMock, peopleMock, locationMock } from './mock/apiMock';


describe('Main page test', () => {

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

    const title = await screen.findByText(filmsMock[0].title);
    expect(title).toBeInTheDocument();
    mockApp.restore();
  });

  it ('should have a people card  when people button click',  async () => {
    mockGhibliAPI(peopleMock);
    renderWithRedux(<App />);

    const peopleBtn = screen.getByTestId('people');
    act(() => {
      userEvent.click(peopleBtn)
    });
    
    const title = await screen.findByText(peopleMock[0].name);
    expect(title).toBeInTheDocument();
    mockApp.restore();
  });

  it ('should have a location card when location button click',  async () => {
    mockGhibliAPI(locationMock);
    renderWithRedux(<App />);

    const locationBtn = screen.getByTestId('locations');
    act(() => {
      userEvent.click(locationBtn)
    });

    const title = await screen.findByText(locationMock[0].name);
    expect(title).toBeInTheDocument();
    mockApp.restore();
  });

  it ('should have a film card when film button click',  async () => {
    mockGhibliAPI(filmsMock);
    renderWithRedux(<App />);

    const filmBtn = screen.getByTestId('film');
    act(() => {
      userEvent.click(filmBtn)
    });

    const title = await screen.findByText(filmsMock[0].title);
    expect(title).toBeInTheDocument();
    mockApp.restore();
  });

  it('should serach by input text', async () => {
    mockGhibliAPI(filmsMock);
    renderWithRedux(<App />);

    const input = screen.getByTestId('input-search');
    const searchBtn = screen.getByTestId('button-search');

    act(() => {
      userEvent.type(input, filmsMock[0].title);
      userEvent.click(searchBtn);
    });

    const title = await screen.findByText(filmsMock[0].title);
    expect(title).toBeInTheDocument();
    mockApp.restore();
  });
  
});
