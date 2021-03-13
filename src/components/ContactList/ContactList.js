import React, { Component } from "react";
import shortid from "shortid";

class ContactList extends Component {
  uniqueId = () => {
    return shortid.generate();
  };

  contactFilter = () => {
    const { filter, contacts } = this.props.appState;
    const normalizedFilter = filter.toLowerCase();
    const filteredArray = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
    //
    console.log("List", filter);
    return filteredArray;
  };

  render() {
    return (
      <>
        {this.contactFilter().length ? (
          <ul className="contact-list">
            {this.contactFilter().map(({ name, number, id }) => {
              return (
                <li key={this.uniqueId()}>
                  <p>{`${number} ${name} `}</p>
                  <button
                    className="delete-button"
                    onClick={() => this.props.onDeleteContact(id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Contact list is empty</p>
        )}
      </>
    );
  }
}

export default ContactList;
