import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { name: "Beck Shepherd", number: "(974) 931-1339", id: "id-1" },
      { name: "Izaan Buckner", number: "(201) 249-1149", id: "id-2" },
      { name: "Kaila O'Connor", number: "(829) 270-9181", id: "id-3" },
      { name: "Asa Craig", number: "(787) 218-3261", id: "id-4" },
      { name: "Harriett Stark", number: "(629) 735-8430", id: "id-5" },
    ],
    filter: "",
  };

  componentDidMount() {
    // const getContactArrayLS = localStorage.getItem("contacts");
    // this.setState({
    //   contacts: JSON.parse(getContactArrayLS)
    //     ? JSON.parse(getContactArrayLS)
    //     : this.state.contacts,
    // });
  }

  componentDidUpdate() {
    // const setContactArrayLS = JSON.stringify(this.state.contacts);
    // localStorage.setItem("contacts", setContactArrayLS);
  }

  userId = () => shortid.generate();

  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.some((e) => e.name === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => {
        return {
          contacts: [...contacts, { name, number, id: this.userId() }],
        };
      });
    }
  };

  filterHandler = (value) => {
    if (!!value) {
      this.setState(({
        filter: value,
      }));
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
