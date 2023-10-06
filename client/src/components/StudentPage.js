import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      width: 200,
    },
    { field: "name", 
      headerName: "Unit Name", 
      width: 700 
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

console.log (student)
  return (
    <div>
      <TopHeader />
      <Hero title={title} description={description} image={image} />
      <StudentStats
        StudentName={student.name}
        StudentNumber={student.student_number}
        unitsEnrolled={units_enrolled}
        AverageAttendance={student.average_attendance}
      />
      <ListTable
        headers={units_columns}
        data={units.map((unit) => ({
          id: unit.unit_code,
          name: unit.name,

        }))}
        title='List of Units'
      />
    </div>

    
  );
}
export default Student;