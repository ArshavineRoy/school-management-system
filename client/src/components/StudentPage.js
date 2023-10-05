import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import TopHeader from "../components/TopHeader";
import StudentStats from "../components/StudentStats";
import ListTable from "../components/ListTable";

function Student() {
  const [{ data: student,instructor, error, status }, setStudent] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  const columns = [
    {
      field: "id",
      headerName: "Unit Number",
      width: 160,
    },
    {
      field: "unit_name",
      headerName: "Unit Name",
      width: 250,
    },
    {
      field: "grade",
      headerName: "Current Grade",
      width: 160,
    },
    {
      field: "attendance",
      headerName: "Average Attedance",
      width: 170,
    },
    { field: "instructor_name", 
      headerName: "Instructor", 
      width: 180 
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
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  const title = `Hello, ${student.name}`;
  const description =
    "Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Urna condimentum mattis pellentesque id nibh tortor id. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.";
  const image = "/assets/images/image-5.png";
  // const student_number = instructor.students.length

console.log (student)
  return (
    <div>
      <TopHeader />
      <Student title={title} description={description} image={image} />
      <StudentStats
        StudentName={student.name}
        StudentNumber={student.student_number}
        unitsEnrolled={5}
        AverageAttendance={student.average_attendance}
      />
      <ListTable
        headers={columns}
        data={student.units.map((unit) => ({
          id: unit.unit_number,
          unit_name: unit.name,
          grade: `${student.grade}%`,
          attendance: `${student.attendance}%`,
          instructor: instructor.name,
        }))}
        title='Your Units'
      />
    </div>
    // <section>
    //   <h3>Name: {student.name}</h3>
    //   <h3>Reg Number: {student.student_number}</h3>
    //   <h3>Grade: {student.grade}%</h3>
    //   <h3>Attendance: {student.attendance}%</h3>

    //   <h3>Units:</h3>
    //   <ul>
    //     {student.units.map((unit) => (
    //       <li key={student.id}>
    //         <Link to={`/units/${unit.id}`}>{unit.name}</Link>
    //       </li>
    //     ))}
    //   </ul>

    // </section>
    
  );
}
export default Student;
