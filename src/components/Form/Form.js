import React, { Component } from "react";
import shortid from "shortid";
// import * as s from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              placeholder="Name"
              onChange={this.handleInputChange}
              name="name"
              value={this.state.name}
              id={this.nameInputId}
            />
          </label>

          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="tel"
              placeholder="Number"
              onChange={this.handleInputChange}
              name="number"
              value={this.state.number}
              id={this.numberInputId}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
