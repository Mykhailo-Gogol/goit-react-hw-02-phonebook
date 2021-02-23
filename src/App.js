import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
class App extends Component {
  state = {
    contacts: ["Jude", "Mango"],
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>

        {this.state.contacts.length ? (
          <ol>
            {this.state.contacts.map((e) => {
              return (
                <li key={e}>
                  {e}
                  <button>Delete</button>
                </li>
              );
            })}
          </ol>
        ) : (
          "Contact list is empty"
        )}
      </div>
    );
  }
}

export default App;
