import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Inspira</h2>
      <ul className="sidebar-menu">
        <li className="sidebar-item active">Dashboard</li>
        <li className="sidebar-item">Tables</li>
        <li className="sidebar-item">Billing</li>
        <li className="sidebar-item">RTL</li>
        <li className="sidebar-heading">Account Pages</li>
        <li className="sidebar-item">Profile</li>
        <li className="sidebar-item">Sign In</li>
        <li className="sidebar-item">Sign Up</li>
      </ul>
    </div>
  );
}

export default Sidebar;
