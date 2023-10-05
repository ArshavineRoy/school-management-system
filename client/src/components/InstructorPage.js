import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Instructor() {
  const [{ data: instructor, error, status }, setInstructor] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

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

  return (
    <section>
      <h3>Name: {instructor.name}</h3>
      <h3>Staff Number: {instructor.staff_number}</h3>
      <h3>Email : {instructor.email_address}%</h3>
    
      <h3>students:</h3>
      <ul>
        {instructor.students.map((student) => (
          <li key={instructor.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
            {/* <Link to={`/students/${student.id}`}>{student.student_number}</Link>
            <Link to={`/students/${student.id}`}>{student.email_address}</Link>                
            <Link to={`/students/${student.id}`}>{student.grade}</Link>
            <Link to={`/students/${student.id}`}>{student.attendance}</Link> */}
            </li>
        ))}
      </ul>

    </section>
  );
}

export default Instructor;