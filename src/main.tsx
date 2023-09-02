import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RickAndMorty } from './components';
import { GlobalStyles, ThemeProvider, createTheme } from '@mui/material';

const client = new QueryClient();
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <GlobalStyles styles={{ body: { margin: 0 } }} />
        <RickAndMorty />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
