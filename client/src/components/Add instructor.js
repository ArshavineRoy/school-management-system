// import React, { useState, useEffect } from 'react';

// const AddInstructor = () => {
//   const [instructors, setInstructors] = useState([]);
//   const [units, setUnits] = useState([]);
//   const [selectedInstructorId, setSelectedInstructorId] = useState('');
//   const [selectedUnit, setSelectedUnit] = useState('');
//   const [notification, setNotification] = useState('');

//   useEffect(() => {
//     // Fetch the list of instructors
//     fetch('/instructors')
//       .then((response) => response.json())
//       .then((data) => {
//         setInstructors(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//     // Fetch the list of units
//     fetch('/units')
//       .then((response) => response.json())
//       .then((data) => {
//         setUnits(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if the selected instructor and unit are not empty
//     if (selectedInstructorId.trim() === '' || selectedUnit.trim() === '') {
//       setNotification('Please select an instructor and enter a unit.');
//       return; // Don't submit if instructor or unit is empty
//     }

//     // Send a request to associate the instructor with the selected unit
//     try {
//       const response = await fetch(`/units/${selectedUnit}/add-instructor`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ instructorId: selectedInstructorId }),
//       });

//       if (response.status === 200) {
//         console.log('Instructor added to the unit successfully!');
//         setSelectedInstructorId('');
//         setSelectedUnit('');
//         setNotification('Instructor added to the unit successfully.');
//       } else {
//         const data = await response.json();
//         console.error('Failed to add instructor to the unit:', data);
//         setNotification('Failed to add instructor to the unit.');
//       }
//     } catch (error) {
//       console.error('Error adding instructor to the unit:', error);
//       setNotification('Error adding instructor to the unit.');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Instructor to Unit</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="selectedInstructor">Select Instructor:</label>
//           <select
//             id="selectedInstructor"
//             name="selectedInstructor"
//             value={selectedInstructorId}
//             onChange={(e) => setSelectedInstructorId(e.target.value)}
//           >
//             <option value="">-- Select Instructor --</option>
//             {instructors.map((instructor) => (
//               <option key={instructor.id} value={instructor.id}>
//                 {instructor.name} - {instructor.staff_number} - {instructor.email_address}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="selectedUnit">Select Unit:</label>
//           <select
//             id="selectedUnit"
//             name="selectedUnit"
//             value={selectedUnit}
//             onChange={(e) => setSelectedUnit(e.target.value)}
//           >
//             <option value="">-- Select Unit --</option>
//             {units.map((unit) => (
//               <option key={unit.id} value={unit.unit_code}>
//                 {unit.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Add Instructor to Unit</button>
//       </form>
//       {notification && <p>{notification}</p>}
//     </div>
//   );
// };

// export default AddInstructor;
