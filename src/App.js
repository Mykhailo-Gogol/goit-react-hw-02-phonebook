import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import Form from "./components/Form";
import Filter from "./components/Filter";
class App extends Component {
  state = {
    contacts: [
      { name: "aa", number: 123 },
      { name: "aaa", number: 123 },
    ],
  };

  renderFiltered;

  uniqueId = () => {
    return shortid.generate();
  };

  formSubmitHandler = (data) => {
    console.log(this.state.contacts);
    this.setState((state) => {
      const contacts = state.contacts.push(data);
      console.log(this.state.contacts);
      return contacts;
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
          "Contact list is empty"
        )}
      </div>
    );
  }
}

export default App;
