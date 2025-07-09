import React from "react";
import VillageCard from "../components/VillageCard"; // ✅ correct relative path

// dummy data
const villages = [
  {
    name: "Rampur Village",
    description: "Peaceful village with hills and rivers.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    name: "Chandanpur Village",
    description: "Enjoy festivals and traditional foods.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  },
  {
    name: "Govindapur Village",
    description: "Popular for handmade pottery and scenic beauty.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
];

const Explore = () => {
  return (
    <div style={{ padding: "40px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {villages.map((village, index) => (
        <VillageCard key={index} village={village} />
      ))}
    </div>
  );
};

export default Explore;