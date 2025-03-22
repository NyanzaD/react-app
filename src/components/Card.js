import React from "react";

function Card({ image, title, description, extraClasses = "" }) {
  return (
    <div className={`bg-white p-4 shadow rounded transition-transform duration-300 ${extraClasses}`}>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover rounded mb-4"
        />
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
