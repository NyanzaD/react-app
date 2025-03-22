import React from "react";
import heroImage from "../assets/images/hero-image.jpg";

function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Children"
        className="w-full h-full object-cover"
      />
      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">
        <h1 className="text-4xl font-bold mb-4">Welcome to Mukumu Children's Home</h1>
        <p className="text-lg mb-6">
          Providing a safe and nurturing environment for children to grow and thrive.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
