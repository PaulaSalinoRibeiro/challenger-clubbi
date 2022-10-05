import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './global/theme';

import { Header } from './components/Header'

function App() {
  return (
    <>
      <ThemeProvider theme={ theme }>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
