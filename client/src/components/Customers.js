import React, { Component } from "react";

class Coustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/customers")
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, () => console.log(this.state))
      );
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-success">Coustomers</h1>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id} className="text-secondary">
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Coustomers;
