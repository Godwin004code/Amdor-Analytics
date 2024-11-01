import React from 'react'
import { useParams } from 'react-router-dom';
import courses from './courses';
import Nav from '../Global/Nav';
import Footer from '../Global/Footer';
import CourseCurriculum from './CourseCurriculum';
import CourseDetailsHero from './CourseDetailsHero';
import { Link } from 'react-router-dom';
import CourseInstructor from './CourseInstructor';
import CourseBenefits from './CourseBenefits';
import CourseReview from './CourseReview';
import CourseRating from './CourseRating';

const CourseDetails = () => {
    const { title } = useParams();
    const course = courses.find(post => post.title === (title));
    
  return (
    <section className='bg-[#F7F7F8] w-full'>
      <section className='h-[500px] top-0 rounded-[999px] rounded-tl-none rounded-bl-none left-[-600px] sm:h-[80vh] sm:left-[00px]  w-[40%] sm:w-full bg-[#AAF0AA33]'>
   <section className='w-full absolute'>
   <section className='w-full z-40 bg-[#01D300]'>
    <section className=' py-2 flex justify-between w-[90%] mx-auto'>
      <h2 className='sm:hidden'></h2>
<h2 className='text-center text-white text-base'>Join Our Next Free Masterclass</h2>
<Link to="/signup">
<h2 className='text-[#fff] font-light '>Sign Up</h2></Link>
    </section>
    </section>
<Nav />
<CourseDetailsHero course={course} />
   
   </section>
    </section>

<CourseCurriculum course={course} />
<CourseInstructor course={course} />
<CourseBenefits course={course} />
<CourseRating />
<CourseReview course={course} />

<Footer />
    </section>
  )
}

export default CourseDetails