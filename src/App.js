import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    id: "",
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

  userId = () => shortid.generate();

  formSubmitHandler = ({ name, number }) => {
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, { name, number, id: this.userId() }],
      };
    });
  };

  filterHandler = (value) => {
    if (!!value) {
      this.setState({
        filter: value,
      });
    }
    //
    console.log("App", this.state.filter);
  };

  deleteUserHandler = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onFilter={this.filterHandler} />
        <ContactList
          appState={this.state}
          onDeleteContact={this.deleteUserHandler}
        />
      </div>
    );
  }
}

export default App;
