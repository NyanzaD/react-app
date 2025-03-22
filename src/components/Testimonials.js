import React from "react";

function Testimonials() {
  const testimonials = [
    { name: "Jane Doe",
    text: "This children's home changed my life and my family's." },
    { name: "John Smith", text: "The support and care are amazing—truly inspiring work." },
    { name: "Alice Brown", text: "I'm honored to be part of such a wonderful community." },
  ];

  return (
    <div className="py-10 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
      <div className="max-w-[1200px] mx-auto flex justify-center gap-6 overflow-x-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 shadow rounded max-w-[300px] flex-shrink-0">
            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
            <p className="font-semibold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
