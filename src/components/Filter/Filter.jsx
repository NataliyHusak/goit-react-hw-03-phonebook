  
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Filter.module.css';

const Filter = ({ htmlFor, onChange, value }) => (
  <>
    <form className={Styles.form__filter}>
      <label htmlFor={htmlFor} className={Styles['form__name-title']}>
        Find contacts by name:
        <input
          className={Styles['form__name-input']}
          onChange={onChange}
          value={value}
          name="filter"
          type="text"
          placeholder="Input contact to find"
        />
      </label>
    </form>
  </>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};
export default Filter;