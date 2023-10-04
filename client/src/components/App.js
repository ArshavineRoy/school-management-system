import '../App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Student from "./Student";



function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/students/:id">
            <Student />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;