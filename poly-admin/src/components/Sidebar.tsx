"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { 
  LayoutDashboard, 
  GraduationCap, 
  Megaphone, 
  LogOut, 
  ShieldCheck,
  CreditCard,
  FileCheck,
  Users
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Megaphone, label: "Notices", href: "/dashboard/announcements" },
    { icon: GraduationCap, label: "Students", href: "/dashboard" },
    { icon: Users, label: "Faculty", href: "/dashboard/faculty" },
  ];

  return (
    <aside className="w-72 bg-slate-900 text-slate-400 p-8 flex flex-col border-r border-slate-800 shrink-0">
      <div className="flex items-center gap-3 text-white mb-12">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">Poly-Admin</h1>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Control Center</p>
        </div>
      </div>

      <nav className="space-y-2 flex-grow">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                isActive ? 'bg-white/10 text-white font-bold' : 'hover:bg-white/5 hover:text-slate-300'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-8 border-t border-slate-800 space-y-4">
        <div className="flex items-center gap-3 px-2">
           <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-[10px] font-bold">AD</div>
           <div className="overflow-hidden">
             <p className="text-xs text-white font-bold truncate">{user?.email?.split('@')[0]}</p>
             <p className="text-[10px] uppercase font-bold text-slate-600">Administrator</p>
           </div>
        </div>
        <button onClick={signOut} className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-all text-xs font-bold uppercase tracking-widest">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
