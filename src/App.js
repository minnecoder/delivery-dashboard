import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Packages from "./components/Packages";
import Stops from "./components/Stops";
import Drivers from "./components/Drivers";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/stops" component={Stops} />
        <Route exact path="/drivers" component={Drivers} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
