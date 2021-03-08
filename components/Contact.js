import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact({ text }) {
  return (
    <div className={styles.contactMain}>
      <div className={styles.contactCard}>
        <h4>{text.contactHeader}</h4>
        <p>{text.contactText}</p>
        <h5>{text.contactInfos}</h5>
      </div>
    </div>
  );
}
