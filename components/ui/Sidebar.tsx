"use client";

import { useTheme } from "@/app/providers/ThemeProvider";
import {
  Users,
  FileText,
  Settings,
  Folder,
  Activity,
  Bell,
  Key,
  CreditCard,
  Gift,
  Shield,
  BarChart3,
  HelpCircle,
  ChevronRight,
  Moon,
  Sun,
  Search,
  Server,
  Ticket,
  Database,
  ListChecks,
  Tv2,
  Box,
} from "lucide-react";

export default function Sidebar() {
  const { darkMode, toggleTheme } = useTheme();

  const menuItems = [
    { label: "Roles and Permissions", icon: Shield },
    { label: "Transactions", icon: CreditCard },
    { label: "Users", icon: Users },
    { label: "Restrictions", icon: FileText },
    { label: "Bouquets", icon: Box },
    { label: "Packages", icon: Folder },
    { label: "Paid Trial Price", icon: Gift },
    { label: "Templates", icon: FileText },
    { label: "M3Us", icon: Server },
    { label: "MAGs", icon: Tv2 },
    { label: "Enigmas", icon: Key },
    { label: "Activecodes", icon: Key },
    { label: "Request Credits", icon: CreditCard },
    { label: "Vouchers", icon: Gift },
    { label: "Voucher Templates", icon: FileText },
    { label: "Reward Programs", icon: Activity },
    { label: "Notifications", icon: Bell },
    { label: "Request Refunds", icon: CreditCard },
    { label: "Activecode Devices", icon: Database },
    { label: "Tickets", icon: Ticket },
    { label: "Streams", icon: Tv2 },
    { label: "Stream Categories", icon: Folder },
    { label: "Series", icon: ListChecks },
    { label: "Report Channels", icon: BarChart3 },
    { label: "Report Vod", icon: BarChart3 },
    { label: "Report Series", icon: BarChart3 },
    { label: "Faq Categories", icon: HelpCircle },
    { label: "Faqs", icon: HelpCircle },
    { label: "Announcements", icon: Bell },
    { label: "Quick Actions", icon: Activity },
    { label: "Dns Domains", icon: Settings },
    { label: "Logs", icon: FileText },
  ];

  return (
    <aside
      className={`${
        darkMode ? "bg-[#0f1117] text-gray-200" : "bg-white text-gray-800"
      } w-64 flex-shrink-0 h-screen flex flex-col border-r ${
        darkMode ? "border-gray-800" : "border-gray-200"
      } transition-all duration-300`}
    >
      {/* Header */}
      <div className="p-4 flex items-center gap-2 border-b border-gray-700">
        <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg shadow-lg" />
        <h1 className="font-semibold text-lg tracking-tight">
          Admin Dashboard
        </h1>
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <div
          className={`flex items-center gap-2 rounded-md px-3 py-2 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          } transition`}
        >
          <Search size={16} className="opacity-70" />
          <input
            type="text"
            placeholder="Search..."
            className={`w-full bg-transparent outline-none text-sm ${
              darkMode ? "placeholder-gray-400" : "placeholder-gray-600"
            }`}
          />
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <ul className="space-y-[2px]">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <button
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium ${
                    darkMode
                      ? "hover:bg-gray-800 hover:text-white"
                      : "hover:bg-gray-100 hover:text-gray-900"
                  } transition-colors duration-150`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} className="opacity-80" />
                    {item.label}
                  </span>
                  <ChevronRight size={15} className="opacity-50" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer */}
      <div
        className={`p-4 border-t ${
          darkMode ? "border-gray-800" : "border-gray-200"
        } flex items-center justify-between`}
      >
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Admin</span>
            <span className="text-xs text-gray-400">@NovaCode</span>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition"
        >
          {darkMode ? (
            <>
              <Sun size={14} /> Light
            </>
          ) : (
            <>
              <Moon size={14} /> Dark
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
