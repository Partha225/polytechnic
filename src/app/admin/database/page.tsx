"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface TableMetadata {
  name: string;
  count: number | null;
  icon: string;
  description: string;
  color: string;
}

const INSTITUTIONAL_TABLES = [
  { name: "users", icon: "group", description: "System users and authentication roles", color: "bg-blue-500" },
  { name: "students", icon: "school", description: "Enrolled student records and academic data", color: "bg-indigo-500" },
  { name: "announcements", icon: "campaign", description: "Campus wide news and official notices", color: "bg-orange-500" },
  { name: "departments", icon: "account_balance", description: "Academic departments and HOD information", color: "bg-emerald-500" },
  { name: "faculty", icon: "badge", description: "Teaching and non-teaching staff directory", color: "bg-rose-500" },
  { name: "documents", icon: "description", description: "Institutional resources, syllabus, and forms", color: "bg-amber-500" },
  { name: "payments", icon: "payments", description: "Fee transactions and institutional revenue", color: "bg-cyan-500" },
];

export default function DatabaseManagerPage() {
  const [tables, setTables] = useState<TableMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetadata() {
      const metadata = await Promise.all(
        INSTITUTIONAL_TABLES.map(async (t) => {
          const { count, error } = await supabase
            .from(t.name)
            .select("*", { count: "exact", head: true });
          
          return {
            ...t,
            count: error ? null : count,
          };
        })
      );
      setTables(metadata);
      setLoading(false);
    }

    fetchMetadata();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-body">
      <Navbar />
      <AdminSidebar />

      <main className="lg:ml-64 min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <section>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest font-bold mb-4 inline-block text-[10px]"
          >
            Data Governance
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl font-bold text-slate-900"
          >
            Database Management
          </motion.h2>
          <p className="text-slate-500 mt-2 max-w-2xl">
            Monitor and explore institutional data clusters. Ensure data integrity and audit accessibility across all departments.
          </p>
        </section>

        {/* Table Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tables.map((table, index) => (
            <motion.div
              key={table.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="premium-card p-6 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 ${table.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  <span className="material-symbols-outlined text-2xl">{table.icon}</span>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Records</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {loading ? "..." : table.count?.toLocaleString() ?? "N/A"}
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 capitalize mb-2">{table.name}</h3>
              <p className="text-sm text-slate-500 flex-grow mb-6 leading-relaxed">
                {table.description}
              </p>

              <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                <Link 
                  href={`/admin/database/${table.name}`}
                  className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Explore Data
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  <span className="text-[8px] font-bold text-slate-300 uppercase">Live</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
