import React from "react";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");

    navigate("/");
  };

  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="h-10 z-20 fixed w-full bg-color-main flex justify-between items-center px-8 text-white">
      <h1 className="text-2xl">
        <span className="uppercase text-light-green">Bamac</span> Student Portal
      </h1>
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default TopHeader;
