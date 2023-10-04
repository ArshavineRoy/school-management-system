import "../App.css";
import RouterApp from "./Adminrouter"; 
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/students">
            <RouterApp /> {/* Render RouterApp component when the path includes /students */}
          </Route>
          <Route exact path="/">
            <RouterApp /> {/* Render RouterApp component when the path is the root / */}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
