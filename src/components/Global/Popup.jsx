import React from 'react';
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function Popup({ showPopup, setShowPopup }) {
  return (
    <>
      {showPopup && (
        <div className="fixed z-50 inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 sm:p-5 w-full max-w-md sm:max-w-[90%] rounded-lg shadow-lg relative overflow-auto max-h-[80vh]">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-200"
            >
              <HiOutlineXMark size={20} />
            </button>
            <h2 className="text-xl font-semibold text-[#262626] text-center">
              Want to become a global talent and stay industry-relevant?
              Join our community and be part of the thousands who have benefited from our training.
              Start your journey today and see the difference!
            </h2>
            <p className='text-center mt-5 mb-5'>Enter your email address to get access</p>
            <div>
              <input
                type="email"
                className='block w-full pl-3 py-3 rounded-lg border border-[#F1F1F3]'
                name="email"
                placeholder='Enter email address'
                id="email"
              />
              <input
                type="number"
                className='block w-full mt-3 pl-3 py-3 rounded-lg border border-[#F1F1F3]'
                placeholder='Enter Phone Number'
                name="num"
                id="num"
              />
            </div>
            <Link target='blank' to="https://chat.whatsapp.com/Glef2h4zDdH89ToZqYOeRZ">
              <button className='h-[55px] mt-10 w-full rounded-lg text-white bg-[#3AA619] hover:bg-[#339f16] transition duration-200'>
                Join Community
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
