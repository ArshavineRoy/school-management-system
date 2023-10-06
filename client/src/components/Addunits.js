// import React, { useState, useEffect } from 'react';

// function AddUnit() {
//   const [formData, setFormData] = useState({
//     unitName: '',
//     selectedUnit: '', // New field for the selected unit from the dropdown
//   });

//   const [units, setUnits] = useState([]); // State to store the list of units

//   useEffect(() => {
//     // Fetch the list of units when the component mounts
//     fetch('/units')
//       .then((response) => response.json())
//       .then((data) => {
//         setUnits(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching units:', error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/units', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.status === 201) {
//         console.log('Unit added successfully!');
//         setFormData({
//           unitName: '',
//           selectedUnit: '', // Clear the selected unit after adding
//         });
//       } else {
//         const data = await response.json();
//         console.error('Failed to add unit:', data);
//       }
//     } catch (error) {
//       console.error('Error adding unit:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Unit</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="unitName">Unit Name:</label>
//           <input
//             type="text"
//             id="unitName"
//             name="unitName"
//             value={formData.unitName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="selectedUnit">Select Unit:</label>
//           <select
//             id="selectedUnit"
//             name="selectedUnit"
//             value={formData.selectedUnit}
//             onChange={handleChange}
//           >
//             <option value="">-- Select Unit --</option>
//             {units.map((unit) => (
//               <option key={unit.id} value={unit.unitName}>
//                 {unit.unitName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Add Unit</button>
//       </form>
//     </div>
//   );
// }

// export default AddUnit;
