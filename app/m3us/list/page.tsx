"use client";
import React from "react";
import { ListChecks, RefreshCw, Filter, Upload } from "lucide-react";

export default function AllM3U() {
  const apiData = {
    current_page: 1,
    total: 89,
    data: [
      {
        id: 5,
        username: "TestUpdatePrime",
        package_id: 4,
        enable_vpn: false,
        max_connections: 1,
        country: "ALL",
        customer_has_paid: false,
        restricted: false,
        expired_at: "2024-11-10 12:27:37",
        created_at: "2024-08-28 15:15:26",
      },
      {
        id: 6,
        username: "Iuoidoisjq",
        package_id: 22,
        enable_vpn: false,
        max_connections: 1,
        country: "ALL",
        customer_has_paid: false,
        restricted: false,
        expired_at: "2027-04-17 17:07:22",
        created_at: "2024-08-28 15:16:24",
      },
      {
        id: 20,
        username: "newUser1",
        package_id: 3,
        enable_vpn: true,
        max_connections: 2,
        country: "ALL",
        customer_has_paid: true,
        restricted: false,
        expired_at: "2025-12-31 12:00:00",
        created_at: "2025-10-29 10:00:00",
      },
      {
        id: 21,
        username: "newUser2",
        package_id: 5,
        enable_vpn: false,
        max_connections: 1,
        country: "MA",
        customer_has_paid: false,
        restricted: false,
        expired_at: "2026-01-01 00:00:00",
        created_at: "2025-10-29 10:00:00",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f1117] p-8">
      <div className="mx-auto w-full max-w-6xl bg-white dark:bg-[#1a1c23] rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <ListChecks className="text-blue-600 w-6 h-6" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              M3U Accounts
            </h1>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-[#22242d] text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-200 dark:hover:bg-[#2e3039] transition">
              <Filter size={15} /> Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-[#22242d] text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-200 dark:hover:bg-[#2e3039] transition">
              <Upload size={15} /> Import
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition shadow-sm">
              <RefreshCw size={15} /> Refresh
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search by username or country..."
            className="w-full bg-gray-100 dark:bg-[#22242d] text-gray-700 dark:text-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
            />
          </svg>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs uppercase tracking-wider">
              <tr>
                {[
                  "ID",
                  "Username",
                  "Package",
                  "VPN",
                  "Conn.",
                  "Country",
                  "Paid",
                  "Status",
                  "Expires",
                  "Created",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left font-semibold whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {apiData.data.map((item, index) => {
                const isExpired =
                  item.expired_at && new Date(item.expired_at) < new Date();
                const status = isExpired ? "Expired" : "Active";

                return (
                  <tr
                    key={item.id}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-[#1a1c23]"
                        : "bg-gray-50 dark:bg-[#1e2028]"
                    } hover:bg-blue-50 dark:hover:bg-[#2a2c34] transition`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">
                      {item.id}
                    </td>
                    <td className="px-4 py-3">{item.username}</td>
                    <td className="px-4 py-3 text-center">{item.package_id}</td>
                    <td className="px-4 py-3 text-center">
                      {item.enable_vpn ? (
                        <span className="text-green-600 font-medium">Yes</span>
                      ) : (
                        <span className="text-red-500 font-medium">No</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {item.max_connections}
                    </td>
                    <td className="px-4 py-3 uppercase text-center">
                      {item.country}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {item.customer_has_paid ? (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                          Paid
                        </span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                          Unpaid
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          status === "Active"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                            : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-red-500 font-medium text-center">
                      {item.expired_at}
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-center">
                      {item.created_at}
                    </td>

                    <td className="px-4 py-3 flex justify-center gap-2">
                      <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs">
                        Delete
                      </button>
                      <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs">
                        VPN
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 text-gray-600 dark:text-gray-400 text-sm">
          <p>
            Showing <strong>{apiData.data.length}</strong> of{" "}
            <strong>{apiData.total}</strong> entries
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-md transition"
          >
            Next Page →
          </a>
        </div>
      </div>
    </div>
  );
}
