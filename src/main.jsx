import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

// import { DishDetails } from './pages/DishDetails'
import { AddDish } from './pages/AddDish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AddDish />
    </ThemeProvider>
  </React.StrictMode>,
)
