import React from 'react';
import { render } from '@testing-library/react';
import { store } from '../app/store';
import { Provider } from 'react-redux';

export function renderWithRedux(component: React.ReactElement) {
  return {
    ...render(<Provider store={ store }>{ component }</Provider>),
    store,
  }
}
