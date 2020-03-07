import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ filterContacts, onClickDelete }) => (
  <ul className={styles.list}>
    {filterContacts.map(contact => {
      return (
        <li key={contact.id} className={styles.item}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <button
            className={styles.button}
            type="button"
            onClick={onClickDelete}
            id={contact.id}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDelete: PropTypes.func.isRequired
};
export default ContactList;
