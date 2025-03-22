
import { FaChevronDown } from "react-icons/fa"; // Dropdown icon
import React, { useState, useRef, useEffect } from "react";

function Header2() {
  const [dropdown, setDropdown] = useState(null); // Tracks the open dropdown
  const [mobileMenu, setMobileMenu] = useState(false); // Tracks mobile menu visibility
  const aboutRef = useRef(null); // Ref for About Us dropdown
  const programsRef = useRef(null); // Ref for Programs dropdown
  const involvedRef = useRef(null); // Ref for Get Involved dropdown

  // Function for hover events (large screens)
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target) &&
        programsRef.current &&
        !programsRef.current.contains(event.target) &&
        involvedRef.current &&
        !involvedRef.current.contains(event.target)
      ) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-blue-600 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-bold">Mukumu Children's Home</h1>

        {/* Mobile Hamburger Button */}
        <button
          className="sm:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <FaChevronDown size={24} />
        </button>

        {/* Navigation for Large Screens */}
        <nav className="hidden sm:flex gap-6">
          {/* Home */}
          <a href="/" className="hover:underline">
            Home
          </a>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseLeave={(event) => {
              if (aboutRef.current && !aboutRef.current.contains(event.relatedTarget)) {
                setDropdown(null);
              }
            }}
          >
            <button className="flex items-center hover:underline"
            onMouseEnter={() => setDropdown("about")}
            >
              About Us <FaChevronDown className="ml-2" />
            </button>
            {dropdown === "about" && (
              <div ref={aboutRef}
              className="absolute right-0 bg-white text-black rounded shadow-lg mt-2 z-50 p-4 w-[300px]">
                <a href="/about#what-we-do" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">What We Do</h4>
                  <p className="text-sm text-gray-600">Learn about our programs.</p>
                </a>
                <a href="/about#our-causes" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">Our Causes</h4>
                  <p className="text-sm text-gray-600">Discover what drives us.</p>
                </a>
                <a href="/about#who-we-are" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">Who We Are</h4>
                  <p className="text-sm text-gray-600">Meet the team behind our work.</p>
                </a>
              </div>
            )}
          </div>

          {/* Programs Dropdown */}
          <div
            className="relative"
              onMouseLeave={(event) => {
              if (programsRef.current && !programsRef.current.contains(event.relatedTarget)) {
                setDropdown(null);
              }
            }}
          >
            <button className="flex items-center hover:underline"
              onMouseEnter={() => setDropdown("programs")}>
              Programs <FaChevronDown className="ml-2" />
            </button>
            {dropdown === "programs" && (
              <div ref={programsRef}
              className="absolute right-0 bg-white text-black rounded shadow-lg mt-2 z-50 p-4 w-[300px]">
                <a href="/programs#education" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-sm text-gray-600">Empowering children through education.</p>
                </a>
                <a href="/programs#feeding" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">Feeding</h4>
                  <p className="text-sm text-gray-600">Providing nutritious meals.</p>
                </a>
                <a href="/programs#hiv-counseling" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">HIV Counseling</h4>
                  <p className="text-sm text-gray-600">Supporting children with sensitive care.</p>
                </a>
                <a href="/programs#mentorship" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">Mentorship</h4>
                  <p className="text-sm text-gray-600">Guiding children toward a brighter future</p>
                </a>
              </div>
            )}
          </div>

          {/* Get Involved Dropdown */}
          <div
            className="relative"
            onMouseLeave={(event) => {
              if (involvedRef.current && !involvedRef.current.contains(event.relatedTarget)) {
                setDropdown(null);
              }
            }}
          >
            <button className="flex items-center hover:underline"
              onMouseEnter={() => setDropdown("getinvolved")}>
              Get Involved <FaChevronDown className="ml-2" />
            </button>
            {dropdown === "getinvolved" && (
              <div ref={involvedRef}
              className="absolute right-0 bg-white text-black rounded shadow-lg mt-2 z-50 p-4 w-[300px]">
                <a href="/getinvolved#volunteer" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">Volunteer</h4>
                  <p className="text-sm text-gray-600">Make a meaningful impact.</p>
                </a>
                <a href="/getinvolved#sponsor-child" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">Sponsor a Child</h4>
                  <p className="text-sm text-gray-600">Transform a child's future.</p>
                </a>
                <a href="/getinvolved#sponsor-project" className="block px-4 py-2 hover:bg-gray-200">
                  <h4 className="font-semibold text-lg">Sponsor a Project</h4>
                  <p className="text-sm text-gray-600">Fund initiatives that change lives and comminities</p>
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="sm:hidden mt-2 bg-white text-black rounded shadow-lg p-4">
          {/* Home */}
          <a href="/" className="block px-4 py-2 hover:bg-gray-200 rounded">Home</a>

          {/* About Us */}
          <button
            onClick={() => setDropdown(dropdown === "about" ? null : "about")}
            className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-200 rounded"
          >
            About Us
            <FaChevronDown className={`ml-2 transform ${dropdown === "about" ? "rotate-180" : ""}`} />
          </button>
          {dropdown === "about" && (
            <div className="pl-4">
              <a href="/about#what-we-do" className="block px-4 py-2 hover:bg-gray-200 rounded">What We Do</a>
              <a href="/about#our-causes" className="block px-4 py-2 hover:bg-gray-200 rounded">Our Causes</a>
            </div>
          )}

          {/* Programs */}
          <button
            onClick={() => setDropdown(dropdown === "programs" ? null : "programs")}
            className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-200 rounded"
          >
            Programs
            <FaChevronDown className={`ml-2 transform ${dropdown === "programs" ? "rotate-180" : ""}`} />
          </button>
          {dropdown === "programs" && (
            <div className="pl-4">
              <a href="/programs#education" className="block px-4 py-2 hover:bg-gray-200 rounded">Education</a>
              <a href="/programs#feeding" className="block px-4 py-2 hover:bg-gray-200 rounded">Feeding</a>
            </div>
          )}

    {/* GetInvolved */}
          <button
            onClick={() => setDropdown(dropdown === "getinvolved" ? null : "getinvolved")}
            className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-200 rounded"
          >
            GetInvolved
            <FaChevronDown className={`ml-2 transform ${dropdown === "getinvolved" ? "rotate-180" : ""}`} />
          </button>
          {dropdown === "getinvolved" && (
            <div className="pl-4">
              <a href="/getinvolved#volunteer" className="block px-4 py-2 hover:bg-gray-200 rounded">Volunteer</a>
              <a href="/getinvolved#sponsor-child" className="block px-4 py-2 hover:bg-gray-200 rounded">Sponsor a Child</a>
              <a href="/getinvolved#sponsor-project" className="block px-4 py-2 hover:bg-gray-200 rounded">Sponsor a Program</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header2;
