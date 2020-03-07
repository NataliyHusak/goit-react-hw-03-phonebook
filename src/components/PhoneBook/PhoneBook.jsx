import React, { Component } from "react";
import shortid from "shortid";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import styles from "./PhoneBook.module.css";

export default class PhoneBook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  inputIds = {
    nameId: shortid.generate(),
    numberId: shortid.generate(),
    finedId: shortid.generate()
  };

  componentDidMount() {
    if (localStorage.getItem("localData") !== null) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem("localData"))
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("localData", JSON.stringify(contacts));
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = contact => {
    const { contacts } = this.state;
    const { name } = contact;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already is contacts`);
    }
    this.setState({
      contacts: [...contacts, contact]
    });
  };

  deleteContact = e => {
    const { id } = e.target;
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    const { contacts, filter } = this.state;
    const { nameId, numberId, finedId } = this.inputIds;
    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          htmlFor={{ nameId, numberId }}
        />
        <h2 className={styles.subTitle}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter
            onChange={this.handleChange}
            htmlFor={finedId}
            value={filter}
          />
        )}
        <ContactList
          filterContacts={filterContacts}
          onClickDelete={this.deleteContact}
        />
      </section>
    );
  }
}
