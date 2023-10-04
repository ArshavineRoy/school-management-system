import React, { useState, useEffect } from 'react';

const ViewUnits = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    fetch('/units')
      .then((response) => response.json())
      .then((data) => {
        setUnits(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteUnit = (unitId) => {
    fetch(`rm -rf /home/collins/moringa/flask/school-management-system/client/node_modules/autoprefixer
    /units/${unitId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUnits(units.filter((unit) => unit.id !== unitId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>View Units</h2>
      <table>
        <thead>
          <tr>
            <th>Unit Number</th>
            <th>Unit Name</th>
            <th>Unit Instructor</th>
            <th>Students Enrolled</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={unit.id}>
              <td>{unit.unitNumber}</td>
              <td>{unit.unitName}</td>
              <td>{unit.unitInstructor}</td>
              <td>{unit.studentsEnrolled}</td>
              <td>
                <button onClick={() => handleDeleteUnit(unit.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUnits;
