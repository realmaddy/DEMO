"use client";
import React from "react";

export default function Home() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
    { id: 3, name: "Michael Brown", email: "mike@example.com", status: "Active" },
    { id: 4, name: "Sara Wilson", email: "sara@example.com", status: "Pending" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#0f1117] transition-colors duration-300">
      <div className="w-full max-w-5xl p-6 bg-white dark:bg-[#1a1c23] rounded-lg shadow-lg transition-colors duration-300">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
          User Management Table
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-[#22242d]"
                      : "bg-white dark:bg-[#1c1e26]"
                  } hover:bg-gray-100 dark:hover:bg-[#2b2d36] transition`}
                >
                  <td className="px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
                    {user.id}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
                    {user.name}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
                    {user.email}
                  </td>
                  <td
                    className={`px-6 py-3 text-sm font-medium ${
                      user.status === "Active"
                        ? "text-green-500"
                        : user.status === "Inactive"
                        ? "text-red-500"
                        : "text-yellow-400"
                    }`}
                  >
                    {user.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
