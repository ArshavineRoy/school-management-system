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
    fetch(`/units/${unitId}`, {
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={unit.id}>
              <td>{unit.unit_code}</td>
              <td>{unit.name}</td>
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
