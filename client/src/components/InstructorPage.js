import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Instructor() {
  const [instructor, setInstructor] = useState({
    name: "",
    number: "",
    students: {
      teaching: "",
    },
    courses: {
      teaching: "",
    },
    units: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/instructors/${id}`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        accept: 'application/json',
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setInstructor({
          name: data.name,
          number: data.number,
          students: {
            teaching: data.students.teaching,
          },
          courses: {
            teaching: data.courses.teaching,
          },
          units: data.units,
        });
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="App">
      <div>
        <h4>Instructor Name</h4>
        <div>{instructor.name}</div>
      </div>

      <div>
        <h4>Instructor Number</h4>
        <div>{instructor.number}</div>
      </div>

      <div>
        <h5>Students Teaching</h5>
        <div>{instructor.students.teaching}</div>
      </div>

      <div>
        <h4>Courses Teaching</h4>
        <div>{instructor.courses.teaching}</div>
      </div>

      <div>
        <h3>Units Taught:</h3>
        <ul>
          {instructor.units.map((unit) => (
            <li key={unit.id}>
              <Link to={`/units/${unit.id}`}>{unit.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Instructor;
