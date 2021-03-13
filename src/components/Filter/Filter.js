import React, { Component } from "react";
class Filter extends Component {
  state = {
    filter: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [`${name}`]: value,
    });
  };

  filterInputHandler = (event) => {
    const { filter } = this.state;
    this.handleInputChange(event);
    this.props.onFilter(filter);
  };

  blurHandler = (event) => {
    event.target.value = "";
    this.state.filter = event.target.value;
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="search contact"
          name="filter"
          value={filter}
          onChange={this.filterInputHandler}
          onBlur={this.blurHandler}
        />
      </div>
    );
  }
}

export default Filter;
