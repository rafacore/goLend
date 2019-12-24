import React from 'react';
import Nav from './components/NavBar/Nav';
import Vehicles from './components/pages/vehicles/Vehicles';
import Years from './components/pages/years/Years';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {YearProvider} from './components/yearContext';

import './components/styles/global.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <YearProvider>
    <div>
      <Router>
      <Nav />
      <Route path="/years" exact component={Years} />
      <Route path="/vehicles/:year" component={Vehicles} />
      {/* <Route path="/years/:id" component={Vehicles} /> */}
 
      </Router>
  
    </div>
    </YearProvider>
  );
}

export default App;
