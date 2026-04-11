"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BRANCHES = [
  "Civil Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Computer Engineering",
];

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: dbError } = await supabase.from("students").insert([
      {
        full_name: name,
        email: email,
        roll_number: rollNumber,
        branch: branch,
        semester: parseInt(semester),
      },
    ]);

    setLoading(false);

    if (dbError) {
      setError(dbError.message);
    } else {
      setSuccess(true);
      setName("");
      setEmail("");
      setRollNumber("");
      setBranch("");
      setSemester("1");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-body">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-1" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/20">
              <span className="material-symbols-outlined text-white text-4xl">
                how_to_reg
              </span>
            </div>
            <h1 className="font-headline text-4xl font-bold text-slate-900 mb-2">
              Student Registration
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              Submit your academic details to the institution
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-white/50 relative z-10">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 gap-5 text-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                    <span className="material-symbols-outlined text-white text-4xl">
                      check_circle
                    </span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold text-slate-900">
                    Details Submitted!
                  </h2>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Your information has been securely recorded by the
                    institution. No further action is needed.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-primary font-bold text-sm hover:underline"
                  >
                    Submit another entry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Full Name */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        person
                      </span>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-bold text-slate-900"
                      placeholder="e.g. Trinayan Jyoti Bora"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        alternate_email
                      </span>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-bold text-slate-900"
                      placeholder="name@example.com"
                    />
                  </div>

                  {/* Roll Number */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        badge
                      </span>
                      Roll Number
                    </label>
                    <input
                      type="text"
                      required
                      value={rollNumber}
                      onChange={(e) => setRollNumber(e.target.value)}
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-bold text-slate-900"
                      placeholder="NOP/24/CO/032"
                    />
                  </div>

                  {/* Branch */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        account_tree
                      </span>
                      Branch
                    </label>
                    <select
                      required
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-bold text-slate-900 appearance-none"
                    >
                      <option value="">Select Branch</option>
                      {BRANCHES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Semester */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        stairs
                      </span>
                      Current Semester
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {["1", "2", "3", "4", "5", "6"].map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setSemester(num)}
                          className={`py-3 rounded-xl font-bold transition-all ${
                            semester === num
                              ? "bg-primary text-white shadow-lg shadow-primary/20"
                              : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="md:col-span-2 p-4 bg-red-50 text-red-600 text-xs font-bold rounded-2xl border border-red-100 flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm">
                        error
                      </span>
                      {error}
                    </motion.div>
                  )}

                  <button
                    disabled={loading}
                    className="md:col-span-2 w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/30 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    {loading ? (
                      <span className="material-symbols-outlined animate-spin shadow-none">
                        progress_activity
                      </span>
                    ) : (
                      <>
                        Submit Details{" "}
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 text-center text-slate-400 font-bold uppercase tracking-[0.2em] text-[8px] opacity-50">
            Nowgong Polytechnic • Information Portal
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
