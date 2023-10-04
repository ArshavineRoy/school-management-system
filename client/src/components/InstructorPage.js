import { useEffect, useState } from 'react';
import './App.css';

function Instructor() {
  const [instructor, setInstructor] = useState({}); 

  useEffect(() => {
    fetch("http://127.0.0.1:5555/instructors", {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        accept: 'application/json',
      }
    })
    .then(response => response.json())
    .then((data) => {
      setInstructor(data); 
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <h4>Instructor Name</h4>
        <div>{instructor.name}</div>
      </div>

      <div>
        <h4>Instructor Number</h4>
        <div>{instructor.number}</div>
      </div>

      <div>
        <h5>Students Teaching</h5>
        <div>{instructor.students.teaching}</div>
      </div>

      <div>
        <h4>Courses Teaching</h4>
        <div>{instructor.courses.teaching}</div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <td>Course Number</td>
              <td>Course Name</td>
              <td>Current Students</td>
              <td>Average Attendance</td>
              <td>Average Grades</td>
            </tr>
          </thead>
          <tbody>
            {instructor.units.map(unit => {
              return (
                <tr>
                  <td>{unit.number}</td>
                  <td>{unit.name}</td>
                  <td>{unit.teacher}</td>
                  <td>{unit.enrolled}</td>
                  <td>{unit.action}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Instructor;
