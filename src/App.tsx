import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './global/theme';

import { Main } from './pages/Main';

function App() {
  return (
    <>
      <ThemeProvider theme={ theme }>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
