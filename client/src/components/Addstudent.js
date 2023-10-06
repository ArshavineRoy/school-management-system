// import React, { useState, useEffect } from 'react';

// const AddStudentToUnit = () => {
//   const [students, setStudents] = useState([]);
//   const [units, setUnits] = useState([]);
//   const [selectedStudentId, setSelectedStudentId] = useState('');
//   const [selectedUnit, setSelectedUnit] = useState('');
//   const [notification, setNotification] = useState('');
//   const [selectedStudentPreviousUnit, setSelectedStudentPreviousUnit] = useState('');

//   useEffect(() => {
//     // Fetch the list of existing students for reference
//     fetch('/students')
//       .then((response) => response.json())
//       .then((data) => {
//         setStudents(data);
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

//   useEffect(() => {
//     // Fetch the current unit of the selected student when the student changes
//     if (selectedStudentId) {
//       fetch(`/students/${selectedStudentId}/unit`)
//         .then((response) => response.json())
//         .then((data) => {
//           setSelectedStudentPreviousUnit(data.unit); // Replace with the actual field name that holds the unit
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, [selectedStudentId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if the selected student and unit are not empty
//     if (selectedStudentId.trim() === '' || selectedUnit.trim() === '') {
//       setNotification('Please select a student and enter a unit.');
//       return; // Don't submit if student or unit is empty
//     }

//     // Send a request to update the student's unit in the new unit
//     try {
//       const response = await fetch(`/students/${selectedStudentId}/unit`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ unit: selectedUnit }),
//       });

//       if (response.status === 200) {
//         console.log('Student placed in new unit successfully!');
//         setSelectedStudentId('');
//         setSelectedUnit('');
//         setNotification('Student placed in the new unit successfully.');
//       } else {
//         const data = await response.json();
//         console.error('Failed to place student in the new unit:', data);
//         setNotification('Failed to place student in the new unit.');
//       }
//     } catch (error) {
//       console.error('Error placing student in the new unit:', error);
//       setNotification('Error placing student in the new unit.');
//     }

//     // Send a request to update the student's unit in the previous unit
//     try {
//       const response = await fetch(`/students/${selectedStudentId}/remove-from-unit`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ unit: selectedStudentPreviousUnit }),
//       });

//       if (response.status === 200) {
//         console.log('Student removed from the previous unit successfully!');
//       } else {
//         const data = await response.json();
//         console.error('Failed to remove student from the previous unit:', data);
//       }
//     } catch (error) {
//       console.error('Error removing student from the previous unit:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Place Student in New Unit</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="selectedStudent">Select Student:</label>
//           <select
//             id="selectedStudent"
//             name="selectedStudent"
//             value={selectedStudentId}
//             onChange={(e) => setSelectedStudentId(e.target.value)}
//           >
//             <option value="">-- Select Student --</option>
//             {students.map((student) => (
//               <option key={student.id} value={student.id}>
//                 {student.name} - {student.student_number}
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
//         <button type="submit">Place Student in New Unit</button>
//       </form>
//       {notification && <p>{notification}</p>}
//     </div>
//   );
// };

// export default AddStudentToUnit;
