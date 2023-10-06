import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import "../App.css";
import UnitsPage from "../pages/UnitsPage";
import InstructorPage from "./InstructorPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import Student from "./StudentPage";
import jwt_decode from "jwt-decode";

function App() {
  const [userRole, setUserRole] = useState(null);

  const token = localStorage.getItem("token");
  // console.log(token);

  useEffect(() => {
    if (token) {
      const decodedToken = jwt_decode(token);
      const role = decodedToken.studentId;
      setUserRole(role);
    }
  }, [token]);

  return (
    <div>
      <main>
        <Routes>
          <Route path="/admins/:id" element={<AdminPage />} />
          {/* <Route path="/students" element={<UnitsPage /> } /> */}
          <Route path="/students/:id" element={<Student />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/instructors/:id" element={ <InstructorPage />} />
          <Route path="/admin" element={<Outlet />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
