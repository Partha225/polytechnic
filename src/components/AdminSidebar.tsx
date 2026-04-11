"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { motion } from "framer-motion";

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user, role } = useAuth();

  const menuItems = [
    { icon: "dashboard", label: "Dashboard", href: "/admin" },
    { icon: "database", label: "Databases", href: "/admin/database" },
    { icon: "newspaper", label: "Notices", href: "/admin/notices" },
    { icon: "school", label: "Academic Info", href: "#" },
    { icon: "diversity_3", label: "Student Records", href: "#" },
    { icon: "domain", label: "Infrastructure", href: "#" },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col bg-white shadow-xl pt-24 z-40 border-r border-slate-100">
      <div className="p-8">
        <div className="mb-10">
          <h1 className="font-headline text-lg text-primary font-bold">Admin Portal</h1>
          <p className="text-[10px] uppercase tracking-wide text-slate-400 font-bold tracking-tighter">Academic Excellence Since 1961</p>
        </div>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                pathname === item.href 
                  ? "bg-blue-50 text-primary font-bold" 
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-auto p-8 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
             <span className="material-symbols-outlined">person</span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">{user?.email?.split('@')[0] || "Administrator"}</p>
            <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{role || "Staff"} Access</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
