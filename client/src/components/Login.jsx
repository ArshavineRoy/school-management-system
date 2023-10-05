import React, {useState}from "react";
import { Link, useHistory } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("instructor"); // Default role
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the token and role-specific ID in localStorage
        localStorage.setItem("token", data.token);

         // Determine the key to use based on the role
        const idKey = role === "student" ? "studentId" : role==="instructor" ? "instructorId" :"adminId";
        
        // Store the ID using the appropriate key
        localStorage.setItem(idKey, data.id);

        // Redirect to the role-specific dashboard
        history.push(role === "student" ? `/students/${data.id}` : role ===  "instructor" ? `/instructors/${data.id}` : `/admins/${data.id}`);
      } else {
        // Handle login failure by displaying appropriate error messages
        const errorMessage = await response.text();

        if (errorMessage.includes("email")) {
          setError("Invalid email address. Please check your email.");
        } else if (errorMessage.includes("password")) {
          setError("Invalid password. Please check your password.");
        } else {
          setError("Login failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className='bg-cover bg-center h-screen flex items-center justify-center'
      style={{ backgroundImage: "url('/assets/images/image-2.jpeg')" }}
    >
      <div className='flex flex-col mt-64 md:mt-0 md:flex-row md:w-3/5 bg-white rounded-lg shadow-lg'>
        <div className='flex-1 pr-8 bg-color-main p-8 text-white'>
          <div className='w-full flex justify-end'>
            <img
              src='/assets/images/image-1.jpeg'
              alt='Logo'
              className='w-18 h-24 mb-4'
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <h4 className='text-2xl'>Welcome to</h4>
          <h1 className='uppercase font-bold text-4xl'>Bamac</h1>
          <h2 className='font-semibold text-2xl text-light-green'>
            Student Portal
          </h2>
          <p className='my-2 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in
            cursus turpis massa tincidunt dui ut. Enim diam vulputate ut
            pharetra sit amet aliquam.
          </p>
        </div>
        <div className='flex-1 p-8 text-green-400'>
          <h2 className='text-2xl font-semibold mb-4'>Login</h2>
          <div className='mb-4'>
            <label
              htmlFor='role'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Select Role
            </label>
            <select
              id='role'
              name='role'
              className='w-full p-2 border rounded-2xl outline-none focus:outline-none focus:border-green-300 text-green-400'
              nChange={(e) => setRole(e.target.value)}
              >
              <option value='instructor'>Instructor</option>
              <option value='student'>Student</option>
              <option value='admin'>Admin</option>
            </select>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full p-2 rounded-2xl border outline-none focus:outline-none focus:border-green-300'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full p-2 rounded-2xl  border outline-none focus:outline-none focus:border-green-300'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button  
          onClick={handleLogin}className='w-full bg-green-400 text-white mt-4 mb-2 py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300'>
            Login
          </button>
          <div className='flex justify-end py-3'>
            <Link to={"/students/register"} className='text-blue-600 text-base'>New Student? Register here.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;