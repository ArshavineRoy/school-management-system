import React, { useState, useEffect } from 'react';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/students')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteStudent = (studentId) => {
    fetch(`/students/${studentId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setStudents(students.filter((student) => student.id !== studentId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>View Students</h2>
      <table>
        <thead>
          <tr>
            <th>Student Number</th>
            <th>Student Name</th>
            <th>Unit Grade</th>
            <th>Attendance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.studentNumber}</td>
              <td>{student.studentName}</td>
              <td>{student.unitGrade}</td>
              <td>{student.attendance}</td>
              <td>
                <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
