import React, { useContext, Fragment } from "react";
import contactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const ContactContext = useContext(contactContext);
  const { contacts, filtered } = ContactContext;

  if (!contacts.length) return <h4>Please add a contact</h4>;
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
