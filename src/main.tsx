import React from 'react'
import ReactDOM from 'react-dom/client'
import { RickAndMorty } from './components';
import { GlobalStyles, ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { margin: 0 } }} />
      <RickAndMorty />
    </ThemeProvider>
  </React.StrictMode>,
)
