import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AllPosts = ({ posts }) => {
  return (
    <div className="w-[90%] mx-auto my-8">
      <h2 className="text-3xl font-semibold text-[#3AA619] mb-6">All Posts</h2>
      <section className="grid sm:grid-cols-2 grid-cols-3 gap-8">
        {posts.map((item, idx) => {
          const { img, title, snapshot, author, createdDate } = item;
          return (
            <Link
              to={`/blog/${title}`}
              key={idx}
              className="mb-8 transition-transform duration-200 hover:scale-105"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-[40vh] object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 text-[#3AA619]">
                    <span className="text-sm font-semibold">{author}</span>
                    <div className="w-[5px] h-[5px] bg-[#3AA619] rounded-full"></div>
                    <span className="text-sm font-semibold">{createdDate}</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <h2 className="text-2xl font-semibold text-[#1A1A1A]">{title}</h2>
                    <MdArrowOutward className="text-[#1A1A1A]" size={24} />
                  </div>
                  <p className="text-base font-normal text-[#667085] mt-3">{snapshot}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default AllPosts;
