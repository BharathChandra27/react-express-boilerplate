import React, { Component } from "react";
import Customers from "./Customers";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Express connection Boiler plate</h1>
        <br />
        <Customers />
      </div>
    );
  }
}

export default App;
