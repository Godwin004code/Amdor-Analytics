import React, {useState, useEffect} from 'react'
import Nav from '../Global/Nav'
import Hero from './Hero'
import StudentWork from './StudentWork'
import Benefit from './Benefit'
import ExploreCourses from './ExploreCourses'
import Testimonial from './Testimonial'
import Pricing from './Pricing'
import FAQ from './FAQ'
import Footer from '../Global/Footer'
import Stats from './Stats'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from "../../assets/Group 28.png"
import Popup from '../Global/Popup'
import { Link } from 'react-router-dom'
import ImageCarousel from './ImageCarousel';
import Countr from './Countr'


const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
  
    <section className='bg-[#F7F7F8]'>
<Popup showPopup={showPopup} setShowPopup={setShowPopup} />
   
    <section className='h-[100vh] top-0 rounded-[999px] rounded-tl-none rounded-bl-none left-[-600px] sm:h-[80vh] sm:left-[00px]  w-[40%] sm:w-full bg-[#AAF0AA33]'>
   <section className='w-full absolute'>
   <section className='w-full z-40 bg-[#3AA619]'>
    <section className=' py-2 flex justify-between w-[90%] mx-auto'>
      <h2 className='sm:hidden'></h2>
<h2 className='text-center text-white text-base'>Join Our Next Free Masterclass</h2>

<h2 className='text-[#fff] font-light cursor-pointer' onClick={() => setShowPopup(true)}>Get Started</h2>

    </section>
    </section>
    <Nav />
    <Hero />
   </section>
    </section>
    <Countr />
  
    <Benefit />
    <ExploreCourses />
    <ImageCarousel />
    <Testimonial />
    <Pricing />
    <Stats />
 
    <FAQ />
    <Footer />
    <FloatingWhatsApp accountName='Amdor Analytics' phoneNumber='+2348114087403' statusMessage='Typically replies within 1 hour' placeholder='Send us a message..' avatar={avatar}  />
    </section>
  )
}

export default Home