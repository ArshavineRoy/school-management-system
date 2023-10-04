import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import ViewStudents from './viewstudents';
import ViewUnits from './viewunits';
import ViewInstructors from './viewinstructor';
import AddStudent from './Addstudent';
import AddInstructor from './Add instructor';
import AddUnit from './Addunits';

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
              <Link to="/add-student">Add Student</Link>
            </li>
            <li>
              <Link to="/add-instructor">Add Instructor</Link>
            </li>
            <li>
              <Link to="/add-unit">Add Unit</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/view-units" component={ViewUnits} />
          <Route path="/view-students" component={ViewStudents} />
          <Route path="/view-instructors" component={ViewInstructors} />
          <Route path="/add-student" component={AddStudent} />
          <Route path="/add-instructor" component={AddInstructor} />
          <Route path="/add-unit" component={AddUnit} />
          <Route exact path="/" component={AdminPanel} />
        </Switch>
      </div>
    </Router>
  );
}

export default RouterApp;
