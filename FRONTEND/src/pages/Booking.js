import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    village: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your booking for ${formData.village} on ${formData.date} has been received.`);
    setFormData({ name: "", email: "", village: "", date: "" });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Village:</label>
        <select name="village" value={formData.village} onChange={handleChange} required>
          <option value="">Select a village</option>
          <option value="Rampur Village">Rampur Village</option>
          <option value="Chandanpur Village">Chandanpur Village</option>
          <option value="Govindapur Village">Govindapur Village</option>
        </select>

        <label>Booking Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <button type="submit" style={styles.button}>Book Now</button>
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

export default Booking;