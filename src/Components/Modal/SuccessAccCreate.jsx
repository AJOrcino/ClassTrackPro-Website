import React from "react";
import { Link } from "react-router-dom";

const SuccessAccCreate = () => {
  return (
    <div
      id="successModal"
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
    >
      <div className="bg-[#2e2e2f] p-8 rounded-xl w-72 text-center shadow-lg shadow-black/70 relative">
        <div className="bg-[#1bd421] text-black text-5xl rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-5">
          &#10003;
        </div>
        <p className="text-base text-gray-300 mb-6">
          Your account has been created
          <br />
          <strong className="font-bold">Successfully!</strong>
        </p>
        {/* Continue Button */}
        <Link to="/login">
          <button className="bg-[#1bd421] text-black py-3 px-6 rounded-lg text-base cursor-pointer transition-colors duration-300 hover:bg-[#1eac25]">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessAccCreate;
