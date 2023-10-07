import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";
import Stats from "../components/StudentStats";
import ListTable from "../components/ListTable";
import AdminStats from "../components/Adminstats";

function AdminPage() {
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [units, setUnits] = useState([]);

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
      .then((students) => {
        setStudents(students);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    // Fetch instructors
    fetch("/instructors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((instructors) => {
        setInstructors(instructors)
        setInstructorsCount(instructors.length);
      })
      .catch((error) => {
        setError(error);
      });

    // Fetch units
    fetch("/units")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((units) => {
        setUnits(units)
        setUnitsCount(units.length);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const student_columns = [
    {
      field: "id",
      headerName: "Student No",
      width: 220,
    },
    {
      field: "student_name",
      headerName: "Student Name",
      width: 280,
    },
    {
      field: "email_address",
      headerName: "Email Address",
      width: 400,
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
      field: "update",
      headerName: "Update",
      width: 120,
      renderCell: (params) => (
        <button
          className="bg-blue-500 rounded px-3 py-2 text-white cursor-pointer"
          // onClick={() => handleUpdateStudent(params.row.id)}
        >
          Edit
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
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

  const instructor_columns = [
    {
      field: "id",
      headerName: "Staff No",
      width: 160,
    },
    {
      field: "instructor_name",
      headerName: "Instructor Name",
      width: 380,
    },
    {
      field: "email_address",
      headerName: "Email Address",
      width: 650,
    },
    {
      field: "update",
      headerName: "Update",
      width: 120,
      renderCell: (params) => (
        <button
          className="bg-blue-500 rounded px-3 py-2 text-white cursor-pointer"
          // onClick={() => handleUpdateStudent(params.row.id)}
        >
          Edit
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
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

  const unit_columns = [
    {
      field: "id",
      headerName: "Unit Code",
      width: 200,
    },
    {
      field: "unit_name",
      headerName: "Unit Name",
      width: 1000,
    },
    {
      field: "update",
      headerName: "Update",
      width: 120,
      renderCell: (params) => (
        <button
          className="bg-blue-500 rounded px-3 py-2 text-white cursor-pointer"
          // onClick={() => handleUpdateStudent(params.row.id)}
        >
          Edit
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
      renderCell: (params) => (
        <button
          className="bg-red-500 rounded px-3 py-2 text-white cursor-pointer"
          onClick={() => handleDeleteStudent(params.row.id)}
        >
          Delete
        </button>
      ),
    },
  ]

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

      {/* Admin stats */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-8 rounded-lg">
          <button className="flex flex-col justify-center items-center rounded-md shadow p-8 stat-card-1">
            <h6 className="font-bold">Total Students</h6>
            <div className="text-xl  font-semibold mb-2">{studentCount}</div>
          </button>
          <button className="flex flex-col justify-center items-center rounded-md shadow p-8 stat-card-2">
            <h6 to="/instructors" className="font-bold"> Total Instructors</h6>
            <div className="text-xl font-semibold mb-2">{instructorsCount}</div>
          </button>
          <button className="flex flex-col justify-center items-center rounded-md shadow-lg p-8 stat-card-3">
            <h1 className="font-bold">Total Units</h1>
            <div className="text-xl font-semibold mb-2">{unitsCount}</div>
          </button>

        </div>
      </div>
      <ListTable
        headers={student_columns}
        data={students.map((student) => ({
          id: student.student_number,
          student_name: student.name,
          email_address: student.email_address,
          grade: `${student.grade}%`,
          attendance: `${student.attendance}%`,
        }))}
        title="List of Students"
      />
      <ListTable
        headers={instructor_columns}
        data={instructors.map((instructor) => ({
          id: instructor.staff_number,
          instructor_name: instructor.name,
          email_address: instructor.email_address,
        }))}
        title="List of Instructors"
      />
      <ListTable
        headers={unit_columns}
        data={units.map((unit) => ({
          id: unit.unit_code,
          unit_name: unit.name,
        }))}
        title="List of Units"
      />
    </div>
  );
}

export default AdminPage;
