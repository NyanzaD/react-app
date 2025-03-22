import React from "react";

function HighlightOnHover({ children, extraClasses = "" }) {
  return (
    <div
      className={`relative hover:z-10 hover:scale-105 hover:shadow-lg transition-transform duration-300 ${extraClasses}`}
    >
      {children}
    </div>
  );
}

export default HighlightOnHover;
