import React from 'react';
import { Link } from 'react-router-dom';
const PasswordResetSuccess = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-[#2e2e2f] p-8 rounded-xl w-72 text-center shadow-lg relative sm:w-80 sm:p-10">
        <div className="bg-[#1bd421] text-black text-5xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5 sm:w-20 sm:h-20 sm:text-6xl">
          &#10003;
        </div>
        <p className="text-base text-gray-300 mb-6">
          You’ve successfully created a new password.<br /><strong className="font-bold">You can now log in.</strong>
        </p>
        <Link to="/login">
          <button className="bg-[#1bd421] text-black py-3 px-6 border-none rounded-lg text-base cursor-pointer transition-colors duration-300 hover:bg-[#1eac25]">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;