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
import DriverReports from "./components/DriverReports";
import Trucks from "./components/Trucks";
import DeliveryRoutes from "./components/DeliveryRoutes";
import Users from "./components/Users";

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
        <Route exact path="/driverreports" component={DriverReports} />
        <Route exact path="/trucks" component={Trucks} />
        <Route exact path="/deliveryroutes" component={DeliveryRoutes} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
