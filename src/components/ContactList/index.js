import { Component } from "react";
import PropTypes from "prop-types";

class ContactList extends Component {
  render() {
    const { filteredContacts, onDeleteContact } = this.props;

    return (
      <>
        {filteredContacts().length ? (
          <ol className="contact-list">
            {filteredContacts().map(({ name, number, id }) => {
              return (
                <li key={name}>
                  <p className="contact-text">
                    <span>{name}</span>
                    <span>{number}</span>
                  </p>
                  <button
                    className="delete-button"
                    onClick={() => onDeleteContact(id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ol>
        ) : (
          <p>Contact list is empty</p>
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
