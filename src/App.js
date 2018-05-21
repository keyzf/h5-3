import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { VisualLoadable } from "./routers/page_router";
import { store } from "./redux/store";
import "./core.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path={"/"}>
              <Redirect to='visual'/>
            </Route>
            <Route path={"/visual"} component={VisualLoadable}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
