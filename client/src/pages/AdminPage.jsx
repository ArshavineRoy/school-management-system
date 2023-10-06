import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";
import ListTable from "../components/ListTable";
import AdminStats from "../components/Adminstats";

function AdminPage() {
  const [students, setStudents] = useState([]);
  const [instructorsCount, setInstructorsCount] = useState(0);
  const [unitsCount, setUnitsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDeleteStudent = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      fetch(`/students/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Remove the deleted student from the state
          setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  useEffect(() => {
    // Fetch students
    fetch("/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    // Fetch instructors count (replace with actual data)
    fetch("/instructors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setInstructorsCount(data.length);
      })
      .catch((error) => {
        setError(error); // Updated to setError(error) for proper error handling
      });

    // Fetch units count (replace with actual data)
    fetch("/units")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUnitsCount(data.length);
      })
      .catch((error) => {
        setError(error); // Updated to setError(error) for proper error handling
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const student_columns = [
    {
      field: "id",
      headerName: "Student No",
      width: 120,
    },
    {
      field: "student_name",
      headerName: "Student Name",
      width: 200,
    },
    {
      field: "email_address",
      headerName: "Email Address",
      width: 300,
    },
    {
      field: "grade",
      headerName: "Current Grade",
      width: 150,
    },
    {
      field: "attendance",
      headerName: "Average Attendance",
      width: 150,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <button
          className="bg-red-500 rounded px-3 py-2 text-white cursor-pointer"
          onClick={() => handleDeleteStudent(params.row.id)}
        >
          Delete
        </button>
      ),
    },
  ];

  const title = "Hello, Admin";
  const description =
    "Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Urna condimentum mattis pellentesque id nibh tortor id. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.";
  const image = "/assets/images/image-5.png";

  // Calculate some dummy values for studentCount
  const studentCount = students.length;

  return (
    <div>
      <TopHeader />
      <Hero title={title} description={description} image={image} />
      <AdminStats
        studentCount={studentCount}
        instructorCount={instructorsCount} // Display instructor count
        unitCount={unitsCount} // Display unit count
      />
      <ListTable
        headers={student_columns}
        data={students.map((student) => ({
          id: student.id,
          student_name: student.name,
          email_address: student.email_address,
          grade: `${student.grade}%`,
          attendance: `${student.attendance}%`,
        }))}
        title="List of Students"
      />
    </div>
  );
}

export default AdminPage;
