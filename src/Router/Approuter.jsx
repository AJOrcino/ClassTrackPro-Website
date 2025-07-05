import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../Pages/Student/LoginPages";
import RegisterPage from "../Pages/Student/RegisterPages";
import ResetPassword from "../Pages/Student/ResetPass";
import Unauthorized from "../Components/Error/Pages401";
import BadGate from "../Components/Error/Pages502";
import Forbidden from "../Components/Error/Pages403";
import ServiceUnvalable from "../Components/Error/Pages503";
import NotFound from "../Components/Error/Pages404";
import SuccessAccCreates from "../Components/Modal/SuccessAccCreate";
import SuccessResetPasswords from "../Components/Modal/SuccessResetPass";
import TeamSections from "../Components/Card/TeamCard/TeamSection";
import TeamMembers from "../Components/Card/TeamCard/TeamMemberCard";
import "../index.css";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/bad-gateway" element={<BadGate />} />
      <Route path="/forbidden" element={<Forbidden />} />
      <Route path="/service-unavailable" element={<ServiceUnvalable />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/success-account-create" element={<SuccessAccCreates />} />
      <Route
        path="/success-reset-password"
        element={<SuccessResetPasswords />}
      />
      <Route path="/team" element={<TeamSections />} />
      <Route path="/team-members" element={<TeamMembers />} />
    </Routes>
  );
}

export default AppRouter;
