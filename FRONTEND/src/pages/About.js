import React from "react";

const About = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h2>About VillageStay</h2>
      <p>
        VillageStay connects travelers with rural villages to promote authentic tourism,
        cultural exchange, and sustainable development. Stay with local families and experience the true spirit of rural life.
      </p>
      <section style={styles.aboutSection}>
  <div style={styles.aboutContainer}>
    {/* Left: Image */}
    <img
      src="https://images.unsplash.com/photo-1589738431674-9ca7a19b8c67?auto=format&fit=crop&w=800&q=80"
      alt="Village scene"
      style={styles.aboutImage}
    />

    {/* Right: Text */}
    <div style={styles.aboutTextContainer}>
      <h2 style={styles.sectionTitle}>About VillageStay</h2>
      <p style={styles.aboutText}>
        <strong>VillageStay</strong> is your gateway to experience rural India like never before. We connect travelers with serene villages offering authentic homestays, traditional food, cultural experiences, and warm hospitality.
      </p>
      <p style={styles.aboutText}>
        Our mission is to empower rural communities while promoting eco-friendly and sustainable tourism. Whether it’s farming, folk dance, or local festivals – VillageStay lets you live it, not just watch it.
      </p>
    </div>
  </div>
</section>

<section style={styles.experienceSection}>
  <h2 style={styles.sectionTitle}>What You'll Experience</h2>
  <div style={styles.experienceGrid}>
    <div style={styles.experienceCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/1995/1995524.png" alt="Homestay" style={styles.experienceIcon} />
      <h3>Warm Homestays</h3>
      <p>Live with village families and enjoy traditional hospitality.</p>
    </div>

    <div style={styles.experienceCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/2645/2645897.png" alt="Crafts" style={styles.experienceIcon} />
      <h3>Local Handicrafts</h3>
      <p>Learn pottery, weaving, and bamboo craft from skilled locals.</p>
    </div>

    <div style={styles.experienceCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/2452/2452678.png" alt="Nature" style={styles.experienceIcon} />
      <h3>Nature Walks</h3>
      <p>Explore lush fields, rivers, and green trails on foot.</p>
    </div>

    <div style={styles.experienceCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/3456/3456426.png" alt="Farm" style={styles.experienceIcon} />
      <h3>Farming Activities</h3>
      <p>Plant seeds, harvest crops, and enjoy organic food straight from farms.</p>
    </div>
  </div>
</section>
    </div>
  );
}
 const styles = {
aboutSection: {
    backgroundColor: "#f3fdf6",
    padding: "50px 20px",
    borderRadius: "12px",
    marginTop: "60px",
  },
  aboutContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "40px",
  },
  aboutImage: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  aboutTextContainer: {
    maxWidth: "600px",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: "32px",
    color: "#2a7a4d",
    marginBottom: "20px",
  },
  aboutText: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#444",
    marginBottom: "15px",
  },
  experienceSection: {
    padding: "60px 20px",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },
  experienceGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px",
  },
  experienceCard: {
    width: "250px",
    backgroundColor: "#f5fdf7",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    textAlign: "center",
    transition: "transform 0.3s",
  },
  experienceIcon: {
    width: "60px",
    height: "60px",
    marginBottom: "15px",
  },
};

export default About;