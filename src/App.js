import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { BaseHome as Home } from "containers";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
