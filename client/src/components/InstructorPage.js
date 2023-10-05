import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import Hero from "../components/Hero";
import TopHeader from "../components/TopHeader";
import InstructorStats from "../components/InstructorStats";
import ListTable from "../components/ListTable";

function Instructor() {
  const [{ data: instructor, error, status }, setInstructor] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  const columns = [
    {
      field: "id",
      headerName: "Student No",
      width: 160,
    },
    { field: "student_name", 
      headerName: "Student Name", 
      width: 180 
    },
    ,
    {
      field: "email_address",
      headerName: "Email Address",
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
    }
  ];


  useEffect(() => {
    fetch(`/instructors/${id}`).then((r) => {
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
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;


  const title = `Hello, ${instructor.name}`;
  const description =
    "Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Urna condimentum mattis pellentesque id nibh tortor id. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.";
  const image = "/assets/images/image-5.png";
  const student_number = instructor.students.length

  return (

    <div>
      <TopHeader />
      <Hero title={title} description={description} image={image} />
      <InstructorStats
        instructorName={instructor.name}
        instructorNumber={instructor.staff_number}
        units={5}
        studentsCoaching={student_number}
      />
      <ListTable
        headers={columns}
        data={instructor.students.map((student) => ({
          id: student.student_number,
          student_name: student.name,
          email_address: student.email_address,
          grade: `${student.grade}%`,
          attendance: `${student.attendance}%`,
        }))}
        title='List of Students'
      />
    </div>
  );
}

export default Instructor;