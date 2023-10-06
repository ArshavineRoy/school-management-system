import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      
      <div className="card">
        <h3>View Units</h3>
        <Link to="/view-units">View Units</Link>
      </div>

      <div className="card">
        <h3>View Students</h3>
        <Link to="/view-students">View Students</Link>
      </div>

      <div className="card">
        <h3>View Instructors</h3>
        <Link to="/view-instructors">View Instructors</Link>
      </div>

      {/* Navigation Links */}
     
    </div>
  );
};

export default AdminPanel;
