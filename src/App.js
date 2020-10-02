import React from 'react';
import './App.css';
import Stepper from './Stepper'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: '#21C3F1',
  //   },
  //   secondary: {
  //     main: '#366283',
  //   },
  // },
});

function App() {
  return (
    <div className="App">
       <Stepper />
    </div>
  );
}

export default App;
