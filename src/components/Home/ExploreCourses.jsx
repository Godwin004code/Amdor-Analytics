import React, { useState } from 'react';
import { MdStarRate } from 'react-icons/md';
import courses from '../courses/courses';
import { Link } from 'react-router-dom';

const ExploreCourses = () => {
  const [showDes, setShowDes] = useState(null);
  const path = window.location.pathname;

  return (
    <div
      className="w-[90%] mx-auto mt-28"
      style={{ marginTop: path === '/learn' ? '20px' : '100px' }}
    >
      <div
        className="flex sm:gap-3 justify-between mt-6"
        style={{ display: path === '/learn' ? 'none' : 'flex' }}
      >
        <h2
          className="text-[#3AA619] my-auto font-semibold text-3xl"
          style={{ display: path === '/learn' ? 'none' : 'block' }}
        >
          EXPLORE OUR COURSES
        </h2>
        {path !== '/courses' && (
          <Link to="/courses">
            <button className="h-[60px] bg-[#fff] px-5 rounded-lg text-[#262626]">
              View All
            </button>
          </Link>
        )}
      </div>

      <div className="grid gap-6 mt-10 grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-white">
        {(path === '/courses' ? courses : courses.slice(0, 3)).map(
          (item, idx) => {
            const { title, description, price, level, duration, banner, rating } = item;
            return (
              <div
                className="relative transition-all duration-200 ease-in-out w-full sm:w-auto rounded-xl p-8 flex-grow"
                key={idx}
                onMouseEnter={() => setShowDes(idx)}
                onMouseLeave={() => setShowDes(null)}
              >
                {showDes === idx && (
                  <div
                    className={`bg-white absolute inset-0 z-10 p-5 rounded-lg flex flex-col justify-between overflow-auto
                    ${showDes === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    style={{ maxHeight: '100%', scrollbarWidth: 'thin' }}
                  >
                    <h2 className="text-sm">{description}</h2>
                    <Link to={`/courses/${title}`}>
                    <div className="w-full mt-5 h-[50px] rounded-lg bg-[#3AA619] flex justify-center items-center text-[#fff] font-medium">
                      Get it Now
                    </div>
                    </Link>
                  </div>
                )}
                <img
                  src={banner}
                  className="w-full h-[300px] object-cover rounded-lg"
                  alt={title}
                />
                <div className="flex mt-7 justify-between">
                  <div className="flex gap-5">
                    <div className="w-fit p-2 rounded-lg text-sm border border-gray-200">
                      {duration}
                    </div>
                  </div>
                  <div className="my-auto flex gap-3">
                    <h2 className="text-[#3AA619]">{price}</h2>
                    <h2 className="text-[#262626] line-through">{level}</h2>
                  </div>
                </div>
                <div className="flex ml-auto w-fit">
                  {Array(rating)
                    .fill(0)
                    .map((_, idx) => (
                      <MdStarRate key={idx} color="#3AA619" />
                    ))}
                </div>
                <h2 className="text-[#333333] font-semibold text-2xl mt-2">
                  {title}
                </h2>
                <Link to={`/courses/${title}`}>
                  <div className="w-full mt-5 h-[50px] rounded-lg bg-[#F7F7F8] flex justify-center items-center text-[#262626] font-medium">
                    Get it Now
                  </div>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ExploreCourses;
