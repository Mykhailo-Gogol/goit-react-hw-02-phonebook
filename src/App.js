import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const getContactArrayLS = localStorage.getItem("contacts");
    this.setState({
      contacts: JSON.parse(getContactArrayLS)
        ? JSON.parse(getContactArrayLS)
        : this.state.contacts,
    });
  }

  componentDidUpdate() {
    const setContactArrayLS = JSON.stringify(this.state.contacts);
    localStorage.setItem("contacts", setContactArrayLS);
  }

  formSubmitHandler = ({ name, number }) => {
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, { name, number }],
      };
    });
  };

  filterHandler = (value) => {
    if (value) {
      this.setState({
        filter: value,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onFilter={this.filterHandler} />
        <ContactList appState={this.state} />
      </div>
    );
  }
}

export default App;
