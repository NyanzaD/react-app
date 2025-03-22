import SectionLayout from "../components/SectionLayout";
import React, { useState } from "react";

function GetInvolved() {
      const [showForm, setShowForm] = useState(false); // State to toggle the form

      const toggleForm = () => {
        setShowForm((prev) => !prev); // Toggle the dropdown form
      };
      const getInvolvedData = [
    {
      id: "volunteer",
      title: "Volunteer",
      description:
        "Spend your time supporting children in need. We offer various volunteer opportunities that make a meaningful impact.",
      image:require("../assets/images/hero-image.jpg"), // Replace with the actual image path
      reverse: false,
    },
    {
      id: "sponsor-a-child",
      title: "Sponsor a Child",
      description:
        "Make a difference in a child’s life by providing them with the resources they need to thrive.",
      image: require("../assets/images/hero-image.jpg"), // Replace with the actual image path
      reverse: true,
    },
    {
      id: "sponsor-a-project",
      title: "Sponsor a Project",
      description:
        "Fund initiatives that bring real change to communities and children’s lives.",
      image:require("../assets/images/hero-image.jpg"), // Replace with the actual image path
      reverse: false,
    },
  ];

  return (
    <div className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Get Involved</h2>
      <SectionLayout data={getInvolvedData} />
        {/* Donate Section */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            onClick={toggleForm}
          >
            Donate
          </button>
          {showForm && (
            <div className="mt-4 bg-gray-100 p-6 rounded shadow-lg mx-auto w-full max-w-lg">
              <h4 className="text-lg font-semibold mb-4">Donate</h4>
              <form className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded px-4 py-2"
                    placeholder="Your Name"
                  />
                </div>
                {/* Email Input */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-gray-300 rounded px-4 py-2"
                    placeholder="Your Email"
                  />
                </div>
                {/* Amount Input */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="w-full border-gray-300 rounded px-4 py-2"
                    placeholder="Donation Amount"
                  />
                </div>
                {/* Payment Button */}
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          )}
        </div>
    </div>


  );
}

export default GetInvolved;
