import React, { useState } from 'react';

function AddUnit() {
  const [formData, setFormData] = useState({
    unitName: '',
    description: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/units', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      
      if (response.status === 201) {
      
        console.log('Unit added successfully!');


        setFormData({
          unitName: '',
          description: '',
        
        });
      } else {
        
        const data = await response.json();
        console.error('Failed to add unit:', data);
      }
    } catch (error) {
      
      console.error('Error adding unit:', error);
    }
  };

  return (
    <div>
      <h2>Add Unit</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields and input elements go here */}
        <div>
          <label htmlFor="unitName">Unit Name:</label>
          <input
            type="text"
            id="unitName"
            name="unitName"
            value={formData.unitName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Add other input fields here */}
        <button type="submit">Add Unit</button>
      </form>
    </div>
  );
}

export default AddUnit;
