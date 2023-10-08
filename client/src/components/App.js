import { Route, Routes, Navigate } from "react-router-dom";
import "../App.css";
import InstructorPage from "./InstructorPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import Student from "./StudentPage";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
          <Route path="/register" element={ <RegisterPage />} />
          <Route path="/admins/:id" element={ <AdminPage /> } />
          <Route path="/students/:id" element={ <Student />} />
          <Route path="/instructors/:id" element={ <InstructorPage />} />
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
