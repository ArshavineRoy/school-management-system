import React, { useEffect, useState } from "react";
import "../App.css";
import LoginPage from "../pages/LoginPage";
import UnitsPage from "../pages/UnitsPage";
import InstructorPage from "./InstructorPage";
import { Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";

import Student from "./StudentPage";

import jwt_decode from "jwt-decode";



function App() {
  const [userRole, setUserRole] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {

    if (token) {
      const decodedToken = jwt_decode(token);
      const role = decodedToken.role;
      setUserRole(role);
    }
  }, [token]);

    // console.log(`user role: ${userRole}`)


  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/admins/:id">
            {userRole === 1 ? <AdminPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/students">
            {userRole === 3 ? <UnitsPage /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/students/:id">
            <Student/>
          </Route>

          {/* <Route exact path="/students/register">
            {userRole === "student" ? <RegisterPage /> : <Redirect to="/" />}
          </Route> */}

          <Route exact path="/students/register">
            <RegisterPage />
          </Route>
          <Route exact path="/instructors/:id">
            {userRole === 2 ? <InstructorPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
