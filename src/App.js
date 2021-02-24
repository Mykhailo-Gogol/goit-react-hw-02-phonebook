import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import Form from "./components/Form";
import Filter from "./components/Filter";
class App extends Component {
  state = {
    contacts: [],
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

  uniqueId = () => {
    return shortid.generate();
  };

  formSubmitHandler = ({ name, number }) => {
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, { name, number }],
      };
    });
  };

  filterHandler = (value) => {
    if (value) {
      const normalizedFilter = value.toLowerCase();

      this.renderFiltered = this.state.contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
      console.log(this.renderFiltered);
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter appState={this.state} onFilter={this.filterHandler} />

        {this.state.contacts.length ? (
          <ul className="contact-list">
            {this.state.contacts.map(({ name, number }) => {
              return (
                <li key={this.uniqueId()}>
                  {`${name} ${number}`}
                  <button className="delete-button">Delete</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Contact list is empty</p>
        )}
      </div>
    );
  }
}

export default App;
