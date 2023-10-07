import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";
import StudentStats from "../components/StudentStats";
import ListTable from "../components/ListTable";

function Student() {
  const [{ data: student, error, status }, setStudent] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const [ units, setUnits] = useState([]);
  const { id } = useParams();

  const units_columns = [
    {
      field: "id",
      headerName: "Unit Code",
      width: 250,
    },
    { field: "name", 
      headerName: "Unit Name", 
      width: 700 
    },
    { field: "grade", 
    headerName: "Grade", 
    width: 240 
    },
    { field: "attendance", 
    headerName: "Attendance", 
    width: 250 
    },
  ];

  useEffect(() => {
    fetch(`/students/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((student) =>
          setStudent({ data: student, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setStudent({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
    fetch(`/student_units/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((units) =>
        setUnits(units)
        );
      }
    });
  },[id]);


  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  const title = `Hello, ${student.name}`;
  const description =
    "Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Urna condimentum mattis pellentesque id nibh tortor id. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.";
  const image = "/assets/images/image-5.png";
  const units_enrolled = units.length
  const averageAttendance = (student.attendance / 100) * 100;


console.log (student)
  return (
    <div>
      <TopHeader />
      <Hero title={title} description={description} image={image} />
      <StudentStats
        studentName={student.name}
        studentNumber={student.student_number}
        unitsEnrolled={units_enrolled}
        averageAttendance={averageAttendance} // Pass the percentage

      />
      <ListTable
        headers={units_columns}
        data={units.map((unit) => ({
          id: unit.unit_code,
          name: unit.name,
          grade: `${student.grade}%`,
          attendance: `${student.attendance}%`,
        }))}
        title='List of Units'
      />
    </div>

    
  );
}
export default Student;
