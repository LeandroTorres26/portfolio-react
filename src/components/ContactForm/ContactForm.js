import styles from "./contactForm.module.scss";
import React, { useState } from "react";
import { send } from "emailjs-com";
const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_ifa2qa9", "template_cjj1lhu", toSend, "user_2YEziwWIn53MNXgj1DQJD")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setButtonText("Sent!");
        setToSend({
          message: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    setButtonText("Send");
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="from_name" value={toSend.from_name} onChange={handleChange} required />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="from_email" value={toSend.from_email} onChange={handleChange} required />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        type="textarea"
        name="message"
        value={toSend.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit" className={styles.button}>
        {buttonText}
      </button>
    </form>
  );
};

export default ContactForm;
