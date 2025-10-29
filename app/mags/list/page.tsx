"use client";

import { useEffect, useState } from "react";
import { MonitorSmartphone } from "lucide-react"; // أيقونة احترافية

export default function MagsListPage() {
  const [mags, setMags] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🧩 بيانات تجريبية كثيرة باش الجدول يكون عامر
    const fakeResponse = {
      current_page: 1,
      data: [
        {
          id: 1,
          mac_address: "12:00:00:11:22:33",
          macpass: "ABC123",
          user_id: 2,
          package_id: 5,
          country: "fr",
          enable_vpn: true,
          restricted: false,
          max_connections: 2,
          note: "Demo MAG",
          expired_at: "2024-10-10 09:00:00",
          created_at: "2024-09-01 14:12:10",
        },
        {
          id: 2,
          mac_address: "12:00:00:99:22:90",
          macpass: "570135",
          user_id: 1,
          package_id: 3,
          country: "all",
          enable_vpn: false,
          restricted: false,
          max_connections: 1,
          note: "Test Noteà",
          expired_at: "2024-09-04 11:36:23",
          created_at: "2024-09-02 11:36:23",
        },
        {
          id: 3,
          mac_address: "22:10:55:77:88:99",
          macpass: "PASS998",
          user_id: 4,
          package_id: 2,
          country: "us",
          enable_vpn: true,
          restricted: true,
          max_connections: 3,
          note: "Customer blocked",
          expired_at: "2024-12-01 15:22:45",
          created_at: "2024-08-21 09:20:10",
        },
        {
          id: 4,
          mac_address: "00:AA:BB:CC:DD:EE",
          macpass: "FREE456",
          user_id: 3,
          package_id: 1,
          country: "uk",
          enable_vpn: false,
          restricted: false,
          max_connections: 1,
          note: "Trial user",
          expired_at: "2025-01-05 20:00:00",
          created_at: "2024-09-10 10:11:11",
        },
        {
          id: 5,
          mac_address: "88:99:AA:11:22:33",
          macpass: "MYPASS12",
          user_id: 5,
          package_id: 4,
          country: "de",
          enable_vpn: true,
          restricted: false,
          max_connections: 5,
          note: "Premium Client",
          expired_at: "2025-03-15 19:00:00",
          created_at: "2024-09-25 11:59:59",
        },
      ],
    };

    setTimeout(() => {
      setMags(fakeResponse.data);
      setLoading(false);
    }, 800);
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
        Loading MAGs...
      </div>
    );

  return (
    <div className="p-8">
      <div className="flex items-center gap-2 mb-6">
        <MonitorSmartphone className="text-blue-600 w-7 h-7" />
        <h1 className="text-3xl font-semibold text-gray-800">
          List of MAG Devices
        </h1>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-left uppercase text-xs">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">MAC Address</th>
              <th className="px-4 py-3">Password</th>
              <th className="px-4 py-3">User ID</th>
              <th className="px-4 py-3">Package</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Connections</th>
              <th className="px-4 py-3">VPN</th>
              <th className="px-4 py-3">Restricted</th>
              <th className="px-4 py-3">Expires</th>
              <th className="px-4 py-3">Note</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {mags.map((mag) => (
              <tr
                key={mag.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2 font-medium text-gray-900">{mag.id}</td>
                <td className="px-4 py-2 font-mono">{mag.mac_address}</td>
                <td className="px-4 py-2">{mag.macpass}</td>
                <td className="px-4 py-2">{mag.user_id}</td>
                <td className="px-4 py-2">{mag.package_id}</td>
                <td className="px-4 py-2 uppercase">{mag.country}</td>
                <td className="px-4 py-2 text-center">{mag.max_connections}</td>
                <td className="px-4 py-2 text-center">
                  {mag.enable_vpn ? (
                    <span className="text-green-600 font-semibold">Yes</span>
                  ) : (
                    <span className="text-red-500 font-semibold">No</span>
                  )}
                </td>
                <td className="px-4 py-2 text-center">
                  {mag.restricted ? (
                    <span className="text-red-500 font-semibold">Blocked</span>
                  ) : (
                    <span className="text-green-600 font-semibold">Allowed</span>
                  )}
                </td>
                <td className="px-4 py-2 text-red-600 font-medium">
                  {mag.expired_at}
                </td>
                <td className="px-4 py-2">{mag.note}</td>
                <td className="px-4 py-2 text-gray-500">{mag.created_at}</td>
                <td className="px-4 py-2 flex gap-2 justify-center">
                  <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-gray-500 mt-4">
        Showing {mags.length} of {mags.length} MAGs
      </div>
    </div>
  );
}
