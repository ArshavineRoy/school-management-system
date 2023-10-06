import React from "react";
import { useHistory } from "react-router-dom";

const TopHeader = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear the authentication token from local storage (assuming it's stored as "token")
    localStorage.removeItem("token");

    // Redirect the user to the login page (you should replace "/login" with your actual login route)
    history.push("/");
  };

  return (
    <div className='h-10 z-20 fixed w-full bg-color-main flex justify-between items-center px-8 text-white'>
      <h1 className='text-2xl'>
        <span className='uppercase text-light-green'>Bamac</span> Student Portal
      </h1>
      <button
        onClick={handleLogout}
        className='text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 cursor-pointer'
      >
        Logout
      </button>
    </div>
  );
};

export default TopHeader;
