import React, { useState } from 'react';

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    studentNumber: '',
    emailAddress: '',
    grade: '',
    attendance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log('Student added successfully!');
        setFormData({
          name: '',
          studentNumber: '',
          emailAddress: '',
          grade: '',
          attendance: '',
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
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="studentNumber">Student Number:</label>
          <input
            type="text"
            id="studentNumber"
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="attendance">Attendance:</label>
          <input
            type="text"
            id="attendance"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
