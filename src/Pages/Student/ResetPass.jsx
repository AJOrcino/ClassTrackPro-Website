import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessResetPasswords from "../../Components/Modal/SuccessResetPass";

const ResetPass = () => {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();

  const attemptClose = () => {
    navigate("/login");
  };

  const handleChangeNewPass = (e) => {
    setNewPass(e.target.value);
    if (errors.newPass) {
      setErrors((prev) => ({ ...prev, newPass: undefined }));
    }
  };

  const handleChangeConfirmPass = (e) => {
    setConfirmPass(e.target.value);
    if (errors.confirmPass) {
      setErrors((prev) => ({ ...prev, confirmPass: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {}; 
    if (!newPass) {
      newErrors.newPass = "Please enter your new password.";
    }

    if (!confirmPass) {
      newErrors.confirmPass = "Please confirm your new password.";
    }

    if (newPass && confirmPass && newPass !== confirmPass) {
      newErrors.confirmPass = "Passwords do not match.";
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|.*[@#$%^&*!?]).{6,}$/;
    if (newPass && !regex.test(newPass)) {
      newErrors.newPass =
        "Password must include uppercase, lowercase, and number or special character (min 6 chars).";
    }

    setErrors(newErrors); 

    if (Object.keys(newErrors).length === 0) {
      console.log("Password reset successful (sample data):", { newPass, confirmPass });
      setShowSuccessModal(true);
    } else {
      console.log("Form has validation errors:", newErrors);
      setShowSuccessModal(false); 
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-center font-sans px-4">
      {/* Navbar */}
      <nav className="w-full bg-[#2e2e2f] shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-[1080px] mx-auto flex items-center gap-3 px-5 py-3">
          <img src={""} alt="Logo" className="h-9" />
          <span className="text-white text-lg font-bold">ClassTrack Pro</span>
        </div>
      </nav>
      <div className="relative mt-32 bg-[#2e2e2f] p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-md mb-6">
        <button
          onClick={attemptClose}
          className="absolute top-4 right-5 text-red-500 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>
        {/* Reset Password Form*/}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h2 className="text-center text-2xl font-bold text-white">
            Reset Password
          </h2>
          <p className="text-center text-sm text-white -mt-2 mb-4">
            Use uppercase, lowercase, numbers, or special characters
          </p>
          {/* New Password*/}
          <div>
            <label htmlFor="new-password" className="text-sm text-gray-300">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              placeholder="************"
              value={newPass}
              onChange={handleChangeNewPass} 
              className={`w-full px-3 py-2 bg-[#1e1e1e] border rounded text-white focus:outline-none focus:ring-2 ${
                errors.newPass ? "border-red-500" : "border-gray-600 focus:border-[#1bd421]"
              }`}
            />
            {errors.newPass && (
              <p className="text-red-500 text-xs mt-1">{errors.newPass}</p>
            )}
          </div>
          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm-password" className="text-sm text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="************"
              value={confirmPass}
              onChange={handleChangeConfirmPass}
              className={`w-full px-3 py-2 bg-[#1e1e1e] border rounded text-white focus:outline-none focus:ring-2 ${
                errors.confirmPass ? "border-red-500" : "border-gray-600 focus:border-[#1bd421]"
              }`}
            />
            {errors.confirmPass && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPass}</p>
            )}
          </div>
          {/* Submit Button*/}
          <button
            type="submit"
            className="mt-4 py-2 bg-[#1bd421] text-black font-semibold rounded hover:bg-[#1eac25] transition-colors"
          >
            DONE
          </button>
        </form>
      </div>
      {/* Success Modal */}
      {showSuccessModal && <SuccessResetPasswords />}
    </div>
  );
};

export default ResetPass;