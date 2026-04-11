"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [announcements, setAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const { data } = await supabase
        .from("announcements")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);
      if (data) setAnnouncements(data);
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-surface font-body text-on-surface">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[700px] md:h-[870px] w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Campus Main Building" 
              className="w-full h-full object-cover" 
              src="/hero-bg.jpg"
            />
            <div className="absolute inset-0 bg-slate-900/40"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 max-w-4xl"
          >
            <div className="mb-8 flex justify-center">
              <div className="p-4 bg-white rounded-full shadow-lg ring-4 ring-primary/5">
                <img src="/logo.png" alt="Nowgong Polytechnic Logo" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <h1 className="font-headline text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight shadow-sm">
              Empowering Technical Excellence Since 1961
            </h1>
            <p className="font-body text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nurturing the next generation of engineers and innovators with a legacy of academic rigor and industry-aligned training.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://dte.assam.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform">
                Admissions
              </Link>
              <Link href="/departments" className="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-md hover:bg-slate-50 transition-colors">
                Departments
              </Link>
              <Link href="https://dte-assam.samarth.edu.in/index.php/site/login" target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-green-600 hover:scale-105 transition-all">
                Student Portal
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Principal's Message Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/3 relative"
              >
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-100">
                  <img 
                    src="/dean.jpg" 
                    alt="Principal Dr. Dilip Kr. Talukdar" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/40 p-8 text-white">
                    <p className="text-xl font-bold">Dr. Dilip Kr. Talukdar</p>
                    <p className="text-sm font-medium text-slate-300">Principal, Nowgong Polytechnic</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-2/3"
              >
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-12 h-[2px] bg-primary"></div>
                   <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Institutional Leadership</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight font-headline">Message from the <span className="text-primary italic">Principal</span></h2>
                
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p className="italic font-light">
                    "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits". Technical education is the academic and vocational preparation of students for jobs involving applied science and modern technology. 
                  </p>
                  <p>
                    Nowgong Polytechnic is providing a Diploma in Technical Education. Our goal is to provide Technical education to the student so that they can become technically skilled workforce for making things work efficiently and effectively by imparting ethical values and becoming a part of nation builders as it is said that <span className="text-slate-900 font-bold">"Engineers are Nation Builders"</span>.
                  </p>
                  <p>
                    The management, faculty, and other staff are trying hard to provide an ethical environment for the all-round development of the students. I thank them for their continuous effort to fulfill our goal. I heartily welcome the students who are aspiring to Technical Education to Nowgong Polytechnic and excel in life.
                  </p>
                </div>

                <div className="mt-10 pt-10 border-t border-slate-100">
                    <p className="text-2xl font-bold text-slate-900">Dr. Dilip Kr. Talukdar</p>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Principal, Nowgong Polytechnic</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Access Panel */}
        <section className="px-4 md:px-8 -mt-20 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Notices & Updates", icon: "campaign", desc: "Stay informed with the latest campus announcements and news.", link: "#" },
               { title: "Admissions", icon: "edit_note", desc: "Enrollment guides, eligibility criteria, and online application portal.", link: "https://dte.assam.gov.in/" },
              { title: "Departments", icon: "account_tree", desc: "Explore our specialized engineering and technical branches.", link: "/departments" },
              { title: "Student Login", icon: "login", desc: "Access your dashboard, grades, and academic resources.", link: "https://dte-assam.samarth.edu.in/index.php/site/login" },
            ].map((card) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={card.title} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-primary"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors text-2xl">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2 text-slate-900">{card.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{card.desc}</p>
                <Link className="text-primary font-semibold flex items-center gap-2 text-sm group-hover:translate-x-2 transition-transform" href={card.link}>
                  View Details <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Announcements Feed */}
        <section className="py-24 px-4 md:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-headline text-4xl font-bold text-slate-900 mb-6">Real-time Announcements</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">Keep track of important deadlines, exam schedules, and administrative notifications as they happen.</p>
            </div>
            <div className="lg:col-span-2 space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              {announcements.length > 0 ? (
                announcements.map((ann) => (
                  <div key={ann.id} className="bg-white p-6 rounded-xl flex items-start gap-4 hover:bg-slate-100 transition-colors shadow-sm">
                    <div className="flex flex-col items-center justify-center min-w-[60px] p-2 bg-primary/5 rounded-lg text-primary">
                      <span className="text-xl font-bold">{new Date(ann.created_at).getDate()}</span>
                      <span className="text-[10px] uppercase font-bold">{new Date(ann.created_at).toLocaleDateString("en-US", { month: "short" })}</span>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-[10px] uppercase font-bold rounded mb-2">{ann.category || "General"}</span>
                      <h4 className="font-bold text-lg text-slate-900">{ann.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{ann.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="animate-pulse space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-white rounded-xl shadow-sm"></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Institute Highlights */}
        <section className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "1961", label: "Established Year" },
                { val: "AICTE", label: "Approved Institution" },
                { val: "4+", label: "Core Branches" },
                { val: "15k+", label: "Success Stories" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="font-headline text-5xl font-bold text-primary mb-2">{stat.val}</p>
                  <p className="uppercase tracking-widest text-xs font-bold text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Life Preview */}
        <section className="py-24 px-4 md:px-8 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline text-4xl font-bold text-slate-900">Campus Life Preview</h2>
                <p className="text-slate-600 mt-2">Beyond the classroom — fostering culture, sports, and creativity.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Visit Gallery <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                <img alt="Student Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqS-wn-hQn9RZZTNIzH1AKVKM0jdziCzM_xLPD034AD1kVwW7Nipa3CsHxGIJSpC2npJIcltYLF0mX0ctKN8tM8y-7fmJZWqUixpFaAlGg-UK_Kmzij5XkUifPPYeIZSY6uv1a7cSxPHlofaRpQ-CbENv-rPbty2s1PX3E33XcGtA2iUug_BSF1DzLXnJiEk19oFstxqO2JCN0AUBrqhz56fViYabFj1XWoOnVa6DWBRh94P7CsXYnR-5st2vLtB7TV-qKAiaUUYE"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-headline text-2xl font-bold">Knowledge Hub</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <img alt="Engineering Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGzvlvAXmNNQZLUsUV47OGsKnZ02ea3Q-6O7dzEO0fMG5x6yH63dD4a3kAQ9ioYp_Yw3QP_GkW82sL_NaDEcZnIKLLI-EVV3jMhD1yT8vmBk98ZU6NIEkgJEkyRuNbG-WyXYWGN6pFr4itAqvbR8nRpHwLBdZmOwVcO0B4hwuW5TfHtgC-uVxARbWJHXxSCmkm_P2pcvmnatQPN8BH0gspK9qfj53L84f2D-rz2eluwBeYtCv5_gE0PMG9XEZnqtgKQIJiz4meAV0"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white font-bold">Tech Innovation</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <img alt="Classroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_g5ye4zQ2DZJhPeN4_yqQtjxPhWGJT-yKNNOizWgImcWA9mxAfIU4WO1jejuoQIzLfTyTD-nFjyqzwXK0zF5kbOWYxKn2hqOrcLsUwUnsyJCxHepLdfIWO9vtbWBEQ02GOEO1tMpTybJRrdlEVlgKnmefHGgd_a56aIKXpS8Jyq5w_NjCh7-qKRuOHL-ePMua5pALo98ZwqU3b4D8C7Bu34NH1tOyOHBigwvmfLGEEdT7OoiF6u4H8-i9hj96VvyDImMTjP__S3c"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white font-bold">Academic Core</span>
                </div>
              </div>
              <div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
                <img alt="Campus Green" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoUFVeTgKQZW4Wm0Ix7NSJwnd-nOn-bZRXrP0ncBqzRKF8YaA4NH_5TkMLE_I5AfYmWCjz7kAw1grY5JPlhIpLmtFOq17oDH8OnG-fwOnZSXsBZEjbZzdUiVGNgZBelaHuJvJ7p8ANNx6VwBGrbm0BELyy6zxzUjp538sZvvYS0aSk09VmfzPxO2EezHMBzltFvgjI4P8bRSrRRcf5rh6Rhw90EbnGmSS32njE6pMqML5YCSl77BWKCONW6_-IIiUvBxaHRN5siCA"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-headline text-xl font-bold">Student Life</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
