import '../App.css';
import { Switch, Route } from "react-router-dom";
import Student from "./Student";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/students/:id">
            <Student />
          </Route>
          
        </Switch>
      </main>
    </div>
  );
}

export default App;