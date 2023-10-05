import React from "react";

const InstructorStats = ({ instructorName, instructorNumber, email, units }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-8 rounded-lg">
        <div className="flex flex-col justify-center align-center shadow p-8 stat-card-1">
          <h6 className="text-gray-600">Name</h6>
          <div className="text-xl font-semibold mb-2">{instructorName}</div>
        </div>
        <div className="flex flex-col justify-center align-center shadow p-8 stat-card-2">
          <h6 className="text-gray-600">Staff Number</h6>
          <div className="text-xl font-semibold mb-2">{instructorNumber}</div>
        </div>
        <div className="flex flex-col justify-center align-center shadow p-8 stat-card-3">
          <h6 className="text-gray-600">Email Address</h6>
          <div className="text-xl font-semibold mb-2">{email}</div>
        </div>
        <div className="flex flex-col justify-center align-center shadow p-8 stat-card-4">
          <h6 className="text-gray-600">Total Units</h6>
          <div className="text-xl font-semibold mb-2">{units}</div>
        </div>
      </div>
    </div>
  );
};

export default InstructorStats;
