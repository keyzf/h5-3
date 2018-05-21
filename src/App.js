import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { VisualLoadable } from "./routers/page_router";
import './core.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path={"/"}>
            <Redirect to='visual'/>
          </Route>
          <Route path={"/visual"} component={VisualLoadable}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
