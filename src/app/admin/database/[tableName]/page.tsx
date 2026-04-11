"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function TableExplorerPage() {
  const params = useParams();
  const router = useRouter();
  const tableName = params.tableName as string;

  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .limit(100);

      if (error) {
        setError(error.message);
      } else {
        setData(data || []);
        if (data && data.length > 0) {
          setColumns(Object.keys(data[0]));
        }
      }
      setLoading(false);
    }

    if (tableName) {
      fetchData();
    }
  }, [tableName]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-body">
      <Navbar />
      <AdminSidebar />

      <main className="lg:ml-64 min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <Link href="/admin" className="hover:text-primary transition-colors">Admin</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link href="/admin/database" className="hover:text-primary transition-colors">Database</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary">{tableName}</span>
        </nav>

        {/* Header */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-headline text-4xl font-bold text-slate-900 capitalize"
            >
              {tableName} Cluster
            </motion.h2>
            <p className="text-slate-500 mt-1">Showing first 100 records from the {tableName} partition.</p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">refresh</span>
            Refresh Source
          </button>
        </section>

        {/* Table View */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-[400px] gap-4">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hydrating Records...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-[400px] gap-4">
              <span className="material-symbols-outlined text-red-400 text-5xl">error</span>
              <p className="text-sm font-bold text-slate-900">Failed to load resource</p>
              <p className="text-xs text-slate-500">{error}</p>
            </div>
          ) : data.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[400px] gap-4">
              <span className="material-symbols-outlined text-slate-200 text-6xl">database_off</span>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">No Records Found</p>
              <p className="text-xs text-slate-400">The selected table partition is currently empty.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    {columns.map((col) => (
                      <th key={col} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {data.map((row, i) => (
                    <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                      {columns.map((col) => (
                        <td key={col} className="px-6 py-4 text-xs font-medium text-slate-600">
                          {typeof row[col] === 'object' ? JSON.stringify(row[col]) : String(row[col])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
