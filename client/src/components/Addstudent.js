import React, { useState } from 'react';

function AddStudent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      
      if (response.status === 201) {
        
        console.log('Student added successfully!');

        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
        
        });
      } else {
        
        const data = await response.json();
        console.error('Failed to add student:', data);
      }
    } catch (error) {
      
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields and input elements go here */}
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Add other input fields here */}
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
