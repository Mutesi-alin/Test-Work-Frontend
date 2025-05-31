'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Home, BarChart2, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const SidebarItem = ({
    icon,
    label,
    path,
  }: {
    icon: React.ReactNode;
    label: string;
    path: string;
  }) => {
    const isActive = pathname === path;

    return (
      <div
        onClick={() => router.push(path)}
        className={`flex items-center gap-3 py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 ${
          isActive
            ? 'bg-white text-red-600 font-semibold shadow'
            : 'text-white hover:bg-white hover:text-red-600'
        }`}
      >
        {icon}
        <span>{label}</span>
      </div>
    );
  };

  const handleLogout = () => {
    // your logout logic here
    router.push('/login');
  };

  return (
    <div className="w-[240px] h-screen bg-red-600 text-white flex flex-col justify-between p-5">
      {/* Logo */}
      <div>
       

        {/* Navigation */}
        <nav className="space-y-2">
          <SidebarItem icon={<Home size={20} />} label="Home" path="/dashboard" />
          <SidebarItem icon={<BarChart2 size={20} />} label="System Performance" path="/systemperformance" />
          <SidebarItem icon={<Settings size={20} />} label="Settings" path="/notifications" />
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 py-3 px-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-100 transition"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
