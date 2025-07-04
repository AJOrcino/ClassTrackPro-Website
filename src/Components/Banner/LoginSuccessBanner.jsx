import React from "react";

const LoginSuccessBanner = ({ show }) => {
  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } fixed top-16 right-4 sm:right-6 bg-[#1bd421] text-white px-5 py-4 rounded-lg shadow-2xl z-50 border-l-4 border-[#0e9f17] gap-4 max-w-sm items-center transition-all duration-300`}
    >
      <i className="fas fa-check-circle text-2xl" />
      <div>
        <strong className="block text-base">Login Successful</strong>
        <p className="text-sm text-gray-100">
          You’ve successfully logged in to ClassTrack Pro.
        </p>
      </div>
    </div>
  );
};

export default LoginSuccessBanner;
