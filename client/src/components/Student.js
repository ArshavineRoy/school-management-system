
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

