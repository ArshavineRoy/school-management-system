import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";
import ListTable from "../components/ListTable";

function AdminPage() {
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [units, setUnits] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedTable, setSelectedTable] = useState("students");

  const handleDeleteStudent = (email) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      fetch(`/students/${email}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Remove the deleted student from the state
          setStudents((prevStudents) => prevStudents.filter((student) => student.email_address !== email));
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  const handleDeleteInstructor = (email) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this instructor?");
    if (confirmDelete) {
      fetch(`/instructors/${email}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Remove the deleted unit from the state
          setInstructors((prevInstructors) => prevInstructors.filter((instructor) => instructor.email_address !== email));
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  const handleDeleteUnit = (code) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this unit?");
    if (confirmDelete) {
      fetch(`/units/${code}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Remove the deleted unit from the state
          setUnits((prevUnits) => prevUnits.filter((unit) => unit.unit_code !== code));
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
      width: 540,
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
          onClick={() => handleDeleteStudent(params.row.email_address)}
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
          // onClick={() => handleUpdateInstructor(params.row.id)}
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
          onClick={() => handleDeleteInstructor(params.row.email_address)}
        >
          Delete
        </button>
      ),
    },
  ];
  // student_number
  const unit_columns = [
    {
      field: "id",
      headerName: "Unit Code",
      width: 200,
    },
    {
      field: "unit_name",
      headerName: "Unit Name",
      width: 800,
    },
    {
      field: "student_number",
      headerName: "No. of Students",
      width: 200,
    },
    {
      field: "update",
      headerName: "Update",
      width: 120,
      renderCell: (params) => (
        <button
          className="bg-blue-500 rounded px-3 py-2 text-white cursor-pointer"
          // onClick={() => handleUpdateUnit(params.row.id)}
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
          onClick={() => handleDeleteUnit(params.row.id)}
        >
          Delete
        </button>
      ),
    },
  ]

  const studentCount = students.length;
  const instructorsCount = instructors.length;
  const unitsCount = units.length;

  const title = "Hello, Admin";
  const description = ` Welcome to the Admin Panel! There are currently ${studentCount} students, ${instructorsCount} instructors, and ${unitsCount} units in the system.

  This platform empowers you to manage various aspects of our educational system with ease.
  Use the card buttons below to view and edit student, instructor, and unit details or remove them from the system.
  We're here to assist you in ensuring a seamless educational experience for students and staff. If you have any questions or need assistance, don't hesitate to reach out to our support team.
`;
  const image = "/assets/images/image-5.png";

  let tableToRender;
  if (selectedTable === "students") {
    tableToRender = (
      <ListTable
        headers={student_columns}
        data={students.map((student) => ({
          id: student.student_number,
          student_name: student.name,
          email_address: student.email_address,
          attendance: `${student.attendance}%`,
        }))}
        title="List of Students"
      />
    );
  } else if (selectedTable === "instructors") {
    tableToRender = (
      <ListTable
        headers={instructor_columns}
        data={instructors.map((instructor) => ({
          id: instructor.staff_number,
          instructor_name: instructor.name,
          email_address: instructor.email_address,
        }))}
        title="List of Instructors"
      />
    );
  } else if (selectedTable === "units") {
    tableToRender = (
      <ListTable
        headers={unit_columns}
        data={units.map((unit) => ({
          id: unit.unit_code,
          unit_name: unit.name,
          student_number : unit.students.length,
        }))}
        title="List of Units"
      />
    );
  }

  return (
    <div>
      <TopHeader />
      <Hero title={title} description=<div style={{ whiteSpace: "pre-line" }}>{description}</div> image={image} />

      {/* Admin stats */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-8 rounded-lg">
          <button
            className="flex flex-col justify-center items-center rounded-md shadow-2xl shadow-blue-500 p-8 stat-card-1"
            onClick={() => setSelectedTable("students")}
          >
            <h6 className="font-bold">Students</h6>
            <div className="text-xl text-gray-800 mb-2">{studentCount}</div>
          </button>
          <button
            className="flex flex-col justify-center items-center rounded-md shadow-2xl shadow-purple-700 p-8 stat-card-2"
            onClick={() => setSelectedTable("instructors")}
          >
            <h6 className="font-bold">
              Instructors
            </h6>
            <div className="text-xl text-gray-800 mb-2">{instructorsCount}</div>
          </button>
          <button
            className="flex flex-col justify-center items-center rounded-md shadow-2xl shadow-orange-700 p-8 stat-card-3"
            onClick={() => setSelectedTable("units")}
          >
            <h1 className="font-bold">Units</h1>
            <div className="text-xl text-gray-800 mb-2">{unitsCount}</div>
          </button>
          <div className="flex flex-col justify-center items-center rounded-md shadow-2xl shadow-lime-700 p-8 stat-card-4">
            <h6 className="font-bold">System Status</h6>
          <div className="text-xl text-gray-800 mb-2">Healthy</div>
        </div>
        </div>
      </div>

      {tableToRender}

    </div>
  );
}
export default AdminPage;
