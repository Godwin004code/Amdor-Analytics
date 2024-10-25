import { useState } from "react";
import logo from "../../assets/amdor-new-logo.png";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linkItems = ["link1", "link2", "link3"];
  const courseItems = ["course1", "course2", "course3"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full">
      <div className="w-[90%] flex items-center mx-auto border-[#F1F1F3]">
        <Link to="/">
          <img
            className="w-[125px] h-[100px] object-cover"
            src={logo}
            alt="Logo"
          />
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="hidden md:block ml-auto z-20"
        >
          <HiBars3BottomRight size={30} className="text-black" />
        </button>

        <nav className="flex w-full justify-between items-center md:hidden ml-8">
          <ul className=" flex space-x-8 items-center">
            {/* Learn Menu */}
            <li className="relative group">
              <Link className="text-base font-medium text-black hover:text-[#3AA619]">
                Learn
              </Link>
              <div className="absolute hidden group-hover:flex flex-col w-full p-1 shadow-lg">
                {linkItems.map((item, index) => (
                  <Link
                    key={index}
                    className="block py-1 font-semibold text-gray-500 hover:text-black"
                    to="/learn"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </li>

            <li className="relative group">
              <Link className="text-base font-medium text-black hover:text-[#3AA619]">
                Courses
              </Link>
              <div className="absolute hidden group-hover:flex flex-col w-full p-1 shadow-lg">
                {courseItems.map((item, index) => (
                  <Link
                    key={index}
                    className="block py-1 font-semibold text-gray-500 hover:text-black"
                    to="/courses"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                to="/about"
                className="text-base font-medium hover:text-[#3AA619]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-base font-medium hover:text-[#3AA619]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-base font-medium hover:text-[#3AA619]"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex space-x-5 items-center ml-auto">
            <Link className="text-lg text-[#262626] font-medium " to="/signup">
              Sign up
            </Link>
            <button className="h-[55px] w-[117px] rounded-lg text-white bg-[#3AA619]">
              Login
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Container */}
      <div
        className={`${
          isMobileMenuOpen
            ? "left-[0%] pointer-events-auto"
            : "left-[100%] pointer-events-none"
        } fixed bg-white h-full w-full z-[100] overflow-auto left-0 top-0 text-black duration-500 ease-in-out`}
      >
        {/* Container for logo and close button */}
        <div className="w-[90%] mx-auto mb-[40px] flex justify-between">
          <Link to="/">
            <img src={logo} className="w-[150px] ml-0" alt="logo" />
          </Link>
          <button onClick={toggleMobileMenu}>
            <HiOutlineX size={30} />
          </button>
        </div>

        <ul className="flex my-auto gap-16 w-[90%] mx-auto flex-col text-3xl sm:text-xl sm:gap-8">
          <li>
            <Link to="/" className="font-medium hover:text-[#3AA619]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-medium hover:text-[#3AA619]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/courses" className="font-medium hover:text-[#3AA619]">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/blog" className="font-medium hover:text-[#3AA619]">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-medium hover:text-[#3AA619]">
              Contact Us
            </Link>
          </li>

          <Link to="/signup">
            <button className="bg-[#3AA619] text-white w-full mt-[80px] rounded-md py-4 px-10">
              Get Started
            </button>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
