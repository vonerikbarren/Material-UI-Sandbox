import React from 'react';
import './App.css';

// Building a Form (Below)
// import Form from './components/Class/Form/Form';

//These are testing of bootstrap-themed components
// import HelloBootstrap from './components/Class/Bootstrap/HelloBootstrap';
// import FirstBootstrap from './components/Class/Bootstrap/FirstBootstrap';
// import Bootstrap1 from './components/Class/Bootstrap/BootStrap1';
// import BTSP12 from './components/Class/Bootstrap/BTSP12';


import { ThemeProvider } from '@material-ui/core';
import Theme from './components/MaterialUI/Theme';
import Grid from './components/MaterialUI/components/GridOne';
import Header from './components/MaterialUI/components/Header';
import Drawer1 from './components/MaterialUI/components/Drawer1';


function App() {
  return (
    <ThemeProvider theme={Theme}>

      <div className="App">

      </div>

      <Drawer1 />





    </ThemeProvider>

  );
}

export default App;
