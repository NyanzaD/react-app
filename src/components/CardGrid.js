import React from "react";
import Card from "./Card";
import card1Image from "../assets/images/hero-image.jpg";
import HighlightOnHover from "./HighlightOnHover";

function CardGrid() {
  const programs = [
    { image: card1Image, title: "Education", description: "Empowering children through education.",link: "/programs#education",},// Link to the 'Education' section
    { image: card1Image, title: "Feeding", description: "Providing nutritious meals to those in need.",link: "/programs#feeding",}, // Link to the 'Education' section
    { image: card1Image, title: "HIV Counseling", description: "Supporting individuals with compassionate care.",link: "/programs#hiv-counseling",}, // Link to the 'Education' section
    { image: card1Image, title: "Mentorship", description: "Guiding children toward a brighter future.",link: "/programs#mentorship",},  // Link to the 'Education' section
  ];

  return (
<div className="py-2 bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-8 mt-6">Programs</h2>
  <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {programs.map((program, index) => (
      <HighlightOnHover key={index}>
        <a href={program.link}>
          <Card
            image={program.image}
            title={program.title}
            description={program.description}
          />
        </a>
      </HighlightOnHover>
    ))}
  </div>
</div>

  );
}

export default CardGrid;
