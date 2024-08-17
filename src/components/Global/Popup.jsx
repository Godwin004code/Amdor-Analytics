import React, { useState, useEffect } from 'react';
import { HiOutlineXMark } from "react-icons/hi2";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed z-50 w-full inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white relative p-20  w-[40%] sm:w-[90%] sm:p-5 rounded-lg shadow-lg">
          <button 
              onClick={() => setShowPopup(false)} 
              className="mt-4 absolute top-0 w-full flex justify-end mb-0 mr-4 right-0  rounded"
            >
            <HiOutlineXMark size={20} />
            </button>
            <h2 className="text-xl sm:mt-6 text-center font-semibold text-[#262626]">
            Prepare for a Career In Tech: Get FREE Lifetime Access to Case Studies & Video Tutorials in Data Analytics, Data Science, Data Engineering and More When You Join Our Thriving Community
            </h2>
            <p  className='text-center mt-5 mb-5'>Enter your email address to get access</p>
            <div>
                <input type="email" className='block w-full pl-3 py-3 rounded-lg' name="email" placeholder='Enter email address' id="email"  style={{border: '1px solid #F1F1F3'}}  />
                <input type="number" className='block w-full mt-3 pl-3 py-3 rounded-lg' placeholder='Enter Phone Number' name="num" id="num" style={{border: '1px solid #F1F1F3'}} />
            </div>
            <button className='h-[55px] sm:mb-5 mt-10 w-full rounded-lg text-white bg-[#01D300]'>Join Community</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
