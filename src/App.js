import React, { useState } from "react";
import Navbar from "./Navbar";
import Sweet from "./Sweet";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Sweet from "./Sweet";
import Home from "./Home";
import Special from "./Special";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route
          exact
          path="/veg"
          component={() => <Veg />}
        />
        <Route exact path="/nonveg" component={Nonveg} />
        <Route exact path="/sweet" component={Sweet} />
        <Route exact path="/special" component={Special} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

export default App;
