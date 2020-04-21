import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/customers" component={Customers} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
