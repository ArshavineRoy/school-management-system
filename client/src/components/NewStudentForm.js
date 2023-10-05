import { useState } from "react";
import { Link } from "react-router-dom";


function NewStudentForm() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email_address, setEmail_address] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email_address: email_address,
        password: password,
      }),
    })
      .then((r) => r.json())
      .then((newStudent) => {
        setName("");
        setEmail_address("");
        setPassword("");

        setStudents([...students, newStudent]);
      });
  }

  return (
  
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
        <form className="flex-1 p-8 text-green-400" onSubmit={handleSubmit}>
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
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-2xl border outline-none focus:outline-none focus:border-green-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email_address"
              value={email_address}
              onChange={(e) => setEmail_address(e.target.value)}
              className="w-full p-2 rounded-2xl border outline-none focus:outline-none focus:border-green-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 p-2 rounded-2xl  border outline-none focus:outline-none focus:border-green-300"
            />
          </div>
          <button
            className="w-full bg-green-400 text-white mt-2 mb-4 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300"
            type="submit"
          >
            Register
          </button>
          <div className='flex justify-end py-3'>
            <Link to={"/"} className='text-blue-600 text-base'>Already a student? Login.</Link>
          </div>
        </form>
      </div>
    </div>

  );
}

export default NewStudentForm;