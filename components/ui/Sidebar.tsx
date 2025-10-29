"use client";

import { useState } from "react";
import Link from "next/link";
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
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const menuItems = [
    { label: "Roles and Permissions", icon: Shield },
    { label: "Transactions", icon: CreditCard },
    { label: "Users", icon: Users },
    { label: "Restrictions", icon: FileText },
    { label: "Bouquets", icon: Box },
    { label: "Packages", icon: Folder },
    { label: "Paid Trial Price", icon: Gift },
    { label: "Templates", icon: FileText },

    // M3Us
    {
      label: "M3Us",
      icon: Server,
      submenu: [
        { label: "List all M3Us", href: "/m3us/list" },
        { label: "Retrieve a M3U", href: "/m3us/retrieve" },
        { label: "Create a M3U", href: "/m3us/create" },
        { label: "Create Batch of M3Us", href: "/m3us/create-batch" },
        { label: "Update a M3U", href: "/m3us/update" },
        { label: "List a M3U Syncs", href: "/m3us/syncs" },
        { label: "List a M3U Bouquets", href: "/m3us/bouquets" },
        { label: "Extend a M3U", href: "/m3us/extend" },
        { label: "Change Max Connections", href: "/m3us/max-connections" },
        { label: "Refund Preview", href: "/m3us/refund-preview" },
        { label: "Refund a M3U", href: "/m3us/refund" },
        { label: "Change Type", href: "/m3us/change-type" },
        { label: "Retrieve Restrictions", href: "/m3us/restrictions" },
        { label: "Retrieve Activity", href: "/m3us/activity" },
        { label: "Retrieve DNS", href: "/m3us/dns" },
        { label: "Regenerate DNS", href: "/m3us/dns-regenerate" },
        { label: "Enable VPN", href: "/m3us/enable-vpn" },
        { label: "Generate Password", href: "/m3us/generate-password" },
        { label: "Change Owner", href: "/m3us/change-owner" },
        { label: "Delete a M3U", href: "/m3us/delete" },
        { label: "Mass Delete a M3U", href: "/m3us/mass-delete" },
        { label: "List M3U Logs", href: "/m3us/logs" },
      ],
    },

    // MAGs
    {
      label: "MAGs",
      icon: Tv2,
      submenu: [
        { label: "List all MAGs", href: "/mags/list" },
        { label: "Retrieve a MAG", href: "/mags/retrieve" },
        { label: "Create a MAG", href: "/mags/create" },
        { label: "Create Batch of MAGs", href: "/mags/create-batch" },
        { label: "Update a MAG", href: "/mags/update" },
        { label: "List a MAG Syncs", href: "/mags/syncs" },
        { label: "List a MAG Bouquets", href: "/mags/bouquets" },
        { label: "Extend a MAG", href: "/mags/extend" },
        { label: "Change Max Connections", href: "/mags/max-connections" },
        { label: "Refund Preview", href: "/mags/refund-preview" },
        { label: "Refund a MAG", href: "/mags/refund" },
        { label: "Change Type of MAG", href: "/mags/change-type" },
        { label: "Retrieve Restrictions", href: "/mags/restrictions" },
        { label: "Retrieve Activities", href: "/mags/activities" },
        { label: "Retrieve DNS", href: "/mags/dns" },
        { label: "Regenerate DNS", href: "/mags/regenerate-dns" },
        { label: "Enable VPN", href: "/mags/enable-vpn" },
        { label: "Delete a MAG", href: "/mags/delete" },
        { label: "Mass Delete a MAG", href: "/mags/mass-delete" },
        { label: "Change Owner", href: "/mags/change-owner" },
        { label: "List MAG Logs", href: "/mags/logs" },
      ],
    },

    // Enigmas
    {
      label: "Enigmas",
      icon: Key,
      submenu: [
        { label: "List all Enigmas", href: "/enigmas/list" },
        { label: "Create a Enigma", href: "/enigmas/create" },
        { label: "Create Batch of Enigmas", href: "/enigmas/create-batch" },
        { label: "Update a Enigma", href: "/enigmas/update" },
        { label: "Retrieve a Enigma", href: "/enigmas/retrieve" },
        { label: "List a Enigma Syncs", href: "/enigmas/syncs" },
        { label: "List a Enigma Bouquets", href: "/enigmas/bouquets" },
        { label: "Extend a Enigma", href: "/enigmas/extend" },
        { label: "Change Max Connections", href: "/enigmas/max-connections" },
        { label: "Refund Preview", href: "/enigmas/refund-preview" },
        { label: "Refund a Enigma", href: "/enigmas/refund" },
        { label: "Change Type of Enigma", href: "/enigmas/change-type" },
        { label: "Retrieve Restrictions", href: "/enigmas/restrictions" },
        { label: "Retrieve Activities", href: "/enigmas/activities" },
        { label: "Delete a Enigma", href: "/enigmas/delete" },
        { label: "Mass Delete a Enigma", href: "/enigmas/mass-delete" },
        { label: "Change Owner", href: "/enigmas/change-owner" },
        { label: "List Enigma Logs", href: "/enigmas/logs" },
      ],
    },

    // Activecodes
    {
      label: "Activecodes",
      icon: Key,
      submenu: [
        { label: "List all Activecodes", href: "/activecodes/list" },
        { label: "Retrieve a Activecode", href: "/activecodes/retrieve" },
        { label: "Create a Activecode", href: "/activecodes/create" },
        { label: "Create Batch of Activecodes", href: "/activecodes/create-batch" },
        { label: "Activate a Activecode", href: "/activecodes/activate" },
        { label: "Update a Activecode", href: "/activecodes/update" },
        { label: "List a Activecode Syncs", href: "/activecodes/syncs" },
        { label: "List a Activecode Bouquets", href: "/activecodes/bouquets" },
        { label: "Extend a Activecode", href: "/activecodes/extend" },
        { label: "Change Max Connections", href: "/activecodes/max-connections" },
        { label: "Refund Preview", href: "/activecodes/refund-preview" },
        { label: "Refund a Activecode", href: "/activecodes/refund" },
        { label: "Retrieve Restrictions", href: "/activecodes/restrictions" },
        { label: "Retrieve Activities", href: "/activecodes/activities" },
        { label: "Delete a Activecode", href: "/activecodes/delete" },
        { label: "Mass Delete a Activecode", href: "/activecodes/mass-delete" },
        { label: "Change Owner", href: "/activecodes/change-owner" },
        { label: "List Activecode Logs", href: "/activecodes/logs" },
      ],
    },

    // Request Credits
    {
      label: "Request Credits",
      icon: CreditCard,
      submenu: [
        { label: "List all Request Credits", href: "/request-credits/list" },
        { label: "Create a Request Credit", href: "/request-credits/create" },
        { label: "Retrieve a Request Credit", href: "/request-credits/retrieve" },
        { label: "Accept a Request Credit", href: "/request-credits/accept" },
        { label: "Cancel a Request Credit", href: "/request-credits/cancel" },
        { label: "Reject a Request Credit", href: "/request-credits/reject" },
        { label: "Take a Request Credit", href: "/request-credits/take" },
      ],
    },

    // Vouchers
    {
      label: "Vouchers",
      icon: Gift,
      submenu: [
        { label: "List all Vouchers", href: "/vouchers/list" },
        { label: "Create a Voucher", href: "/vouchers/create" },
        { label: "Retrieve a Voucher", href: "/vouchers/retrieve" },
        { label: "Update a Voucher", href: "/vouchers/update" },
        { label: "List Voucher Packages", href: "/vouchers/packages" },
        { label: "Claim a Voucher", href: "/vouchers/claim" },
      ],
    },

    // Voucher Templates
    {
      label: "Voucher Templates",
      icon: FileText,
      submenu: [
        { label: "List all Voucher Templates", href: "/voucher-templates/list" },
        { label: "Create a Voucher Template", href: "/voucher-templates/create" },
        { label: "Retrieve a Voucher Template", href: "/voucher-templates/retrieve" },
        { label: "List Voucher Template Packages", href: "/voucher-templates/packages" },
        { label: "Update a Voucher Template", href: "/voucher-templates/update" },
      ],
    },

    // Reward Programs
    {
      label: "Reward Programs",
      icon: Activity,
      submenu: [
        { label: "List all Reward Programs", href: "/reward-programs/list" },
        { label: "Create a Reward Program", href: "/reward-programs/create" },
        { label: "Retrieve a Reward Program", href: "/reward-programs/retrieve" },
        { label: "Update a Reward Program", href: "/reward-programs/update" },
      ],
    },

    // Notifications
    {
      label: "Notifications",
      icon: Bell,
      submenu: [
        { label: "List all Notifications", href: "/notifications/list" },
        { label: "Retrieve a Notification", href: "/notifications/retrieve" },
        { label: "Mark as Read", href: "/notifications/mark-read" },
      ],
    },

    // Request Refunds
    {
      label: "Request Refunds",
      icon: CreditCard,
      submenu: [
        { label: "List all Request Refunds", href: "/request-refunds/list" },
        { label: "Create a Request Refund", href: "/request-refunds/create" },
        { label: "Retrieve a Request Refund", href: "/request-refunds/retrieve" },
        { label: "Accept a Request Refund", href: "/request-refunds/accept" },
        { label: "Reject a Request Refund", href: "/request-refunds/reject" },
        { label: "Cancel a Request Refund", href: "/request-refunds/cancel" },
      ],
    },

    // Activecode Devices
    {
      label: "Activecode Devices",
      icon: Database,
      submenu: [
        { label: "List all Activecode Devices", href: "/activecode-devices/list" },
        { label: "Create a Activecode Device", href: "/activecode-devices/create" },
        { label: "Update a Activecode Device", href: "/activecode-devices/update" },
        { label: "Retrieve a Activecode Device", href: "/activecode-devices/retrieve" },
      ],
    },

    // Tickets
    {
      label: "Tickets",
      icon: Ticket,
      submenu: [
        { label: "List all Tickets", href: "/tickets/list" },
        { label: "Retrieve a Ticket", href: "/tickets/retrieve" },
        { label: "Create a Support Ticket", href: "/tickets/create" },
        { label: "Reply to Ticket", href: "/tickets/reply" },
        { label: "Assign Ticket Agent", href: "/tickets/assign-agent" },
        { label: "Change Status", href: "/tickets/status" },
      ],
    },

    // Streams
    {
      label: "Streams",
      icon: Tv2,
      submenu: [
        { label: "List all Streams", href: "/streams/list" },
      ],
    },

    // Stream Categories
    {
      label: "Stream Categories",
      icon: Folder,
      submenu: [
        { label: "List all Stream Categories", href: "/stream-categories/list" },
      ],
    },

    // Series
    {
      label: "Series",
      icon: ListChecks,
      submenu: [
        { label: "List all Series", href: "/series/list" },
      ],
    },

    // Report Channels
    {
      label: "Report Channels",
      icon: BarChart3,
      submenu: [
        { label: "List all Report Channels", href: "/report-channels/list" },
        { label: "Create a Report Channel", href: "/report-channels/create" },
        { label: "Retrieve a Report Channel", href: "/report-channels/retrieve" },
        { label: "Update a Report Channel", href: "/report-channels/update" },
        { label: "Fix a Report Channel", href: "/report-channels/fix" },
        { label: "Delete a Report Channel", href: "/report-channels/delete" },
      ],
    },

    // Report Vods
    {
      label: "Report Vods",
      icon: BarChart3,
      submenu: [
        { label: "List all Report Vods", href: "/report-vods/list" },
        { label: "Create a Report Vod", href: "/report-vods/create" },
        { label: "Retrieve a Report Vod", href: "/report-vods/retrieve" },
        { label: "Update a Report Vod", href: "/report-vods/update" },
        { label: "Fix a Report Vod", href: "/report-vods/fix" },
        { label: "Delete a Report Vod", href: "/report-vods/delete" },
      ],
    },

    // Report Series
    {
      label: "Report Series",
      icon: BarChart3,
      submenu: [
        { label: "List all Report Series", href: "/report-series/list" },
        { label: "Create a Report Series", href: "/report-series/create" },
        { label: "Retrieve a Report Series", href: "/report-series/retrieve" },
        { label: "Update a Report Series", href: "/report-series/update" },
        { label: "Fix a Report Series", href: "/report-series/fix" },
        { label: "Delete a Report Series", href: "/report-series/delete" },
      ],
    },

    // Faq Categories
    {
      label: "Faq Categories",
      icon: HelpCircle,
      submenu: [
        { label: "List all Faq Categories", href: "/faq-categories/list" },
        { label: "Create a Faq Category", href: "/faq-categories/create" },
        { label: "Update a Faq Category", href: "/faq-categories/update" },
        { label: "Delete a Faq Category", href: "/faq-categories/delete" },
      ],
    },

    // Faqs
    {
      label: "Faqs",
      icon: HelpCircle,
      submenu: [
        { label: "List all Faqs", href: "/faqs/list" },
        { label: "Create a Faq", href: "/faqs/create" },
        { label: "Retrieve a Faq", href: "/faqs/retrieve" },
        { label: "Update a Faq", href: "/faqs/update" },
        { label: "Delete a Faq", href: "/faqs/delete" },
      ],
    },

    // Announcements
    {
      label: "Announcements",
      icon: Bell,
      submenu: [
        { label: "List all Announcements", href: "/announcements/list" },
        { label: "Create a Announcement", href: "/announcements/create" },
        { label: "Retrieve a Announcement", href: "/announcements/retrieve" },
        { label: "Update a Announcement", href: "/announcements/update" },
        { label: "Publish a Announcement", href: "/announcements/publish" },
        { label: "Unpublish a Announcement", href: "/announcements/unpublish" },
        { label: "Notify Users", href: "/announcements/notify" },
      ],
    },

    // Quick Actions
    {
      label: "Quick Actions",
      icon: Activity,
      submenu: [
        { label: "List My Quick Actions", href: "/quick-actions/list" },
        { label: "Create a Quick Action", href: "/quick-actions/create" },
        { label: "Retrieve a Quick Action", href: "/quick-actions/retrieve" },
        { label: "Update a Quick Action", href: "/quick-actions/update" },
        { label: "Delete a Quick Action", href: "/quick-actions/delete" },
      ],
    },
    // DNS Domains
    {
      label: "Dns Domains",
      icon: Settings,
      submenu: [
        { label: "List all Dns Domains", href: "/dns-domains/list" },
        { label: "Create a Dns Domain", href: "/dns-domains/create" },
        { label: "Retrieve a Dns Domain", href: "/dns-domains/retrieve" },
        { label: "Set a Dns Domain as Default", href: "/dns-domains/set-default" },
        { label: "Delete a Dns Domain", href: "/dns-domains/delete" },
      ],
    },

    // Logs
    {
      label: "Logs",
      icon: FileText,
      submenu: [
        { label: "List Logs", href: "/logs/list" },
      ],
    },
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
            const isOpen = openMenus.includes(item.label);
            const hasSubmenu = item.submenu && item.submenu.length > 0;

            return (
              <li key={index}>
                <button
                  onClick={() => (hasSubmenu ? toggleMenu(item.label) : null)}
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
                  {hasSubmenu && (
                    <ChevronRight
                      size={15}
                      className={`opacity-50 transform transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>

                {hasSubmenu && isOpen && (
                  <ul className="ml-8 mt-1 space-y-1 border-l border-gray-700 pl-3">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={sub.href}
                          className={`block px-2 py-1.5 rounded-md text-sm ${
                            darkMode
                              ? "hover:bg-gray-800 hover:text-white"
                              : "hover:bg-gray-100 hover:text-gray-900"
                          } transition`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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

    // DNS Domains
  
