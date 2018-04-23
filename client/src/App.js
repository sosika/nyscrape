import React from "react";
import Jumbotron from "./pages/Jumbotron";
import Panel from "./pages/Panel";
//import NoMatch from "./pages?noMatch";
//import Nav from "./components/Nav";
import {BrowseRouter as Router, Route, Switch} from "react-router-dom";

const App = () => (
  <Router>
  <div>
  //<Nav />
  <Switch>
    <Route exact path="/" component={Jumbotrom} />
    <Route exact path="/saved" component={Panel} />
    //<Route component={NoMatch} />
  </Switch>

  </div>
  </Router>
);

export default App;
