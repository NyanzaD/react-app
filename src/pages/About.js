import React from "react";
import Hero from "../components/Hero"; // Adjust the path based on your file structure

function About() {
  const aboutSections = [
    {
      id: "what-we-do",
      title: "What We Do",
      description: "Learn about our programs.",
    },
    {
      id: "our-causes",
      title: "Our Causes",
      description: "Discover what drives us.",
    },
    {
      id: "who-we-are",
      title: "Who We Are",
      description: "Meet the team behind our work.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Us"
        description="Learn more about our mission to provide a safe and nurturing environment for children."
        image="/assets/images/about-hero.jpg" // Replace with the actual image path
      />

      {/* About Sections */}
      <h2 className="text-4xl font-bold text-center mb-10">About Us</h2>
      {aboutSections.map((section) => (
        <div key={section.id} id={section.id} className="py-8">
          <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
          <p className="text-lg text-gray-700">{section.description}</p>
        </div>
      ))}

      {/* Get in Touch Section */}
      <div className="mt-12 bg-gray-100 py-10 px-6 rounded shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch with Us</h2>
        <form className="max-w-lg mx-auto space-y-6">
          {/* Name Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
