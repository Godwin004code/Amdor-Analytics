import React from 'react'
import Nav from '../Global/Nav'
import ContactHero from './ContactHero'
import ContactArea from './ContactArea'
import Footer from '../Global/Footer'
import FAQ from '../Home/FAQ'

const Contact = () => {
  return (
    <section className='bg-[#F7F7F8]'>
    <section className='h-[100vh] top-0 rounded-[999px] rounded-tl-none rounded-bl-none left-[-600px] sm:h-[80vh] sm:left-[00px]  w-[40%] sm:w-full bg-[#AAF0AA33]'>
   <section className='w-full absolute'>
   <section className='w-full hidden z-40 bg-[#01D300]'>
    <section className=' py-2 flex justify-between w-[90%] mx-auto'>
      <h2 className='sm:hidden'></h2>
<h2 className='text-center text-white text-base'>Join Our Next Free Masterclass</h2>
<h2 className='text-[#fff] font-light '>Sign Up</h2>
    </section>
    </section>
    <Nav />
   <ContactHero />
   
   </section>
    </section>
    <ContactArea />
    <FAQ />
    <Footer />
    </section>
  )
}

export default Contact