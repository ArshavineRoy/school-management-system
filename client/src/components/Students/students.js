import { useEffect, useState } from 'react'
import './App.css';

function Student() {
  //usestate hook initializes the variable student with an empty object as initial value//
  //setStudent is used to update the student state//
  const [student, setStudent] = useState({})

  useEffect(() => {
      fetch("http://127.0.0.1:5000/student", {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            accept: 'application/json',
        }
      })
      .then(response => response.json())
      .then((data) => {
        setStudent(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  


  return (
    <div className="App">
      <div>
        <h4>Student Name</h4>
        <div>{student.name}</div>
      </div>

      <div>
        <h4>Student Number</h4>
        <div>{student.number}</div>
      </div>

      <div>
        <h5>Average attendance</h5>
        <div>{student.average_attendance}</div>
      </div>

      <div>
        <h4>Units enrolled</h4>
        <div>{student.units.length}</div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
            <td>Unit Number</td>
            <td>Unit name</td>
            <td>Current Grade</td>
            <td>Attendance</td>
            <td>Teacher</td>
          </tr>
          </thead>
          <tbody>
            {student.units.map(unit => {
                return (
                  <tr>
                    <td>{unit.number}</td>
                    <td>{unit.name}</td>
                    <td>{unit.current_grade}</td>
                    <td>{unit.attendance}</td>
                    {/* instructor value is name instead of an object */}
                    <td>{unit.instructor}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
              
      </div>
    </div>
  );
}

export default Student;
