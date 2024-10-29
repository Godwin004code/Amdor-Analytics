import React, { useRef, useState } from 'react'
import { GoPlus } from "react-icons/go";
import { HiOutlineXMark } from "react-icons/hi2";
const accordionData = [
    {
        title: "Can I enroll in multiply courses at once?",
        description: "Absolutely, you can enroll in multiply courses at once simultaneously and access them at your convenient.",
        li1: "",
        li2: "",
        li3: "",
        li4: ""
    },
    {
        title: "What kind of support will I get from the instructor?",
        description: "",
        li1: "Our instructors provide tailored guidance based on your unique learning needs and career goals.",
        li2: "They are available to help clarify concepts, provide feedback on assignments, and offer advice on industry best practices.",
        li3: "Our instructors engage with you through live sessions, discussions, and Q&A, ensuring you understand the material deeply and can apply it effectively.",
        li4: "Beyond the course material, our instructors are industry professionals who offer career mentorship, helping you navigate your career path, from resume building to interview preparation."
        
    },
    {
        title: " Do I need prior knowledge of tech before registering for the program?",
        description: "No, you don't need any prior tech knowledge to join our programs at Amdor Analytics. All our courses are designed to be beginner-friendly, with a structured curriculum that starts from the basics. Our goal is to make sure everyone, regardless of their background, can successfully learn and grow in the tech field.",

        li1: "",
        li2: "",
        li3: "",
        li4: ""
    },
    {
        title: "Can I download the course materials for offline access?",
        description: "Yes, you can! At Amdor Analytics, we understand the importance of flexibility in learning. All course materials, including lecture notes, slides, and other resources, are available for download so you can access them offline anytime, anywhere. This allows you to study at your own pace, even without an internet connection, making it easier to fit learning into your schedule.",
        li1: "",
        li2: "",
        li3: "",
        li4: ""
    },
    {
        title: "Who should I contact if I have questions about a course?",
        description: "You can reach out to us at amdoranalytics@gmail.com or +2348114037403, +2347031359782 ",
        li1: "",
        li2: "",
        li3: "",
        li4: ""
    }
]

const AccordionItem = ({ title, description, li1, li2, li3, li4, isOpen, onClick }) => {
  
    // console.log(listOne)
   const contentHeight = useRef();
   return (
     <div className="wrapper sm:mt-10 about sm:block" style={{boxShadow: '2px 2px 10 0 #0000001A'}}>
       <button
         className={`question-container ${isOpen ? "active" : ""}`}
         onClick={onClick}
       > 
         <p className="question-content ml-4 w-[80%]">{title}</p>
         <div className='bg-[#FFC480] my-3 mr-3 h-[52px] w-[52px] flex justify-center items-center rounded-lg'>
         {isOpen ?  <HiOutlineXMark size={25} /> : <GoPlus size={25} />}
         </div>
        
      
       </button>
 
       <div
         ref={contentHeight}
         className="answer-container"
         style={
           isOpen
             ? { height: contentHeight.current.scrollHeight}
             : { height: "0px" }
         }
       >
         <div className="answer-content text-[#3AA619] ml-4 mr-3 pb-3">
            {description && <p className='text-[#3AA619]'>{description}</p>}
           {li1 &&   <li className='text-[#3AA619]'>{li1}</li>}
             {li2 && <li className='text-[#3AA619]'>{li2}</li>}
             {li3 != "" && <li className='text-[#3AA619]'>{li3}</li>}
             {li4 != "" && <li className='text-[#3AA619]'>{li4}</li>}
           <div className='h-5 sm:h-2 w-full'></div>
         </div>
       </div>
     </div>
   );
 };


const Accordion = () => {
    


    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
  return (
    <div className=" w-[95%] sm:w-full mx-auto">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.description}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
          li1={item.li1}
          li2={item.li2}
          li3={item.li3}
          li4={item.li4}
        
        />
      ))}
    </div>
  )
}

export default Accordion