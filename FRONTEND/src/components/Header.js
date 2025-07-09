import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>VillageStay</div>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/explore" style={styles.link}>Explore</Link>
        <Link to="/about" style={styles.link}>About</Link>  {/* Added About link here */}
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "0 0 12px 12px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2a7a4d",
    gap: "10px",
  },
  logoIcon: {
    width: "32px",
    height: "32px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#2a7a4d",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: 500,
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  },
  loginBtn: {
    backgroundColor: "#2a7a4d",
    color: "white",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s ease",
  }
};

export default Header;