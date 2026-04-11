"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import { 
  Users, 
  Plus, 
  Mail, 
  Phone, 
  Pencil, 
  Trash2, 
  Save, 
  X,
  Building2,
  ListFilter
} from "lucide-react";

export default function FacultyManagementPage() {
  const { user, role, loading: authLoading } = useAuth();
  const router = useRouter();
  
  const [faculty, setFaculty] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    designation: "",
    department_id: ""
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!authLoading && (!user || role !== 'admin')) {
      router.push('/');
    }
  }, [user, role, authLoading, router]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    setLoading(true);
    
    // Fetch Departments
    const { data: deptData } = await supabase.from('departments').select('*').order('name');
    setDepartments(deptData || []);

    // Fetch Faculty with Department Name
    const { data: facData, error } = await supabase
      .from('faculty')
      .select('*, departments(name)')
      .order('name');

    if (!error) {
      setFaculty(facData || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (editingId) {
      const { error } = await supabase
        .from('faculty')
        .update(formData)
        .eq('id', editingId);
      
      if (!error) {
        setEditingId(null);
        setFormData({ name: "", email: "", contact_number: "", designation: "", department_id: "" });
        fetchInitialData();
      }
    } else {
      const { error } = await supabase
        .from('faculty')
        .insert([{ ...formData, id: crypto.randomUUID() }]); // Using randomUUID since we aren't linking to Auth Users here
      
      if (!error) {
        setFormData({ name: "", email: "", contact_number: "", designation: "", department_id: "" });
        fetchInitialData();
      }
    }
    setSubmitting(false);
  };

  const startEdit = (member: any) => {
    setEditingId(member.id);
    setFormData({
      name: member.name,
      email: member.email || "",
      contact_number: member.contact_number || "",
      designation: member.designation,
      department_id: member.department_id || ""
    });
  };

  const deleteFaculty = async (id: string) => {
    if (!confirm("Are you sure you want to remove this faculty member?")) return;
    const { error } = await supabase.from('faculty').delete().eq('id', id);
    if (!error) fetchInitialData();
  };

  if (authLoading || !user || role !== 'admin') return null;

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar />

      <main className="flex-grow p-12 overflow-y-auto max-h-screen">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Institutional Directory</p>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Faculty Management</h2>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          {/* Form Column */}
          <div className="xl:col-span-1">
             <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-12">
                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                   {editingId ? <Pencil className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-blue-600" />}
                   {editingId ? "Edit Faculty" : "Add Faculty"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Full Name</label>
                     <input 
                       type="text" 
                       required
                       value={formData.name}
                       onChange={(e) => setFormData({...formData, name: e.target.value})}
                       className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all shadow-inner"
                       placeholder="Dr. Rajesh Kumar"
                     />
                   </div>

                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Email Address</label>
                     <input 
                       type="email" 
                       required
                       value={formData.email}
                       onChange={(e) => setFormData({...formData, email: e.target.value})}
                       className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all shadow-inner"
                       placeholder="rajesh.k@polytechnic.ac.in"
                     />
                   </div>

                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Contact Number</label>
                     <input 
                       type="text" 
                       required
                       value={formData.contact_number}
                       onChange={(e) => setFormData({...formData, contact_number: e.target.value})}
                       className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all shadow-inner"
                       placeholder="+91 98765 43210"
                     />
                   </div>

                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Designation</label>
                     <input 
                       type="text" 
                       required
                       value={formData.designation}
                       onChange={(e) => setFormData({...formData, designation: e.target.value})}
                       className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all shadow-inner"
                       placeholder="Senior Lecturer"
                     />
                   </div>

                   <div>
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Department / Branch</label>
                     <select 
                       required
                       value={formData.department_id}
                       onChange={(e) => setFormData({...formData, department_id: e.target.value})}
                       className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all shadow-inner"
                     >
                       <option value="">Select Branch</option>
                       {departments.map(dept => (
                         <option key={dept.id} value={dept.id}>{dept.name}</option>
                       ))}
                     </select>
                   </div>

                   <div className="flex gap-3 pt-4">
                     <button 
                       type="submit" 
                       disabled={submitting}
                       className="flex-grow bg-blue-600 text-white rounded-xl py-4 font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                     >
                       <Save className="w-4 h-4" />
                       {editingId ? "Update Information" : "Save Faculty"}
                     </button>
                     {editingId && (
                       <button 
                         type="button"
                         onClick={() => { setEditingId(null); setFormData({ name: "", email: "", contact_number: "", designation: "", department_id: "" }); }}
                         className="px-4 bg-slate-100 text-slate-400 rounded-xl hover:bg-slate-200 transition-all"
                       >
                         <X className="w-4 h-4" />
                       </button>
                     )}
                   </div>
                </form>
             </div>
          </div>

          {/* List Column */}
          <div className="xl:col-span-3">
             <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                   <h3 className="text-xl font-bold text-slate-900 font-headline">Active Directory</h3>
                   <div className="flex items-center gap-4">
                      <ListFilter className="w-5 h-5 text-slate-300" />
                   </div>
                </div>

                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                     <thead>
                       <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50">
                         <th className="px-8 py-5">Faculty Member</th>
                         <th className="px-6 py-5">Communication</th>
                         <th className="px-6 py-5">Department</th>
                         <th className="px-8 py-5 text-right">Actions</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50">
                        <AnimatePresence mode="popLayout">
                          {loading ? (
                             <tr>
                               <td colSpan={4} className="py-20 text-center text-xs font-bold text-slate-300 uppercase animate-pulse">Synchronizing directory...</td>
                             </tr>
                          ) : faculty.length === 0 ? (
                            <tr>
                              <td colSpan={4} className="py-20 text-center">
                                 <Users className="w-12 h-12 text-slate-100 mx-auto mb-4" />
                                 <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No faculty records found</p>
                              </td>
                            </tr>
                          ) : (
                            faculty.map((member, i) => (
                              <motion.tr 
                                key={member.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                className="group hover:bg-slate-50/50 transition-all"
                              >
                                <td className="px-8 py-6">
                                   <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs uppercase ring-1 ring-blue-100">
                                        {member.name.split(' ').map((n:any)=>n[0]).join('')}
                                      </div>
                                      <div>
                                        <p className="text-sm font-bold text-slate-900">{member.name}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{member.designation}</p>
                                      </div>
                                   </div>
                                </td>
                                <td className="px-6 py-6">
                                   <div className="space-y-1">
                                      <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <Mail className="w-3 h-3 text-slate-300" />
                                        {member.email}
                                      </div>
                                      <div className="flex items-center gap-2 text-xs text-slate-600 font-tabular">
                                        <Phone className="w-3 h-3 text-slate-300" />
                                        {member.contact_number}
                                      </div>
                                   </div>
                                </td>
                                <td className="px-6 py-6">
                                   <div className="flex items-center gap-2">
                                      <Building2 className="w-4 h-4 text-slate-200" />
                                      <span className="text-xs font-bold text-slate-700">{member.departments?.name || 'Unassigned'}</span>
                                   </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                   <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <button 
                                        onClick={() => startEdit(member)}
                                        className="p-2 bg-slate-100 text-slate-500 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                      >
                                        <Pencil className="w-4 h-4" />
                                      </button>
                                      <button 
                                        onClick={() => deleteFaculty(member.id)}
                                        className="p-2 bg-slate-100 text-slate-500 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                   </div>
                                </td>
                              </motion.tr>
                            ))
                          )}
                        </AnimatePresence>
                     </tbody>
                   </table>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
