import React from "react";
import background from "../assets/background.png";
import logo from "../assets/logo.png";

const AdminSign = () => {
  return (
    <div className="h-screen relative font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Header Bar */}
      <div className="absolute top-0 left-0 w-full bg-navy flex items-center px-6 py-2 shadow-md z-10">
        <img
          src={logo}
          alt="CKSM Logo"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h1 className="text-yellow-400 font-bold text-2xl">CKSM</h1>
          <p className="text-white text-xs">
            CHRIST THE KING SCHOOL OF MUNTINLUPA
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-0 max-w-2xl w-full h-[380px]">
          {/* Left Box */}
          <div className="bg-light bg-opacity-10 backdrop-blur-md p-6 flex flex-col min-h-[320px] rounded-lg shadow-md border border-white border-opacity-30">
            {/* Logo at the very top */}
            <img
              src={logo}
              alt="School Logo"
              className="w-20 h-20 rounded-full mx-auto mt-4 mb-2 object-cover border-2 border-white"
            />

            {/* School name */}
            <div className="mt-4 text-center">
              <h2 className="text-white font-bold text-xl">
                CHRIST THE KING SCHOOL OF
              </h2>
              <h2 className="text-white font-bold text-xl">MUNTINLUPA</h2>
            </div>

            {/* Welcome message */}
            <div className="flex-grow flex items-center justify-center">
              <p className="text-white text-2xl font-semibold">
                Welcome Admin!
              </p>
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-black bg-opacity-60 p-8 text-center h-[420px] flex flex-col">
            <h2 className="text-white text-xl font-bold mb-2 mr-32">
              ClassTrack Pro
            </h2>
            <h3 className="text-white text-3xl font-semibold mb-1 mt-4 ml-9">
              Admin Profile
            </h3>
            <p className="text-gray-300 text-sm mb-10">
              Fill out the form to login
            </p>

            {/* Login Form */}
            <form className="flex flex-col gap-5">
              {/* Email Field */}
              <div className="relative mt-4 mb-2">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                  👤
                </span>
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none"
                  placeholder="Admin Email"
                />
              </div>

              {/* Password Field */}
              <div className="relative mb-3">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                  🔒
                </span>
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              {/* Sign In Button */}
              <button
                className="w-fit bg-navy hover:bg-blue-900 text-white font-bold py-2 px-8 rounded-full self-center mt-2">
                Sign In
              </button>

              {/* Sign Up Link */}
              <p className="text-white text-sm mt-1">
                Don't have an account?{" "}
                <a href="#" className="text-yellow-400 font-semibold">
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSign;
