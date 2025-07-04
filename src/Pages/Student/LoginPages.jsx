import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowUps from "../../Components/Button/ArrowUp";
import LoginSuccessBanners from "../../Components/Banner/LoginSuccessBanner";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    setErrors(newErrors); 

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted Successfully:", formData);
      setShowBanner(true); 

      setTimeout(() => {
        setShowBanner(false); 
        navigate("/not-found"); 
      }, 3500); 
    } else {
      console.log("Form has errors, banner not shown:", newErrors);
      setShowBanner(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white flex flex-col items-center font-sans">
      {/* Success Banner */}
      <LoginSuccessBanners show={showBanner} />

      {/* Navbar */}
      <nav className="w-full bg-[#2e2e2f] shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-[1080px] mx-auto flex items-center gap-3 px-4 py-3 sm:px-6">
          <img src={""} alt="Logo" className="h-9" />
          <span className="text-white text-lg sm:text-xl font-bold">
            ClassTrack Pro
          </span>
        </div>
      </nav>

      {/* Login Form */}
      <div className="w-full px-4 pt-36 pb-10 sm:pb-16 flex justify-center">
        <div className="w-full max-w-sm sm:max-w-md bg-[#2e2e2f] p-6 sm:p-10 rounded-xl shadow-lg">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Header */}
            <div className="flex items-center gap-4 justify-center mb-4">
              <i className="fas fa-lock text-3xl sm:text-4xl text-[#1bd421]" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  ClassTrack Pro
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  Fill out the form to log in
                </p>
              </div>
            </div>

            {/* Email Input */}
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
                placeholder="Email Here"
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

            {/* Password Input */}
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

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                to="/reset-password"
                className="text-[#1bd421] text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1bd421] hover:bg-[#1eac25] text-black font-semibold py-2 rounded text-sm transition-colors duration-200"
            >
              SIGN IN
            </button>

            {/* Signup Link */}
            <p className="text-center text-sm text-gray-300 mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#1bd421] hover:underline">
                Sign Up
              </Link>
            </p>
          </form>

          {/* Scroll to Top Button */}
          <ArrowUps />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;