import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../auth/telasAuth/Login";
import Register from "../auth/telasAuth/Register";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default PublicRoutes;
