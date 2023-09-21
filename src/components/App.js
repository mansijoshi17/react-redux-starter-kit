import React, { Component } from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import UserInterface from "../containers/UserInterface";
import NavBar from "../containers/Navbar";
import NewArrivals from "../containers/NewArrivals";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path="/" exact component={UserInterface} />
        <Route path="/newarrival" exact component={NewArrivals} />
      </Switch>
    </Router>
  );
}

export default App;
