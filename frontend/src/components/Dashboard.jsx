import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <h2>Welcome to your Dashboard!</h2>
      <div className="user-info">
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>User ID:</strong> {user?.id}</p>
      </div>
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;