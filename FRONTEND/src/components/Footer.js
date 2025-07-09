import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 VillageStay. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#2a7a4d",
    color: "white",
    textAlign: "center",
  }
};

export default Footer;