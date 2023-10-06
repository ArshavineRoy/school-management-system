import React from 'react';
import { Link } from 'react-router-dom';

const AdminStats = ({ studentCount, instructorCount, unitCount }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-8 rounded-lg">
        <div className="flex flex-col justify-center align-center shadow p-8 stat-card-1">
          <Link to="/students"> Students</Link>
          <div className="text-xl font-semibold mb-2">{studentCount}</div>
        </div>
        <div className="flex flex-col justify-center align-center shadow p-8 stat-card-2">
          <Link to="/instructors"> Instructors</Link>
          <div className="text-xl font-semibold mb-2">{instructorCount}</div>
        </div>
        <div className="flex flex-col justify-center align-center shadow p-8 stat-card-3">
          <Link to="/units">Units</Link>
          <div className="text-xl font-semibold mb-2">{unitCount}</div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminStats;
