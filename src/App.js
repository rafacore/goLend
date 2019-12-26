import React from "react";
import Nav from "./components/NavBar/Nav";
import Vehicles from "./containers/vehicles/Vehicles";
import Years from "./containers/years/Years";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/styles/global.js";


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
        <Route path="/" exact component={Years} />
        <Route path="/years" exact component={Years} />
        <Route path="/vehicles/:year"  component={Vehicles} />
        {/* <Route path="/years/:id" component={Vehicles} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
