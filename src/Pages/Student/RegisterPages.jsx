import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowUps from "../../Components/Button/ArrowUp";
import SuccessAccCreates from "../../Components/Modal/SuccessAccCreate";

const RegisterPage = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
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
      newErrors.fullname = "Please enter your full name.";
    }
    if (!formData.email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Please enter your password.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (!formData.role) {
      newErrors.role = "Please select your role.";
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
    <div className="min-h-screen bg-[#1c1c1e] text-white font-sans flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-[#2e2e2f] shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-[1080px] mx-auto flex items-center gap-3 px-4 py-3 sm:px-6">
          <img src={""} alt="Logo" className="h-9" />
          <span className="text-white text-lg sm:text-xl font-bold">
            ClassTrack Pro
          </span>
        </div>
      </nav>

      {/* Registration Form */}
      <div className="w-full px-4 pt-36 pb-10 sm:pb-16 flex justify-center">
        <div className="bg-[#2e2e2f] p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-sm sm:max-w-md">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h2 className="text-center text-xl sm:text-2xl font-bold">
              ClassTrack Pro
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-300 -mt-1 mb-4">
              Create your account to get started
            </p>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm text-gray-300 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Your full name"
                className={`w-full px-3 py-2 bg-[#1e1e1e] border rounded text-white focus:outline-none focus:ring-2 ${
                  errors.fullname
                    ? "border-red-500"
                    : "border-gray-600 focus:border-[#1bd421]"
                }`}
                value={formData.fullname}
                onChange={handleChange}
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
              )}
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className={`w-full px-3 py-2 bg-[#1e1e1e] border rounded text-white focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-600 focus:border-[#1bd421]"
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className={`w-full px-3 py-2 bg-[#1e1e1e] border rounded text-white focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-600 focus:border-[#1bd421]"
                }`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm text-gray-300 mb-1"
              >
                Select Role
              </label>
              <select
                id="role"
                onChange={handleChange}
                value={formData.role}
                className={`w-full px-3 py-2 bg-[#1c1c1e] border rounded text-white appearance-none focus:outline-none focus:ring-2 ${
                  errors.role
                    ? "border-red-500"
                    : "border-gray-600 focus:border-[#1bd421]"
                }`}
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="president">President</option>
                <option value="vice-president">Vice President</option>
                <option value="secretary">Secretary</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-xs mt-1">{errors.role}</p>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1bd421] hover:bg-[#1eac25] text-white font-semibold py-2 rounded text-sm transition-colors duration-200"
            >
              SIGN UP
            </button>
            {/* Already Have Account */}
            <p className="text-center text-sm text-gray-300 mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-[#1bd421] hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
      {/* Arrow Up Button */}
      <ArrowUps />
      {/* Success Modal */}
      {showSuccessModal && <SuccessAccCreates />}
    </div>
  );
};

export default RegisterPage;
