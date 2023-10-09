import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";
import InstructorStats from "../components/InstructorStats";
import ListTable from "../components/ListTable";
import { useAuthorization } from "../components/Authorize";


function InstructorPage() {
  useAuthorization([2]);
  const navigate = useNavigate();
  const { id } = useParams();
  const userRole = localStorage.getItem("userRole");
  const userId = localStorage.getItem("userId");
  const [selectedUnit, setSelectedUnit] = useState(null);


  const [{ data: instructor, error, status }, setInstructor] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const [units, setUnits] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`https://school-pwo2.onrender.com/instructors/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((instructor) =>
          setInstructor({ data: instructor, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setInstructor({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
    fetch(`https://school-pwo2.onrender.com/instructor_units/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((units) => setUnits(units));
      }
    });
  }, [id]);

  const onViewStudents = (unitName, students) => {
    setSelectedUnit(unitName);
    setStudents(students);
  };
  
  const tableTitle = selectedUnit
  ? `${selectedUnit} Students`
  : "List of Units";


  if (parseInt(userId) !== parseInt(id) || parseInt(userRole) !== 2) {

    navigate(`/instructors/${userId}`);

    return null; // prevents rendering this component
  }

  const units_columns = [
    {
      field: "id",
      headerName: "Unit Code",
      width: 300,
    },
    {
      field: "name",
      headerName: "Unit Name",
      width: 840,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <button
            className="bg-red-500 rounded px-3 py-2 text-white cursor-pointer"
            // onClick={() => handleGetStudents(params.row.students)}
            onClick={() => onViewStudents(params.row.name, params.row.students)}
          >
            View Students
          </button>
        );
      },
    },
  ];

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
      field: "grade",
      headerName: "Current Grade",
      width: 200,
    },
    {
      field: "attendance",
      headerName: "Average Attendance",
      width: 190,
    },
  ];

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  const title = `Hello, ${instructor.name}`;
  const description =
    "Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Urna condimentum mattis pellentesque id nibh tortor id. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.";
  const image = "/assets/images/image-5.png";
  const units_number = units.length;

  return (
    <div>
      <TopHeader />
      <Hero title={title} description={description} image={image} />
      <InstructorStats
        instructorName={instructor.name}
        instructorNumber={instructor.staff_number}
        units={units_number}
        email={instructor.email_address}
      />
      <ListTable
        headers={units_columns}
        data={units.map((unit) => ({
          id: unit.unit_code,
          name: unit.name,
          students : unit.students,
        }))}
        title="List of Units"
      />
      {students.length > 0 && (
        <ListTable
          headers={student_columns}
          data={students.map((student) => ({
            id: student.student_number,
            student_name: student.name,
            email_address: student.email_address,
            grade: `${student.grade}%`,
            attendance: `${student.attendance}%`,
          }))}
          title={tableTitle}
        />
      )}
    </div>
  );
}

export default InstructorPage;
