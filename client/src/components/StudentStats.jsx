import React from "react";

const Stats = ({ studentName, studentNumber, averageAttendance, unitsEnrolled }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-8 rounded-lg">
        <div className="flex flex-col justify-center align-center rounded-lg shadow p-8 stat-card-1">
          <h6 className="text-gray-600">Student Name</h6>
          <div className="text-xl font-semibold mb-2">{studentName}</div>
        </div>
        <div className="flex flex-col justify-center align-center rounded-lg shadow p-8 stat-card-2">
          <h6 className="text-gray-600">Student Number</h6>
          <div className="text-xl font-semibold mb-2">{studentNumber}</div>
        </div>
        <div className="flex flex-col justify-center align-center rounded-lg shadow p-8 stat-card-3">
          <h6 className="text-gray-600">Average Attendance</h6>
          <div className="text-xl font-semibold mb-2">{averageAttendance.toFixed(0)}%</div>
        </div>
        <div className="flex flex-col justify-center align-center rounded-lg shadow p-8 stat-card-4">
          <h6 className="text-gray-600">Units Enrolled</h6>
          <div className="text-xl font-semibold mb-2">{unitsEnrolled}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
