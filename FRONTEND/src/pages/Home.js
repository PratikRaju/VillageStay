import React, { useState } from "react";
import VillageCard from "../components/VillageCard";

const dummyVillages = [
  {
    name: "Rampur Village",
    description: "Peaceful village surrounded by hills and greenery.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    name: "Chandanpur Village",
    description: "Known for festivals, farming and rural charm.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  },
  {
    name: "Govindapur Village",
    description: "Popular for handmade pottery and scenic beauty.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVillages, setFilteredVillages] = useState(dummyVillages);

  const handleSearch = () => {
    const results = dummyVillages.filter(village =>
      village.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVillages(results);
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>Welcome to VillageStay</h1>
          <p style={styles.subtitle}>
            Discover rural India. Book peaceful stays in authentic villages.
          </p>
          {/* Search Bar */}
          <div style={styles.searchBar}>
            <input
              type="text"
              placeholder="Search village..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleSearch} style={styles.searchBtn}>Search</button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>Explore Destinations</h2>
        <div style={styles.featureGrid}>
          {filteredVillages.length > 0 ? (
            filteredVillages.map((village, index) => (
              <VillageCard key={index} village={village} />
            ))
          ) : (
            <p>No villages found for "{searchTerm}"</p>
          )}
        </div>
      </section>
      {/* Why VillageStay Section */}
<section style={styles.whySection}>
  <h2 style={styles.sectionTitle}>Why Choose VillageStay?</h2>
  <p style={styles.sectionDesc}>Explore the authentic life of Indian villages with these unique experiences.</p>

  <div style={styles.whyGrid}>
    <div style={styles.whyCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/2590/2590277.png" alt="Homestay" style={styles.icon} />
      <h3>Authentic Homestays</h3>
      <p>Stay with real village families and experience rural hospitality firsthand.</p>
    </div>

    <div style={styles.whyCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/2698/2698194.png" alt="Culture" style={styles.icon} />
      <h3>Cultural Exchange</h3>
      <p>Participate in traditional music, dance, and craft-making with locals.</p>
    </div>

    <div style={styles.whyCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="Farm" style={styles.icon} />
      <h3>Farm Tours</h3>
      <p>Walk through farms, help in planting, and learn about organic practices.</p>
    </div>

    <div style={styles.whyCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png" alt="Festival" style={styles.icon} />
      <h3>Village Festivals</h3>
      <p>Enjoy local fairs, seasonal festivals, and vibrant village celebrations.</p>
    </div>

    <div style={styles.whyCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Nature" style={styles.icon} />
      <h3>Nature Walks</h3>
      <p>Go for morning walks through forests, hills, and riverside trails.</p>
    </div>

    <div style={styles.whyCard}>
      <img src="https://cdn-icons-png.flaticon.com/512/3143/3143510.png" alt="Sustainable" style={styles.icon} />
      <h3>Sustainable Tourism</h3>
      <p>Support eco-friendly rural development while enjoying your stay.</p>
    </div>
  </div>
</section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  hero: {
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('https://thumbs.dreamstime.com/b/romanian-hillside-village-summer-time-mountain-landscape-transylvania-romania-romanian-hillside-village-summer-120917479.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "80px 40px",
  borderRadius: "12px",
},
  heroText: {
    maxWidth: "500px",
    textAlign: "left",
  },
  title: {
    fontSize: "40px",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: "18px",
    marginTop: "10px",
    marginBottom: "20px",
    color: "#FFFFFF",
  },
  heroImage: {
    width: "400px",
    borderRadius: "10px",
  },
  searchBar: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    flex: "1",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  searchBtn: {
    padding: "10px 20px",
    backgroundColor: "#2a7a4d",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
  features: {
    marginTop: "40px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#2a7a4d",
  },
  featureGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  whySection: {
  marginTop: "60px",
  padding: "30px 20px",
  backgroundColor: "#f0fdf4",
  borderRadius: "12px",
},
sectionDesc: {
  fontSize: "16px",
  color: "#444",
  marginBottom: "30px",
},
whyGrid: {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "25px",
},
whyCard: {
  width: "240px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
},
icon: {
  width: "60px",
  height: "60px",
  marginBottom: "15px",
}
};
export default Home;