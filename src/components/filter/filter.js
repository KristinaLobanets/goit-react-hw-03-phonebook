import React from "react";
import styles from "./filter.module.css";

const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <h2>Search</h2>

      <input
        className={styles.form}
        type="text"
        placeholder="search"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
};

export default Filter;
