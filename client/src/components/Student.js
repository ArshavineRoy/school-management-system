
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Student() {
  const [{ data: student, error, status }, setStudent] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

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
console.log (student)
  return (
    <section>
      <h3>Name: {student.name}</h3>
      <h3>Reg Number: {student.student_number}</h3>
      <h3>Grade: {student.grade}%</h3>
      <h3>Attendance: {student.attendance}%</h3>

      <h3>Units:</h3>
      {/* <ul>
        {student.units.map((unit) => (
          <li key={student.id}>
            <Link to={`/units/${unit.id}`}>{unit.name}</Link>
          </li>
        ))}
      </ul> */}

    </section>
    
    
  );
}
export default Student;
