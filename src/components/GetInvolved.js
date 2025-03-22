import React from "react";
import Card from "./Card"; // Import the reusable Card component
import card1Image from "../assets/images/hero-image.jpg";
import "../assets/styles/GetInvolved.css";
import HighlightOnHover from "./HighlightOnHover";



function GetInvolved() {
  const involvementOptions = [
    {    image: card1Image,
      title: "Volunteer",
      description: "Spend your time supporting children in need.",
    },
    {  image: card1Image,
      title: "Sponsor a Child",
      description: "Make a difference in a child's life through sponsorship.",
    },
    {  image: card1Image,
      title: "Sponsor a Project",
      description: "Fund initiatives that change lives and uplift communities.",
    },
  ];

  return (
    <div className="py-10 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Get Involved</h2>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {involvementOptions.map((option, index) => (
          <HighlightOnHover key={index}>
            <a
              href="/getinvolved#volunteer"
            >
              <Card

                image={option.image}
                title={option.title}
                description={option.description}

              />
            </a>
          </HighlightOnHover>
        ))}
      </div>
    </div>
  );
}

export default GetInvolved;

