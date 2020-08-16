import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handlNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ id: uuidv4(), name: name, number: number });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <div className={styles.block}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <label className={styles.label}>
              Name:
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={this.handleName}
              ></input>
            </label>
            <label className={styles.label}>
              Number:
              <input
                className={styles.input}
                type="text"
                name="number"
                placeholder="Your Number"
                value={number}
                onChange={this.handlNumber}
              ></input>
            </label>
            <button className={styles.button} type="submit">
              Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
};
