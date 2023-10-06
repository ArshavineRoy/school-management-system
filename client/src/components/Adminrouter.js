import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import ViewStudents from './viewstudents';
import ViewUnits from './viewunits';
import ViewInstructors from './viewinstructor';

function RouterApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Admin Panel</Link>
            </li>
            <li>
              <Link to="/view-units">View Units</Link>
            </li>
            <li>
              <Link to="/view-students">View Students</Link>
            </li>
            <li>
              <Link to="/view-instructors">View Instructors</Link>
            </li>
            <li>
             
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/view-units" component={ViewUnits} />
          <Route path="/view-students" component={ViewStudents} />
          <Route path="/view-instructors" component={ViewInstructors} />
          
          <Route exact path="/" component={AdminPanel} />
        </Switch>
      </div>
    </Router>
  );
}

export default RouterApp;
