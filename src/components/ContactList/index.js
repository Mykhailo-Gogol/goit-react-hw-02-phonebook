import shortid from "shortid";

const ContactList = (props) => {
  const uniqueId = () => {
    return shortid.generate();
  };

  const contactFilter = () => {
    const { filter, contacts } = props.appState;
    const normalizedFilter = filter.toLowerCase();
    const filteredArray = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
    return filteredArray;
  };

  return (
    <>
      {contactFilter().length ? (
        <ul className="contact-list">
          {contactFilter().map(({ name, number, id }) => {
            return (
              <li key={uniqueId()}>
                <p className="contact-text">
                  <span>{name}</span>
                  <span>{number}</span>
                </p>
                <button
                  className="delete-button"
                  onClick={() => props.onDeleteContact(id)}
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
};

export default ContactList;
