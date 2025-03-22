import React from "react";
import heroImage from "../assets/images/hero-image.jpg"; // Correct the path to match your folder structure

function AboutUsRow() {
  return (
    <div className="py-10 px-6 bg-gray-100">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            We are dedicated to providing a safe and nurturing environment for children in need.
            Our programs focus on education, health, and community development.
          </p>
          <p className="text-gray-700">
            Join us in making a difference in the lives of children and their communities.
          </p>
        </div>
        <img
          src={heroImage} // Use the imported heroImage variable
          alt="About Us"
          className="w-full h-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
}

export default AboutUsRow;
