import React, { useState, useEffect } from 'react';

const ViewInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('/instructors')
      .then((response) => response.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteInstructor = (id) => {
    fetch(`/instructors/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the deleted instructor from the state
        setInstructors(instructors.filter((instructor) => instructor.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>View Instructors</h2>
      <table>
        <thead>
          <tr>
            <th>Instructor Number</th>
            <th>Instructor Name</th>
            <th>Instructor Email Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor.id}>
              <td>{instructor.staff_number}</td>
              <td>{instructor.name}</td>
              <td>{instructor.email_address}</td>
              <td>
                <button onClick={() => handleDeleteInstructor(instructor.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewInstructors;
