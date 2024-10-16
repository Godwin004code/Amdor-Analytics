import React, {useState} from 'react'
import logo from "../../assets/amdor-new-logo.png"
import { Link } from 'react-router-dom'
import { HiOutlineXMark } from "react-icons/hi2";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
    const [mobileShown, setMobileShown] = useState(false);
    function toggleNav() {
        setMobileShown(!mobileShown);
      }

      // 

      const path = window.location.pathname;
  return (
    <header className='w-full'>
        <div className='w-[90%]  flex justify-between mx-auto' style={{borderBottom: '1px solid #F1F1F3'}}>
        <section className='flex'>
           <Link to="/"> <img className='w-[125px] h-[100px] object-cover' src={logo} alt="Amdor Analytics" /></Link>
            <nav className='my-auto ml-4 sm:hidden'>
                <ul className='flex'>
                    <li className={path === '/learn' ? 'h-[55px] flex bg-[#F1F1F3] justify-center items-center  px-6 rounded-lg' : 'h-[55px] flex justify-center items-center  px-6 rounded-lg'}>
                        <Link  to="/learn">Learn</Link>
                    </li>
                    <li className={path === '/courses' ? 'h-[55px] flex bg-[#F1F1F3] justify-center items-center  px-6 rounded-lg' : 'h-[55px] flex justify-center items-center  px-6 rounded-lg'}>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li className={path === '/about' ? 'h-[55px] flex bg-[#F1F1F3] justify-center items-center  px-6 rounded-lg' : 'h-[55px] flex justify-center items-center  px-6 rounded-lg'}>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className={path === '/blog' ? 'h-[55px] flex bg-[#F1F1F3] justify-center items-center  px-6 rounded-lg' : 'h-[55px] flex justify-center items-center  px-6 rounded-lg'}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={path === '/contact' ? 'h-[55px] flex bg-[#F1F1F3] justify-center items-center  px-6 rounded-lg' : 'h-[55px] flex justify-center items-center  px-6 rounded-lg'}>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>
        </section>
        <section className='flex gap-5 my-auto sm:hidden'>
            <h2 className='my-auto'>
                <Link className='text-[#262626] font-normal text-lg' to="/signup">Sign up</Link>
            </h2>
            <button className='h-[55px] w-[117px] rounded-lg text-white bg-[#3AA619]'>Login</button>
        </section>
 
        <button className="hidden float-right lg:block my-auto  sm:w-fit" onClick={toggleNav}>
         <HiBars3BottomRight size={30} />
        </button>
   
        </div>
         {/* container for mobile navigation */}
         <div
          className={`${
            mobileShown
              ? "left-[0%] pointer-events-auto"
              : "left-[100%] pointer-events-none"
          } fixed bg-white h-full w-full z-[100] overflow-auto left-0 top-0 text-black duration-500 ease-in-out`}
        >
          {/* Container for logo and cross button */}
          <div className="w-[90%] mx-auto   mb-[40px] flex justify-between">
            <Link to="/">
              {" "}
              <img src={logo} className="w-[150px] ml-0" alt="logo" />
            </Link>
            <button onClick={toggleNav}>
         <HiOutlineXMark size={30} />
            </button>
          </div>

          <ul className="flex my-auto gap-16 w-[90%] mx-auto flex-col text-3xl sm:text-xl sm:gap-8">
            <li>
              <Link to="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium">
               About us
              </Link>
            </li>
           
            <li>
              <Link to="/courses" className="font-medium">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/blog" className="font-medium">
            Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-medium">
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
  )
}

export default Nav