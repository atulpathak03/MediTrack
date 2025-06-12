// src/pages/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetch("http://localhost:3000/api/v1/users/logout", {
      method: "POST",
      credentials: "include",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
