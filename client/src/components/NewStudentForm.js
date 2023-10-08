import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function NewStudentForm() {
  const [students, setStudents] = useState([]);

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email_address: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  function handleSubmit(values, { setSubmitting, resetForm }) {
    fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email_address: values.email_address,
        password: values.password,
      }),
    })
      .then((r) => r.json())
      .then((newStudent) => {
        resetForm();
        setStudents([...students, newStudent]);
        setSubmitting(false);
      });
  }

  return (
    <>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/image-2.jpeg')" }}
      >
      <div className="flex flex-col mt-64 md:mt-0 md:flex-row md:w-3/5 bg-white rounded-lg shadow-lg">
        <div className="flex-1 pr-8 bg-color-main p-8 text-white">
          <div className="w-full flex justify-end">
            <img
              src="/assets/images/image-1.jpeg"
              alt="Logo"
              className="w-18 h-24 mb-4"
            />
          </div>
          <h4 className="text-2xl">Welcome to</h4>
          <h1 className="uppercase font-bold text-4xl">Bamac</h1>
          <h2 className="font-semibold text-2xl text-light-green">
            Student Portal
          </h2>
          <p className="my-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros
            in cursus turpis massa tincidunt dui ut. Enim diam vulputate ut
            pharetra sit amet aliquam.
          </p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email_address: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex-1 p-8 text-green-400">
              <h2 className="text-2xl font-semibold mb-4">
                Student Registration Form
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full p-2 rounded-2xl border outline-none focus:outline-none focus:border-green-300"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 text-xs"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email_address"
                  className="w-full p-2 rounded-2xl border outline-none focus:outline-none focus:border-green-300"
                />
                <ErrorMessage
                  name="email_address"
                  component="div"
                  className="text-red-600 text-xs"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full mb-4 p-2 rounded-2xl  border outline-none focus:outline-none focus:border-green-300"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-xs"
                />
              </div>
              <button
                className="w-full bg-green-400 text-white mt-2 mb-4 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300"
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </button>
              <div className="flex justify-end py-3">
                <Link to={"/"} className="text-blue-600 text-base">
                  Already a student? Login.
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    </>
  );
}

export default NewStudentForm;
