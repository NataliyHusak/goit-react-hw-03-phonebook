import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ filterContacts, onClickDelete }) => (
  <>
    <ul className={styles.list}>
      {filterContacts.map(element => {
        return (
          <li key={element.id} className={styles.item}>
            <span>{element.name}:</span>
            <span>{element.number}</span>
            <button
              className={styles.button}
              type="button"
              onClick={onClickDelete}
              id={element.id}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  </>
);
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDelete: PropTypes.func.isRequired
};
export default ContactList;
