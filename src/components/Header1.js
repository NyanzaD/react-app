import React from "react";
import { FaFacebook } from "react-icons/fa";

function Header1() {
  return (
    <div className="bg-gray-800 text-white flex flex-col sm:flex-row justify-between items-center px-4 py-2 space-y-2 sm:space-y-0">
      {/* Contact Info */}
      <p className="text-sm text-center sm:text-left">
        📞 Call Us: +254 700 000 000
      </p>

      {/* Social Icon */}
      <a
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500"
      >
        <FaFacebook size={20} />
      </a>
    </div>
  );
}

export default Header1;
