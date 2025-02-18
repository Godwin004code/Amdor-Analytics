import React, {useRef, useState} from 'react';
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

function Popup({ showPopup, setShowPopup }) {
  const [email, setEmail] = useState("")
  const [num, setNum] = useState("")

  const form = useRef()
  
 
    const handleSubmit = (e) => {
      if(email === "" || num === "") {
Swal.fire({
  title: "Fields must not be empty",
            icon: "warning",
})
      }
      else {
        e.preventDefault(); // Prevents the default form submission behavior
        emailjs
            .sendForm(
              "service_e50bxtu",
              "template_z1ie3pa",
              form.current,
              "xPfbN1VYqWgboVs7v"
            )
            .then(
              (result) => {
                console.log(result.text);
                // Swal.fire({
                //   title: "",
                //   icon: "success",
                // });
              },
              (error) => {
                console.log(error.text);
              }
            );
          setEmail("");
          setNum("")
      const url = "https://chat.whatsapp.com/GWUZBhMbBx6441x5gH0tB3"; // The link you want to open
      window.open(url, "_blank"); // Opens in a new tab, use "_self" for the same tab
      }
    }
  
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
            <form ref={form}>
              <input
                type="email"
                className='block w-full pl-3 py-3 rounded-lg border border-[#F1F1F3]'
                name="email"
                placeholder='Enter email address'
                id="email"
                required
                value={email} onChange={(e) =>setEmail(e.target.value)}
              />
              <input
                type="number"
                className='block w-full mt-3 pl-3 py-3 rounded-lg border border-[#F1F1F3]'
                placeholder='Enter Phone Number'
                name="num"
                id="num"
value={num}

      onChange={(e) => setNum(e.target.value)}          required
              />
            </form>
            
              <button onClick={handleSubmit} type='submit' className='h-[55px] mt-10 w-full rounded-lg text-white bg-[#3AA619] hover:bg-[#339f16] transition duration-200'>
                Join Community
              </button>
            
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
