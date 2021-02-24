import React, { Component } from "react";
class Filter extends Component {
  state = {
    filter: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  filterInputHandler = (event) => {
    this.handleInputChange(event);
    this.props.onFilter(this.state.filter);
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
