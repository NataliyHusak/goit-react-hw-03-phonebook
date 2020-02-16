import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
    const verificationLength = name.length === 0 || number.length === 0;
    const verificationNumber = Number.isNaN(Number(number)) || number === null;
    const submitVerification = verificationLength || verificationNumber;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={Styles.contact}>
          <label htmlFor={nameId} className={Styles["name-title"]}>
            Name
            <input
              className={Styles["name-input"]}
              onChange={this.handleChange}
              value={name}
              name="name"
              type="text"
              placeholder="Input name"
            />
          </label>
          <label htmlFor={numberId} className={Styles["name-title"]}>
            Number
            <input
              className={Styles["name-input"]}
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
            className={!submitVerification ? Styles.button : Styles.disabled}
          >
            Add contact
          </button>
        </form>
      </>
    );
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    htmlFor: PropTypes.shape({
      nameId: PropTypes.string.isRequired,
      numberId: PropTypes.number.isRequired
    }).isRequired
  };

  state = {
    name: "",
    number: ""
  };
}
