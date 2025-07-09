import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState({ name: "", email: "", content: "" });

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${message.name}, for contacting us! We will respond shortly.`);
    setMessage({ name: "", email: "", content: "" });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Name:</label>
        <input type="text" name="name" value={message.name} style={{ padding: "5px"}} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" style={{ padding: "5px"}} value={message.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="content" value={message.content} onChange={handleChange} rows="5" required />

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#2a7a4d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  }
};

export default Contact;