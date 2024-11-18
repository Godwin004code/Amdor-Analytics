import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import YTComponent from '../Home/YTComponent';


const CourseDetailsHero = ({ course }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const openPopup = (videoId) => {
    console.log(selectedVideoId, showPopup);
    
    setSelectedVideoId(videoId);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedVideoId(null);
  };
  return (
    <div className=' w-[90%] mx-auto'>
      <div className='flex sm:flex-col justify-between w-full mt-10 sm:mt-0'>
        <div className='my-auto w-[50%]'>
          <h2 className='text-[#262626] font-semibold sm:text-3xl text-5xl'>{course.title}</h2>
          <div className='w-[70%] mt-5 sm:w-full'>
            <h2>Course Description</h2>
            <p className='font-light text-[#09090b] text-base sm:text-base sm:mt-3'>{course.description}</p>
          </div>
        </div>
        <div className='relative sm:mt-10 cursor-pointer w-[45%]' onClick={() => openPopup(course.videoID)}>
          <img src={course.banner} alt={course.title} className='w-[100%]' />
          <div className="bg-black bg-opacity-50 px-3 py-1 absolute top-0 bottom-0 left-0 right-0 rounded-b-lg text-center w-full flex items-center justify-center flex-col text-lg font-medium" onClick={() => openPopup(course.videoId)}>

            <div className="mt-4">
              <FaPlay color="white" />
            </div>
          </div>
        </div>

      </div>
      {showPopup && selectedVideoId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 sm:p-3 rounded-lg max-w-2xl w-full sm:w-[95%] min-h-[40vh] overflow-y-auto relative flex items-center">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={closePopup}
            >
              <HiOutlineX />
            </button>
            <YTComponent videoId={selectedVideoId} />
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseDetailsHero