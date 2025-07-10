import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import './VillageStay.css';

// 🔶 Modal component must be inside Router
function RegisterModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h2>Register to Unlock Full Access</h2>
        <button
          onClick={() => {
            onClose();
            navigate("/signup");
          }}
          style={modalStyles.btn}
        >
          Register
        </button>
        <button onClick={onClose} style={modalStyles.btn}>
          Cancel
        </button>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem("auth") === "true"
  );
  const [showPopup, setShowPopup] = useState(!isRegistered);

  useEffect(() => {
    setShowPopup(!isRegistered);
  }, [isRegistered]);

  // ❗ Don't show Header, Footer, or Modal on /signup route
  const isSignupPage = location.pathname === "/signup";

  return (
    <>
      {!isSignupPage && <Header />}

      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={<SignUp onAuth={() => setIsRegistered(true)} />}
          />
          <Route path="/login" element={<Login />} />

          {isRegistered ? (
            <>
              <Route path="/about" element={<About />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
            </>
          ) : (
            <>
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/explore" element={<Navigate to="/" replace />} />
              <Route path="/booking" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </main>

      {!isSignupPage && <Footer />}
      {!isSignupPage && showPopup && (
        <RegisterModal onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    maxWidth: "400px",
  },
  btn: {
    margin: "10px",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#2a7a4d",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
