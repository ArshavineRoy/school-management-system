import "../App.css";
import LoginPage from "../pages/LoginPage";
import UnitsPage from "../pages/UnitsPage";
import InstructorPage from "./InstructorPage";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage"
import AdminPage from "../pages/AdminPage";


function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/students">
            <UnitsPage />
          </Route>
          <Route exact path="/students/register">
            <RegisterPage />
          </Route>
          <Route exact path="/instructors/:id">
            <InstructorPage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;