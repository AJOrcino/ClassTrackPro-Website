import React from "react";
import { useNavigate } from "react-router-dom";

const Pages503 = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c1c1e] text-white font-sans px-4">
      <div className="bg-[#2e2e2f] p-6 sm:p-10 rounded-xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1bd421] mb-4">
          503 Service Unavailable
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          HANDLE 503 ERROR: We're temporarily offline for maintenance or
          overwhelmed by traffic. Please try again later. Your patience keeps
          the server running smoother than ever.
        </p>
        <button
          onClick={goHome}
          className="mt-6 px-6 py-2 bg-[#1bd421] text-black rounded hover:bg-[#1eac25] transition-colors text-sm sm:text-base font-semibold"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Pages503;
