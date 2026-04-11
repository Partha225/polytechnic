"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Dashboard() {
  const { user, role, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-body">
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Authenticating Access...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-body">
      <Navbar />
      
      {/* SideNavBar - Premium Architecture */}
      <nav className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col bg-white shadow-xl pt-24 z-40 border-r border-slate-100">
        <div className="p-8">
          <div className="mb-10">
            <h1 className="font-headline text-lg text-primary font-bold">Institution Menu</h1>
            <p className="text-[10px] uppercase tracking-wide text-slate-400 font-bold">Academic Excellence Since 1961</p>
          </div>
          <div className="space-y-2">
            {[
              { icon: "newspaper", label: "News" },
              { icon: "school", label: "Academics", active: true },
              { icon: "diversity_3", label: "Student Life" },
              { icon: "domain", label: "Infrastructure" },
              { icon: "science", label: "Research" },
              { icon: "group", label: "Alumni" },
            ].map((item) => (
              <a 
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  item.active 
                    ? "bg-blue-50 text-primary font-bold" 
                    : "text-slate-500 hover:bg-slate-100"
                }`} 
                href="#"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-auto p-8 border-t border-slate-100 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              {user.email?.[0].toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 truncate w-32">{user.email?.split("@")[0]}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{role || "Student"}</p>
            </div>
          </div>
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full text-red-500 hover:bg-red-50 p-3 rounded-xl transition-all font-bold text-xs uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            Sign Out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        {/* Hero Header Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-widest font-bold mb-4 inline-block text-[10px]"
            >
              Academic Dashboard
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Portal Overview for <br/><span className="italic text-primary">{user.email?.split("@")[0]}</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-4 flex justify-end"
          >
            <div className="bg-white p-4 rounded-xl flex items-center gap-4 w-full shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">calendar_today</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enrollment Status</p>
                <p className="font-bold text-lg text-slate-900">Active Session</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Standing Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-primary rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-1">Academic Result</h3>
                <p className="opacity-70 text-[10px] uppercase font-bold tracking-[0.2em]">Latest Record</p>
              </div>
              <div className="my-8">
                <span className="text-6xl font-bold tracking-tight">8.42</span>
                <span className="text-xl opacity-60 ml-2 font-bold font-sans">CGPA</span>
              </div>
              <button className="w-full bg-white/20 backdrop-blur-md border border-white/20 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/30 transition-all">
                View Marksheets
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Activity Feed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline text-2xl font-bold text-slate-900">Recent Notifications</h3>
              <span className="material-symbols-outlined text-primary">notifications_active</span>
            </div>
            <div className="space-y-4">
              {[
                { type: "Exam", text: "Practical Exam Schedule for Civil Eng. published", time: "2h ago" },
                { type: "Fee", text: "Semester Dues Window closing on April 30th", time: "5h ago" },
                { type: "Library", text: "New IEEE Journals added to E-Library portal", time: "1d ago" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                  <div className="w-1 h-10 bg-primary/20 rounded-full group-hover:bg-primary transition-all" />
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 text-sm">{item.text}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded-full">{item.type}</span>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">{item.time}</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-200 group-hover:text-primary transition-colors">arrow_forward_ios</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Group */}
          {[
            { label: "Attendance", value: "92%", icon: "fact_check", color: "text-green-600", bg: "bg-green-50" },
            { label: "Library Books", value: "03", icon: "menu_book", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Pending Dues", value: "₹1,250", icon: "account_balance_wallet", color: "text-red-500", bg: "bg-red-50" },
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              className="md:col-span-4 bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 flex flex-col justify-between"
            >
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                <h4 className="text-3xl font-bold text-slate-900">{stat.value}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}