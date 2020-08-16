import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../filter/filter";
import { v4 as uuidv4 } from "uuid";
import styles from "./phonebook.module.css";
import PropTypes from "prop-types";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  addContact = (contact) => {
    if (this.state.contacts.find((item) => item.name === contact.name)) {
      alert("The name is already exsist");
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.addContact({ id: uuidv4(), name: name, number: number });
    this.setState({ name: "", number: "" });
  };

  getFilteredData = () => {
    return this.state.filter
      ? this.state.contacts.filter((item) =>
          item.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  onDelete = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <div className={styles.block}>
          <div className={styles.form}>
            <h1>Phonebook</h1>
            <ContactForm addContact={this.addContact} />
          </div>
          <div className={styles.contacts}>
            <Filter
              searchContact={this.getFilteredData}
              value={filter}
              onFilter={this.handleFilter}
            />

            <ContactList
              contacts={this.getFilteredData()}
              onDelete={this.onDelete}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Phonebook;

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
