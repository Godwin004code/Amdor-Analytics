import React from 'react';

// Rating component
const Rating = ({ rating, percentage }) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Stars */}
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-[#3AA619]' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.164 3.583a1 1 0 00.95.69h3.764c.969 0 1.372 1.24.588 1.81l-3.046 2.21a1 1 0 00-.364 1.118l1.164 3.583c.3.921-.755 1.688-1.54 1.118l-3.046-2.21a1 1 0 00-1.175 0l-3.046 2.21c-.785.57-1.84-.197-1.54-1.118l1.164-3.583a1 1 0 00-.364-1.118L2.548 9.01c-.784-.57-.38-1.81.588-1.81h3.764a1 1 0 00.95-.69l1.164-3.583z" />
          </svg>
        ))}
      </div>
      {/* Rating bar */}
      <div className="w-full bg-gray-200 h-3 rounded-full">
        <div className="bg-[#3AA619] h-3 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

// Main component
const CourseRating = () => {
  // Example data for ratings
  const ratingsData = [
    { rating: 5, percentage: 100 },
    { rating: 4, percentage: 20 },
    { rating: 3, percentage: 5 },
    { rating: 2, percentage: 3 },
    { rating: 1, percentage: 2 },
  ];

  return (
    <div className='w-[90%] mx-auto my-10'>
    <div className="w-[50%] ">
      {/* Overall Rating */}
      <div className="flex items-center space-x-0 mb-6">
        <div className="text-center">
          <div className="text-4xl font-bold">5.0</div>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-6 w-6 ${i < 6 ? 'text-[#3AA619]' : 'text-gray-300'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.164 3.583a1 1 0 00.95.69h3.764c.969 0 1.372 1.24.588 1.81l-3.046 2.21a1 1 0 00-.364 1.118l1.164 3.583c.3.921-.755 1.688-1.54 1.118l-3.046-2.21a1 1 0 00-1.175 0l-3.046 2.21c-.785.57-1.84-.197-1.54-1.118l1.164-3.583a1 1 0 00-.364-1.118L2.548 9.01c-.784-.57-.38-1.81.588-1.81h3.764a1 1 0 00.95-.69l1.164-3.583z" />
              </svg>
            ))}
          </div>
          <div className="text-sm text-gray-500">Course Ratings</div>
        </div>
      </div>

      {/* Individual Star Ratings */}
      <div className="space-y-4">
        {ratingsData.map((data) => (
          <Rating key={data.rating} rating={data.rating} percentage={data.percentage} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CourseRating;
