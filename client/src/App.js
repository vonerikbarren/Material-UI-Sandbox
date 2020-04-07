import React from 'react';
import './App.css';

// Building a Form (Below)
// import Form from './components/Class/Form/Form';

//These are testing of bootstrap-themed components
import HelloBootstrap from './components/Class/Bootstrap/HelloBootstrap';
import FirstBootstrap from './components/Class/Bootstrap/FirstBootstrap';
import Bootstrap1 from './components/Class/Bootstrap/BootStrap1';
import BTSP12 from './components/Class/Bootstrap/BTSP12';


import { ThemeProvider } from '@material-ui/core';
import Theme from './components/MaterialUI/Theme';
import Grid from './components/MaterialUI/components/GridOne';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <h1>React and Material-UI Sandbox Ready</h1>

        <Grid> </Grid>









      </div>



    </ThemeProvider>

  );
}

export default App;
