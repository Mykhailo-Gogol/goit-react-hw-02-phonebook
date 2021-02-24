import React, { Component } from "react";
class Filter extends Component {
  state = {
    filter: "",
  };

  filterInputHandler = (event) => {
    this.props.onFilter(this.state.filter);
    this.handleInputChange(event);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search contact"
          name="filter"
          value={this.state.filter}
          onChange={this.filterInputHandler}
        />
      </div>
    );
  }
}

export default Filter;
