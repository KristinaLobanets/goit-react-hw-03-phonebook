import React from "react";
import styles from "../ContactList/ContactList.module.css";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li className={styles.contact_li} key={contact.id}>
              {contact.name} -{contact.number}
              <button
                className={styles.contact_btn}
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contacts;
