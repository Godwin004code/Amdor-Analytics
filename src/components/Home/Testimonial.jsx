import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdStarRate } from "react-icons/md";
import { HiOutlineX } from "react-icons/hi";
import YTComponent from './YTComponent';
import { testimony } from './TestimonialsData';

const Testimonial = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openPopup = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedTestimonial(null);
  };

  return (
    <div className="testimonials-section p-6 bg-gray-100 overflow-hidden relative">
      <h2 className="text-2xl text-center mb-4">What Our Clients Say</h2>

      <div className="carousel-container flex flex-col space-y-4">
        {[0, 1].map((_, index) => (
          <motion.div
            key={index}
            className="flex w-max space-x-4"
            animate={{ translateX: '-75%' }}
            transition={{
              duration: 30, 
              ease: 'linear',
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 2, 
            }}
          >
            {[...testimony, ...testimony].map((testimonial, idx) => (
              <div key={idx} className="flex-shrink-0 flex space-x-4 w-[35vw] xl:w-[55vw] lg:w-[50vw] md:w-[70vw] sm:w-[90vw]">
                {/* Image Card */}
                <div
                  className={`carousel-item relative p-3 h-[200px] bg-cover bg-center text-white rounded-lg w-[50%]`}
                  
                >
                  <img  className='h-full w-full object-cover' src={testimonial.avatar} alt="" />
                  <div className="flex flex-col absolute top-0 left-0 right-0 items-center justify-between h-full bg-black bg-opacity-30 p-3 rounded-md">
                    <div className="mt-auto ">
                      <div className="text-lg font-semibold text-center">{testimonial.name}</div>
                      <div className="text-yellow-500 flex items-center">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <MdStarRate key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Card */}
                <div
                  className="carousel-item bg-white rounded-lg shadow-md p-3 flex items-center h-[200px] cursor-pointer overflow-hidden w-[50%]"
                  onClick={() => openPopup(testimonial)}
                >
                  <div className="flex flex-col w-full h-full">
                    <p className="text-gray-800 mb-2 break-words text-sm">{testimonial.shortDescription}</p>
                    <div className="mt-auto flex items-center gap-5 w-full">
                      <div>
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                      </div>
                      <div className="flex flex-col">
                        <div className="text-lg font-semibold text-center sm:text-sm">{testimonial.name}</div>
                        <button
                          className="text-[#3AA619]"
                          onClick={() => openPopup(testimonial)}
                        >
                          See More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {showPopup && selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto relative">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={closePopup}
            >
              <HiOutlineX />
            </button>
            <h3 className="text-xl font-semibold mb-4">{selectedTestimonial.name}</h3>
            <p className="mb-4">{selectedTestimonial.fullDescription}</p>
            <div className="flex items-center mb-4">
              <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} className="w-16 h-16 rounded-full mr-4" />
              <div className="text-yellow-500 flex items-center">
                {Array.from({ length: selectedTestimonial.rating }, (_, i) => (
                  <MdStarRate key={i} />
                ))}
              </div>
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
