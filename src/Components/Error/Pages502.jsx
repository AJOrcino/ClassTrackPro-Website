import React from "react";
import { useNavigate } from "react-router-dom";

const Pages502 = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c1c1e] text-white font-sans px-4">
      <div className="bg-[#2e2e2f] p-6 sm:p-10 rounded-xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1bd421] mb-4">
          502 Bad Gateway
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          HANDLE 502 ERROR: Oops! The server received an invalid response while acting as a
          gateway. This might be temporary, so feel free to try again shortly.
          If the issue persists, check the URL or head back to safety.
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

export default Pages502;
