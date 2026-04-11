"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-body">
      <Navbar />
      
      <AdminSidebar />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        {/* Hero Header Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest font-bold mb-4 inline-block text-[10px]"
            >
              Institutional Overview
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Administrator <br/>Control Center.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-4 flex justify-end"
          >
            <div className="bg-white p-4 rounded-xl flex items-center gap-4 w-full shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">event</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current Date</p>
                <p className="font-bold text-lg text-slate-900">{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Exam Notices */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline text-2xl font-bold text-slate-900">Exam Notices</h3>
                <p className="text-slate-500 text-sm mt-1">Latest announcements from the Controller of Examinations.</p>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl">notification_important</span>
            </div>
            <div className="space-y-4">
              {[
                { date: "OCT 28", title: "Practical Exam Schedule - 5th Sem", desc: "Mechanical & Civil Engineering Departments" },
                { date: "NOV 05", title: "Mid-Semester Evaluation Criteria", desc: "Applicable for all engineering disciplines" },
              ].map((notice) => (
                <div key={notice.date} className="group flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center border border-slate-100">
                      <span className="text-xs font-bold text-primary">{notice.date}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{notice.title}</p>
                      <p className="text-xs text-slate-500">{notice.desc}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward_ios</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Results Quick View */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-primary rounded-xl p-8 text-white relative overflow-hidden shadow-xl"
          >
            <div className="relative z-10">
              <h3 className="font-headline text-2xl font-bold mb-2">Semester Results</h3>
              <p className="opacity-80 text-sm mb-10 uppercase tracking-widest font-bold">Academic Standing</p>
              <div className="flex items-baseline gap-2 mb-8 text-white">
                <span className="text-6xl font-bold tracking-tight">8.42</span>
                <span className="text-xl opacity-70 font-bold uppercase tracking-widest font-sans">CGPA</span>
              </div>
              <button className="w-full bg-white/20 backdrop-blur-md border border-white/30 py-3 rounded-full font-bold text-sm hover:bg-white/30 transition-colors">
                Download Marksheet
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Database Management - NEW */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="md:col-span-4 bg-white p-8 rounded-xl shadow-lg border-l-4 border-indigo-500 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                <span className="material-symbols-outlined text-3xl">database</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Cluster</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-2 text-slate-900">Database Manager</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Oversee all institutional records, audit tables, and monitor data health across the platform.</p>
            <Link 
              href="/admin/database"
              className="text-indigo-600 font-bold text-sm flex items-center gap-2 group/btn"
            >
              Configure Data
              <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">construction</span>
            </Link>
          </motion.div>

          {/* E-Library Access */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 bg-white p-8 rounded-xl shadow-lg border border-slate-100"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">library_books</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-3 text-slate-900">E-Library</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Access 12,000+ digital volumes, IEEE journals, and technical whitepapers.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["IEEE", "MCGRAW HILL", "NPTEL"].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tag}</span>
              ))}
            </div>
            <a className="text-primary font-bold text-sm flex items-center gap-2 group" href="#">
              Browse Catalog
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </motion.div>

          {/* Placements 2024 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-white p-8 rounded-xl shadow-lg border border-slate-100 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative z-10">
              <h3 className="font-headline text-xl font-bold mb-2 text-slate-900">Placements 2024</h3>
              <p className="text-slate-500 text-sm mb-4">Top Recruiters this week</p>
            </div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-slate-50 p-3 rounded-lg flex items-center justify-center border border-slate-100">
                <span className="font-bold text-xs text-slate-400 tracking-tighter uppercase">TATA STEEL</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg flex items-center justify-center border border-slate-100">
                <span className="font-bold text-xs text-slate-400 tracking-tighter uppercase">L&T TECH</span>
              </div>
            </div>
            <div className="mt-6 relative z-10">
              <button className="text-primary font-bold text-sm hover:underline">View All Opportunities</button>
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none grayscale transition-all group-hover:scale-110 group-hover:opacity-10">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4yl9IL40bnau1dKnfKt-5JLQFO5R4wTpbr8SqcnqYwx5nJSSLq5QdoMnUApp3jnGF4J10wPlUilA1vY8OJ24PDWBVWrb6dkZw8wJ7E5me8uMnnThEidY4ghEyTkWa59ZMfTb7l3cE3azv-E8lxslrBUtBAYltRgtVGnsQ3wj1DA0KnaABHBthDt4Y937GjbMr8bLaT_UnPLktr4VArKO0CA5ptllV4KfhvrJgD4LAYJrIiahHGyc9qqKpSgrTfZ2jlZGLeF-o9s0"
                alt="Background"
              />
            </div>
          </motion.div>

          {/* Hostel Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-4 bg-slate-100 p-8 rounded-xl shadow-sm border border-slate-200"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-xl font-bold text-slate-900">Hostel Info</h3>
              <span className="material-symbols-outlined text-slate-400">apartment</span>
            </div>
            <div className="space-y-4">
              {[
                { label: "Allotment", value: "Block B - Room 402" },
                { label: "Warden", value: "Dr. B. Kalita" },
                { label: "Mess Dues", value: "Pending: ₹1,250", error: true },
              ].map((item) => (
                <div key={item.label} className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-sm text-slate-500">{item.label}</span>
                  <span className={`text-sm font-bold ${item.error ? "text-red-600" : "text-slate-900"}`}>{item.value}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full py-3 bg-green-500 text-white text-xs font-bold rounded uppercase tracking-widest hover:bg-green-600 transition-colors shadow-lg shadow-green-200/50">
              Pay Dues
            </button>
          </motion.div>
        </div>

        {/* Institution Highlights */}
        <section className="mt-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="font-headline text-3xl font-bold text-slate-900">Institution Highlights</h3>
              <p className="text-slate-500 mt-1">Curated campus news and updates.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 group text-sm uppercase tracking-widest">
              Read All News
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-900">
            {[
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-staYLP1Ht6XqIC4VEmW1waAmn2DhcS-GsNJUmQhPIi47a60bc_3qwlbCl0rra37Pe7WpkdRMJzuimOu0zDRXdJNCEqNSCJDp2guc22wcNgCXct6ly6LsYN2cQt7PBfD4TajU7oJ2mB1TlCXRYyH9l5aClrTYGFp8dqp_ZyueOWILMhfSg7RROgYnlNmUftr2-qwMAbIODC6dflFVgP1BJ3b45TFTQs3tZUgw-l2ctbWSf_WWZ9U9_YPZu8oOhmjQw7XE-cVzaVM", tag: "Campus Life", title: "Annual Tech Expo '24 Registrations Open" },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNF7_fHYJTedRphx-bo3XCIvK6dOpU_2Uxsqcjxph3DWtYk4HTlv0WQUtRm_DXuszA96i1RZ1D0sFheQgOuU0He3K4UYQVqKv_Gk7ch1lef_BdONfKS0bZyUeoXQoH4s_Z6tndDjvngVy4Ts1SQFbWYvKJiLiz9czGd2vjXeY4cB0GnjfT68NYPJbMcDkNAlulYzzAlzseYIiR-9lNie327KVDs1BWWI3NZ6PLiyseRDuVkxLH4fSFVXW8pcWmXF9JZ7hrWw1ExxA", tag: "Research", title: "Robotics Lab upgraded with latest CNC modules" },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLSwaNLbKUxPr2p2EHZEYbmkz5IZ_hmQYIPaWpX470BtiDvN5amzJHaPGPXgC2S1JNlah83aypLAqIJjulb_nxMF4ECTTDlqL9pNlhYASOVRguhUzoQv-I2LIii683OWxCYyhZOr70xWKjRPy3HmrPi7CiWyomoRKAYAYFeqlUHisvNGpDrY5tJnF1kKBy_A5Sw_OSEDVGGxAQEGfujfrLkBVvuFM7VQ8Q3uM30mldiknvO4lV2lAcjN94xbtTXQLQ8BroE2b9o58", tag: "Infrastructure", title: "New Auditorium wing inauguration next month" },
            ].map((item) => (
              <div key={item.title} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4 aspect-video shadow-md">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{item.tag}</span>
                <h4 className="font-headline text-xl font-bold mt-2 group-hover:text-primary transition-colors text-slate-900">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
