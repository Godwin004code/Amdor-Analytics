import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";
import YTComponent from "./YTComponent";
import { FaPlay } from "react-icons/fa";

const carouselItems = [
  {
    id: 1,
    className: "carousel-item-1",
    videoId: "f7B_srP1hIg?si=VRXcq2Vrq-8Qxinf",
    name: "Femi",
  },
  {
    id: 2,
    className: "carousel-item-2",
    videoId: "3VowbyaJ4EI?si=wzmrzZk4ogw-mUTW",
    name: "Bolaji",
  },
  {
    id: 3,
    className: "carousel-item-3",
    videoId: "sD2VFVqv8H0?si=zWTQyWJ2xnOZqFo1",
    name: "Sodiq",
  },
  {
    id: 4,
    className: "carousel-item-4",
    videoId: "zjSdEiURniw?si=Mp72-3EcOraYGkSD",
    name: "Tobi",
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
    <div className="image-carousel-section w-[90%] mx-auto py-6 my-10 bg-gray-100 overflow-hidden relative">
      <h2 className="text-2xl text-center mb-4">Featured Videos</h2>

      <div
        className="carousel-container  flex w-full space-x-4"
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
            className={`carousel-item relative ${item.className} p-3 bg-cover bg-center text-white rounded-lg w-[25%] cursor-pointer flex items-end justify-center min-h-[50vh] sm:min-h-[40vh]`}
            onClick={() => openPopup(item.videoId)}
          >
            <div className="bg-black bg-opacity-50 px-3 py-1 absolute top-0 bottom-0 left-0 right-0 rounded-b-lg text-center w-full flex items-center justify-center flex-col text-lg font-medium">
            <h2>{item.name}</h2>
            <div className="mt-4">
            <FaPlay color="white" />
            </div>
            </div>
          </div>
        ))}
      </div>

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
