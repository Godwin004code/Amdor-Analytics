import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";
import YTComponent from "./YTComponent";

const carouselItems = [
  {
    id: 1,
    className: "carousel-item-1",
    videoId: "f7B_srP1hIg?si=VRXcq2Vrq-8Qxinf",
    name: "Seyi",
  },
  {
    id: 2,
    className: "carousel-item-2",
    videoId: "3VowbyaJ4EI?si=wzmrzZk4ogw-mUTW",
    name: "Emmanuel Danfo",
  },
  {
    id: 3,
    className: "carousel-item-3",
    videoId: "sD2VFVqv8H0?si=zWTQyWJ2xnOZqFo1",
    name: "Akise",
  },
  {
    id: 4,
    className: "carousel-item-4",
    videoId: "sD2VFVqv8H0?si=zWTQyWJ2xnOZqFo1",
    name: "Juliet",
  },
];

const ImageCarousel = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const openPopup = (videoId) => {
    setSelectedVideoId(videoId);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedVideoId(null);
  };

  return (
    <div className="image-carousel-section p-6 bg-gray-100 overflow-hidden relative">
      <h2 className="text-2xl text-center mb-4">Featured Videos</h2>

      <motion.div
        className="carousel-container flex w-max space-x-4"
        animate={{ translateX: "-75%" }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className={`carousel-item ${item.className} p-3 bg-cover bg-center text-white rounded-lg w-[30vw] xl:w-[25vw] lg:w-[30vw] md:w-[40vw] sm:w-[45vw] cursor-pointer flex items-end justify-center min-h-[50vh] sm:min-h-[40vh]`}
            onClick={() => openPopup(item.videoId)}
          >
            <span className="bg-black bg-opacity-50 px-3 py-1 rounded-b-lg text-center w-full text-lg font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>

      {showPopup && selectedVideoId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full min-h-[40vh] overflow-y-auto relative flex items-center">
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
  );
};

export default ImageCarousel;
