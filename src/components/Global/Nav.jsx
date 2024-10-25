import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/amdor-new-logo.png";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const linkItems = [
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const learnItems = ["link1", "link2", "link3"];
  const courseItems = ["course1", "course2", "course3"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLearn = () => setIsLearnOpen(!isLearnOpen);
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.75, ease: "easeIn" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 1.00 },
    }),
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
          <motion.ul className="flex space-x-8 items-center">
            {/* Learn Dropdown */}
            <motion.li
              className="relative group"
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Link className="text-base font-medium text-black hover:text-[#3AA619]">
                Learn
              </Link>
              <div className="absolute hidden group-hover:flex flex-col w-full p-1 shadow-lg bg-white">
                {learnItems.map((item, index) => (
                  <Link
                    key={index}
                    className="block py-1 font-semibold text-gray-500 hover:text-black"
                    to="/learn"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.li>

            {/* Courses Dropdown */}
            <motion.li
              className="relative group"
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Link className="text-base font-medium text-black hover:text-[#3AA619]">
                Courses
              </Link>
              <div className="absolute hidden group-hover:flex flex-col w-full p-1 shadow-lg bg-white">
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
            </motion.li>

            {/* Regular Links */}
            {linkItems.map((item, index) => (
              <motion.li
                key={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                className="relative group"
              >
                <Link to={item.path} className="text-base font-medium text-black hover:text-[#3AA619]">
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex space-x-5 items-center ml-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
              <Link className="text-lg text-[#262626] font-medium" to="/signup">
                Sign up
              </Link>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#2e8c17" }}
              whileTap={{ scale: 0.95 }} 
              className="h-[55px] w-[117px] rounded-lg text-white bg-[#3AA619]"
            >
              Login
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Container */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed bg-white h-full w-full z-[100] overflow-auto top-0 text-black"
      >
        {/* Logo and close button */}
        <div className="w-[90%] mx-auto mb-[40px] flex justify-between">
          <Link to="/">
            <img src={logo} className="w-[150px] ml-0" alt="logo" />
          </Link>
          <button onClick={toggleMobileMenu}>
            <HiOutlineX size={30} />
          </button>
        </div>

        <motion.ul className="flex my-auto gap-8 w-[90%] mx-auto flex-col text-xl sm:text-xl">
          {/* Mobile Menu Links */}
          <motion.li
            className="font-medium hover:text-[#3AA619] cursor-pointer"
            onClick={toggleLearn}
          >
            Learn
            {isLearnOpen && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-4 flex flex-col space-y-2 text-lg text-gray-600"
              >
                {learnItems.map((item, index) => (
                  <Link key={index} to="/learn">
                    {item}
                  </Link>
                ))}
              </motion.ul>
            )}
          </motion.li>

          <motion.li
            className="font-medium hover:text-[#3AA619] cursor-pointer"
            onClick={toggleCourses}
          >
            Courses
            {isCoursesOpen && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-4 flex flex-col space-y-2 text-lg text-gray-600"
              >
                {courseItems.map((item, index) => (
                  <Link key={index} to="/courses">
                    {item}
                  </Link>
                ))}
              </motion.ul>
            )}
          </motion.li>

          {linkItems.map((item, index) => (
            <motion.li
              key={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Link to={item.path} className="font-medium hover:text-[#3AA619]">
                {item.name}
              </Link>
            </motion.li>
          ))}

          <Link to="/signup">
            <motion.button
              className="bg-[#3AA619] text-white w-full rounded-md py-4 px-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.ul>
      </motion.div>
    </header>
  );
};

export default Nav;
