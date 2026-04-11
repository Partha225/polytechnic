"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import { 
  Users, 
  Search, 
  Filter, 
  Download, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  CreditCard,
  FileCheck
} from "lucide-react";

export default function AdminDashboard() {
  const { user, role, loading: authLoading, signOut } = useAuth();
  const router = useRouter();
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    if (!authLoading && (!user || role !== 'admin')) {
      router.push('/');
    }
  }, [user, role, authLoading, router]);

  useEffect(() => {
    fetchStudents();
  }, [page, search]);

  const fetchStudents = async () => {
    setLoading(true);
    let query = supabase
      .from('students')
      .select('*, users(name)', { count: 'exact' });

    if (search) {
      query = query.or(`name.ilike.%${search}%,roll_number.ilike.%${search}%`, { foreignTable: 'users' });
      // Note: Supabase OR with joins can be tricky. A simpler way is to search students table if name is duplicated there, 
      // but here we'll try a robust OR query.
    }

    const { data, count, error } = await query
      .range((page - 1) * pageSize, page * pageSize - 1)
      .order('id', { ascending: false });

    if (!error) {
      setStudents(data || []);
      setTotalCount(count || 0);
    }
    setLoading(false);
  };

  if (authLoading || !user || role !== 'admin') return null;

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar />

      {/* Main Workspace */}

      {/* Main Workspace */}
      <main className="flex-grow p-12 overflow-y-auto max-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time Administrative Overview</p>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Student Data Cluster</h2>
          </div>
          
          <div className="flex items-center gap-4">
             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
               <Download className="w-4 h-4" />
               Export CSV
             </button>
             <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
               <Users className="w-4 h-4" />
               New Admissions
             </button>
          </div>
        </header>

        {/* Analytics Row */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {[
            { label: "Total Students", value: totalCount, icon: Users, color: "text-blue-600" },
            { label: "Active This Sem", value: "2,482", icon: TrendingUp, color: "text-emerald-500" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
               <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                 <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
               </div>
               <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${stat.color}`}>
                 <stat.icon className="w-6 h-6" />
               </div>
            </div>
          ))}
        </div>

        {/* Data Grid Area */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Grid Controls */}
          <div className="p-6 border-b border-slate-50 flex justify-between items-center gap-8">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search by Name or Roll Number..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-50 border-none rounded-xl px-12 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="p-3 bg-slate-50 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid Data */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-50">
                  <th className="px-8 py-5">Student Name</th>
                  <th className="px-6 py-5">Roll No.</th>
                  <th className="px-6 py-5">Branch</th>
                  <th className="px-6 py-5">Semester</th>
                  <th className="px-8 py-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <AnimatePresence mode="popLayout">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="py-20 text-center">
                        <div className="flex flex-col items-center gap-4">
                          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Synchronizing Cluster...</p>
                        </div>
                      </td>
                    </tr>
                  ) : students.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-20 text-center">
                         <div className="flex flex-col items-center gap-4 opacity-40">
                            <Search className="w-12 h-12" />
                            <p className="text-sm font-bold uppercase tracking-widest">No matching records found</p>
                         </div>
                      </td>
                    </tr>
                  ) : (
                    students.map((student, i) => (
                      <motion.tr 
                        key={student.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                      >
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs border border-slate-200">
                               {(student.users?.name || student.name || 'S').split(' ').map((n:any) => n[0]).join('')}
                             </div>
                             <div>
                               <p className="text-sm font-bold text-slate-900">{student.users?.name || student.name || 'Unnamed Student'}</p>
                               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">UID: {student.id.slice(0,8)}</p>
                             </div>
                           </div>
                        </td>
                        <td className="px-6 py-6 transition-all group-hover:translate-x-1">
                          <span className="text-xs font-bold text-slate-900">
                             {student.roll_number || student.roll_no || 'Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-6">
                           <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full inline-block text-[10px] font-bold uppercase tracking-widest">
                             {student.department || 'N/A'}
                           </div>
                        </td>
                        <td className="px-6 py-6 font-bold text-xs text-slate-600">
                           {student.semester ? `${student.semester}th Sem` : 'New Batch'}
                        </td>
                        <td className="px-8 py-6 text-right">
                           <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-100">
                             <MoreVertical className="w-5 h-5" />
                           </button>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 bg-slate-50/30 border-t border-slate-50 flex justify-between items-center">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest tabular-nums">
               Showing {Math.min((page - 1) * pageSize + 1, totalCount)} to {Math.min(page * pageSize, totalCount)} of {totalCount} records
             </p>
             <div className="flex gap-2">
                <button 
                  disabled={page === 1}
                  onClick={() => setPage(p => p - 1)}
                  className="p-2 bg-white border border-slate-200 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button 
                  disabled={page * pageSize >= totalCount}
                  onClick={() => setPage(p => p + 1)}
                  className="p-2 bg-white border border-slate-200 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Loader2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-loader-2 animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
