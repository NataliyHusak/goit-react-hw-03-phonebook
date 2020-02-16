import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactList.module.css';

const ContactList = ({ filterContacts, onClickDelete }) => (
  <>
    <ul className={Styles.list}>
      {filterContacts.map(e => {
        return (
          <li key={e.id} className={Styles.item}>
            <span className={Styles['item-name']}>{e.name}:</span>
            <span className={Styles['item-number']}>{e.number}</span>
            <button
              className={Styles.button}
              type="button"
              onClick={onClickDelete}
              id={e.id}
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
  onClickDelete: PropTypes.func.isRequired,
};
export default ContactList;