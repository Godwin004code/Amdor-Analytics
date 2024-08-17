import React from 'react'
import Nav from '../Global/Nav'
import LearnHero from './LearnHero'
import LearnWhy from './LearnWhy'
import LearnInstructorLead from './LearnInstructorLead'
import LearnSelfPaced from './LearnSelfPaced'
import Testimonial from '../Home/Testimonial'
import Footer from '../Global/Footer'


const Learn = () => {
  return (
    <section className=''>
   
    <section className='h-[100vh] top-0 rounded-[999px] rounded-tl-none rounded-bl-none left-[-00px] sm:h-[80vh] sm:left-[00px]  w-[40%] sm:w-full bg-[#AAF0AA33]'>
   <section className='w-full absolute'>
  
   <Nav />
   <LearnHero />
   </section>
    </section>
   <section className='bg-[#F9FAFB] py-16'>
   <LearnWhy />
   <LearnInstructorLead />
   <LearnSelfPaced />
   </section>
  <Testimonial />
  <Footer />
    </section>
  )
}

export default Learn