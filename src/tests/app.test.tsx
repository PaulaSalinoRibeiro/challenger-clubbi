import App from '../App';
import { screen, waitFor } from '@testing-library/react';
import { renderWithRedux } from './renderWithredux';
import { mockGhibliAPI } from './mock/mockApp';
import { filmsMock } from './mock/filmsMock';

describe('App page test', () => {

  it('should have input and button search', () => {
    renderWithRedux(<App />);

    expect(screen.getByTestId('input-search')).toBeInTheDocument();
    expect(screen.getByTestId('button-search')).toBeInTheDocument();
  })
  
});
