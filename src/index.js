import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

const theme = createMuiTheme({
  palette: {
    background: {
      primary: '#FEECD0'
    },
    secondary: {
      main: '#372549'
    }
  },
  typography: {
    h4: {
      fontFamily: "Playfair Display",
      fontWeight: "bold"
    },
    h6: {
      fontFamily: "Poppins",
    },
    body2: {
      fontFamily: "Poppins",
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

