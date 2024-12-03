import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl">Volunteer & Donation Portal</h1>
        <ul className="flex space-x-6">
          <li><Link className="text-white" to="/">Home</Link></li>
          <li><Link className="text-white" to="/donate">Donate</Link></li>
          <li><Link className="text-white" to="/opportunities">Opportunities</Link></li>
          <li><Link className="text-white" to="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
export{}
