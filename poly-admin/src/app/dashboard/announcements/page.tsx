"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import { 
  Megaphone, 
  Send, 
  Trash2, 
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function AnnouncementsPage() {
  const { user, role, loading: authLoading } = useAuth();
  const router = useRouter();
  
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // New Announcement Form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("General");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (!authLoading && (!user || role !== 'admin')) {
      router.push('/');
    }
  }, [user, role, authLoading, router]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) {
      setAnnouncements(data || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    setSubmitting(true);
    const { error } = await supabase
      .from('announcements')
      .insert([
        { title, description, category, created_at: new Date().toISOString() }
      ]);

    if (error) {
      setMessage({ text: "Failed to post announcement. Please try again.", type: "error" });
    } else {
      setMessage({ text: "Announcement posted successfully!", type: "success" });
      setTitle("");
      setDescription("");
      fetchAnnouncements();
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
    setSubmitting(false);
  };

  const deleteAnnouncement = async (id: string) => {
    const { error } = await supabase
      .from('announcements')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchAnnouncements();
    }
  };

  if (authLoading || !user || role !== 'admin') return null;

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar />

      <main className="flex-grow p-12 overflow-y-auto max-h-screen">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Notice Management System</p>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Post New Announcement</h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Post Form */}
          <div className="lg:col-span-1">
             <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block font-sans">Announcement Title</label>
                     <input 
                       type="text" 
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                       placeholder="e.g. End Semester Exam Schedule"
                       className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all font-sans"
                       required
                     />
                   </div>

                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block font-sans">Notice Category</label>
                     <select 
                       value={category}
                       onChange={(e) => setCategory(e.target.value)}
                       className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all font-sans"
                     >
                       <option>General</option>
                       <option>Admissions</option>
                       <option>Examinations</option>
                       <option>Placement</option>
                       <option>Events</option>
                     </select>
                   </div>

                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block font-sans">Full Description</label>
                     <textarea 
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                       placeholder="Provide detailed information here..."
                       rows={6}
                       className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all font-sans"
                       required
                     />
                   </div>

                   <AnimatePresence>
                     {message.text && (
                       <motion.div 
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         exit={{ opacity: 0, height: 0 }}
                         className={`flex items-center gap-3 p-4 rounded-2xl text-xs font-bold uppercase tracking-widest ${
                           message.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                         }`}
                       >
                         {message.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                         {message.text}
                       </motion.div>
                     )}
                   </AnimatePresence>

                   <button 
                     disabled={submitting}
                     className="w-full bg-blue-600 text-white rounded-2xl py-4 font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                   >
                     {submitting ? "Processing..." : (
                       <>
                         <Send className="w-4 h-4" />
                         Post Announcement
                       </>
                     )}
                   </button>
                </form>
             </div>
          </div>

          {/* Feed Preview */}
          <div className="lg:col-span-2">
             <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-900 font-headline">Broadcast History</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{announcements.length} Published Notices</span>
             </div>

             <div className="space-y-6">
                {loading ? (
                   <div className="py-20 text-center animate-pulse">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Updating Broadcast...</p>
                   </div>
                ) : announcements.length === 0 ? (
                  <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-200 text-center">
                      <Megaphone className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No active announcements</p>
                  </div>
                ) : (
                  announcements.map((ann, i) => (
                    <motion.div 
                      key={ann.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6 group hover:shadow-xl hover:shadow-slate-200/40 transition-all"
                    >
                      <div className="hidden md:flex flex-col items-center justify-center min-w-[70px] bg-slate-50 rounded-2xl text-slate-400">
                         <span className="text-xl font-bold text-slate-900">{new Date(ann.created_at).getDate()}</span>
                         <span className="text-[10px] uppercase font-bold">{new Date(ann.created_at).toLocaleDateString('en-US', { month: 'short' })}</span>
                      </div>
                      <div className="flex-grow">
                         <div className="flex justify-between items-start mb-2">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest">{ann.category}</span>
                            <button 
                              onClick={() => deleteAnnouncement(ann.id)}
                              className="p-2 text-slate-200 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                            >
                               <Trash2 className="w-4 h-4" />
                            </button>
                         </div>
                         <h4 className="text-lg font-bold text-slate-900 mb-2">{ann.title}</h4>
                         <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{ann.description}</p>
                         <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                            <Clock className="w-3 h-3" />
                            {new Date(ann.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                         </div>
                      </div>
                    </motion.div>
                  ))
                )}
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
