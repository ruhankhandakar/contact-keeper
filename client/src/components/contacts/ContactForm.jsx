import React, { useState, useContext } from "react";
import contactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const ContactContext = useContext(contactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  const { name, email, phone, type } = contact;
  const handleChange = ({ target: { name, value } }) => {
    setContact({
      ...contact,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    ContactContext.addContact(contact);

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">Add Contact</h2>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="email" name="email" value={email} onChange={handleChange} />
      <input type="text" name="phone" value={phone} onChange={handleChange} />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={handleChange}
      />{" "}
      Personal
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={handleChange}
      />{" "}
      Professioal
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
