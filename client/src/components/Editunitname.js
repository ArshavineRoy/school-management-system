import React, { useState } from 'react';

function EditUnitName({ unitId, currentUnitName, onUpdateUnitName }) {
  const [newUnitName, setNewUnitName] = useState(currentUnitName);

  const handleChange = (e) => {
    setNewUnitName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/units/${unitId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ unitName: newUnitName }),
      });

      
      if (response.status === 200) {

        console.log('Unit name updated successfully!');

    
        onUpdateUnitName(newUnitName);
      } else {
        
        const data = await response.json();
        console.error('Failed to update unit name:', data);
      }
    } catch (error) {
      
      console.error('Error updating unit name:', error);
    }
  };

  return (
    <div>
      <h2>Edit Unit Name</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newUnitName">New Unit Name:</label>
          <input
            type="text"
            id="newUnitName"
            name="newUnitName"
            value={newUnitName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Unit Name</button>
      </form>
    </div>
  );
}

export default EditUnitName;
