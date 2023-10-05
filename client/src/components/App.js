import "../App.css";
import LoginPage from "../pages/LoginPage";
import UnitsPage from "../pages/UnitsPage";
import RegisterPage from "../pages/RegisterPage"

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/students">
            <UnitsPage />
          </Route>
          <Route exact path="/students/register">
            <RegisterPage />
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