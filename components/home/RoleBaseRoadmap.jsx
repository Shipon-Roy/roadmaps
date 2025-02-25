"use client";
import { useState } from "react";

const roles = [
  {
    path: "Frontend",
  },
  {
    path: "Backend",
  },
  {
    path: "Full Stack",
  },
];

export default function RoleBaseRoadmap() {
  // State to track the selected role
  const [selectedRole, setSelectedRole] = useState(null);

  // Function to handle role selection
  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  // Render different content based on the selected role
  const renderContent = () => {
    if (!selectedRole) {
      return (
        <div className="text-white">
          Frontend Roadmap: Here is the roadmap for Frontend development...
        </div>
      );
    }
    switch (selectedRole) {
      case "Frontend":
        return (
          <div className="text-white">
            Frontend Roadmap: Here is the roadmap for Frontend development...
          </div>
        );
      case "Backend":
        return (
          <div className="text-white">
            Backend Roadmap: Here is the roadmap for Backend development...
          </div>
        );
      case "Full Stack":
        return (
          <div className="text-white">
            Full Stack Roadmap: Here is the roadmap for Full Stack
            development...
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-20">
      <h1 className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded shadow-md p-2 w-[13rem] bg-gray-700">
        Role Base Roadmaps
      </h1>
      <ul className="text-gray-400 grid grid-flow-col mt-10 justify-center gap-4">
        {roles.map((role, index) => (
          <li
            key={index}
            onClick={() => handleRoleClick(role.path)}
            className="font-semibold text-md border border-sky-400 bg-gray-900 p-3 rounded-md shadow-xl w-[10rem] cursor-pointer"
          >
            {role.path}
          </li>
        ))}
      </ul>
      <div className="mt-10">{renderContent()}</div>
    </div>
  );
}
