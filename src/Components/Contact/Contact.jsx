import Navs from "../Navbar/LoginNav/Navbars";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import SuccessContactMessages from "../Modal/SuccessContactMess";

const Contact = () => {
  const navigate = useNavigate();

  const attemptClose = () => {
    navigate("/login");
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullname) {
      newErrors.fullname = "Please enter your fullname ";
    }
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message) {
      newErrors.message = "Please enter your message";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted Successfully:", formData);
      setShowSuccessModal(true);
    } else {
      console.log("Form has errors, modal not shown:", newErrors);
      setShowSuccessModal(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#1c1c1e] text-white flex flex-col items-center font-sans">
        {/* Navs is already covering the top spacing */}
        <Navs />
        <div className="w-full px-4 pt-20 pb-10 sm:pb-16 flex justify-center">
          <div className="bg-[#2e2e2f] p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-sm sm:max-w-md relative">
            {/* The form needs a gap between its direct children to separate the input sections */}
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* "X" button */}
              <button
                onClick={attemptClose}
                type="button"
                className="absolute top-4 right-4 text-red-500 text-2xl font-bold focus:outline-none"
              >
                &times;
              </button>
              <h2 className="text-center text-xl sm:text-2xl font-bold mt-4">
                Contact Us
              </h2>
              {/* Full name */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm text-gray-300 mb-1" /* Added mb-1 here */
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Your full name"
                  className={`w-full px-3 py-2 bg-[#1e1e1e] border rounded text-white focus:outline-none focus:ring-2 ${errors.fullname ? "border-red-500" : " border-gray-600 focus:border-[#1bd421]"}`}
                  value={formData.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm mt-1 mb-1">
                    {errors.fullname}
                  </p>
                )}
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-1" /* Added mb-1 here */
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className={`w-full px-3 py-2 bg-[#1e1e1e] border rounded text-white focus:outline-none focus:ring-2 ${errors.email ? "border-red-500" : " border-gray-600 focus:border-[#1bd421]"}`} /* Corrected error check for email */
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 mb-1">
                    {errors.email}
                  </p>
                )}
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-1" /* Added mb-1 here */
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  className={`w-full px-3 py-2 bg-[#1e1e1e] border rounded text-white focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-600 focus:border-[#1bd421]"
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 mb-2">
                    {errors.message}
                  </p>
                )}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1bd421] hover:bg-[#1eac25] text-black font-semibold py-2 rounded text-sm transition-colors duration-200 mt-4"
              >
                MESSAGE SUBMIT
              </button>
            </form>
          </div>
        </div>
        {/* Success Modal */}
        {showSuccessModal && <SuccessContactMessages />}
      </div>
    </>
  );
};

export default Contact;