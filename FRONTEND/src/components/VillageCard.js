import React from "react";

const VillageCard = ({ village }) => {
  return (
    <div style={styles.card}>
      <img src={village.image} alt={village.name} style={styles.image} />
      <h3>{village.name}</h3>
      <p>{village.description}</p>
      <button style={styles.button}>Book Now</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    width: "300px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    margin: "15px",
  },
  image: {
    width: "100%",
    height: "180px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#2a7a4d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default VillageCard;