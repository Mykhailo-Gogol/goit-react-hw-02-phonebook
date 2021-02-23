import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (data) => {
    this.setState((state) => {
      const contacts = state.contacts.push(data);
      return contacts;
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>

        {this.state.contacts.length ? (
          <ul className="contact-list">
            {this.state.contacts.map(({ name, number }) => {
              return (
                <li key={name}>
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
