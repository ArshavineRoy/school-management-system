import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import ViewStudents from './viewstudents';
import ViewUnits from './viewunits';
import ViewInstructors from './viewinstructor';
import AddStudent from './Addstudent';
import AddInstructor from './Add instructor';
import AddUnit from './Addunits';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          School Management System
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Happy Coding * _ *
        </a>
      </header>
    </div>
  );
}

export default App;
