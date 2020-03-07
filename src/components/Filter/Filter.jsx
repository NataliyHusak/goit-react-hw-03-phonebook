import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ htmlFor, onChange, value }) => (
  <form className={styles.filter}>
    <label htmlFor={htmlFor} className={styles.title}>
      Find contacts by name:
      <input
        className={styles.input}
        onChange={onChange}
        value={value}
        name="filter"
        type="text"
        placeholder="Input contact to find"
      />
    </label>
  </form>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired
};
export default Filter;