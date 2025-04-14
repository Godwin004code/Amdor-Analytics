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
      <section className='h-[100vh] top-0 rounded-[999px] rounded-tl-none rounded-bl-none left-[-600px] sm:h-[80vh] sm:left-[00px]  w-[40%] sm:w-full bg-[#AAF0AA33]'>
        <section className='w-full absolute'>
          <section className='w-full z-40 bg-[#3AA619]'>
            <section className='py-2 flex justify-between w-[90%] mx-auto'>
              <h2 className='sm:hidden'></h2>
              <h2 className='text-center text-white text-base'>Join Our Next Free Masterclass</h2>
              <Link to="/signup">
                <h2 className='text-[#fff] font-light'>Sign Up</h2>
              </Link>
            </section>
          </section>
          <Nav />
          <CourseDetailsHero course={course} />


      
      {/* Payment Button after Course Review */}
      {course.selarLink && (
        <div className='mt-10 text-center'>
          <a
            href={course.selarLink}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-[#3AA619] text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-[#2d8a0e] transition-colors duration-200'
          >
            Get Started
          </a>
        </div>
      )}
          
        </section>
      <CourseCurriculum course={course} />
      <CourseInstructor course={course} />
      <CourseBenefits course={course} />
      <CourseRating />
      <CourseReview course={course} />
      
      {/* Payment Button after Course Review */}
      {course.selarLink && (
        <div className='mt-10 text-center'>
          <a
            href={course.selarLink}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-[#3AA619] text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-[#2d8a0e] transition-colors duration-200'
          >
            Get Started
          </a>
        </div>
      )}
      </section>


      
      

      <Footer />
    </section>
  );
};

export default CourseDetails;
