import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  // handleChange = contacts => {
  //   const contact = contacts.target;
  //   this.setState({ [contact.name]: contact.value });
  // };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { name, number } = this.state;
    onSubmit({ id: shortid.generate(), name, number });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { htmlFor } = this.props;
    const { nameId, numberId } = htmlFor;
    const { name, number } = this.state;
    const verificationLength = !name.length || !number.length;
    const verificationNumber = Number.isNaN(Number(number));
    const submitVerification = verificationLength || verificationNumber;
    return (
      <form onSubmit={this.handleSubmit} className={styles.contact}>
        <label htmlFor={nameId} className={styles.title}>
          Name
          <input
            className={styles.input}
            onChange={this.handleChange}
            value={name}
            name="name"
            type="text"
            placeholder="Input name"
          />
        </label>
        <label htmlFor={numberId} className={styles.title}>
          Number
          <input
            className={styles.input}
            onChange={this.handleChange}
            value={number}
            name="number"
            type="number"
            placeholder="Input phone"
          />
        </label>
        <button
          disabled={submitVerification}
          type="submit"
          className={!submitVerification ? styles.button : styles.disabled}
        >
          Add contact
        </button>
      </form>
    );
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    htmlFor: PropTypes.shape({
      nameId: PropTypes.string.isRequired,
      numberId: PropTypes.string.isRequired
    }).isRequired
  };
}
