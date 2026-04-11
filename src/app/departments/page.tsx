"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Civil Engineering",
      slug: "civil",
      icon: "architecture",
      est: "1961",
      labs: ["Structural Eng.", "Soil Mechanics", "Surveying"],
    },
    {
      name: "Mechanical Engineering",
      slug: "mechanical",
      icon: "settings_suggest",
      est: "1961",
      labs: ["Thermal Eng.", "Workshop", "Fluid Mech."],
      active: true,
    },
    {
      name: "Electrical Engineering",
      slug: "electrical",
      icon: "electric_bolt",
      est: "1961",
      labs: ["Elec. Machines", "Control Systems", "Digital Elec."],
    },
    {
      name: "Computer Engineering",
      slug: "computer",
      icon: "terminal",
      est: "2008",
      labs: ["AI & Data Sci.", "Networking", "Software Dev"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-body">
      <Navbar />
      
      <main className="lg:ml-64 pt-32 px-4 md:px-8 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Academic Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-6xl text-slate-900 font-bold leading-tight mb-6"
          >
            Our Academic <br/><span className="italic text-blue-500">Departments</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl leading-relaxed"
          >
            Rooted in six decades of pedagogical heritage, Nowgong Polytechnic offers industry-aligned engineering programs designed to foster technical mastery and innovative thinking.
          </motion.p>
        </section>

        {/* Departments Grid */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {departments.map((dept, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              key={dept.name}
              className={`bg-white rounded-xl shadow-lg p-8 border-b-4 transition-all duration-300 group ${
                dept.active ? "border-primary ring-2 ring-primary/10" : "border-blue-100 hover:border-primary"
              }`}
            >
              <div className="mb-6 flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">
                  {dept.icon}
                </span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Est. {dept.est}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-slate-900 mb-4">{dept.name}</h3>
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Core Labs</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {dept.labs.map((lab) => (
                    <li key={lab} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${dept.active ? "bg-primary" : "bg-blue-200"}`}></span>
                      {lab}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href={`/departments/${dept.slug}`}
                className="mt-8 text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore Department <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>
          ))}
        </section>

        {/* Expanded View: Mechanical Engineering */}
        <section className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            {/* Left Hero Image/Info */}
            <div className="lg:w-1/3 bg-slate-900 relative min-h-[400px]">
              <img 
                alt="Mechanical Engineering Lab" 
                className="absolute inset-0 w-full h-full object-cover opacity-60" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnShYvZ-iWCVXHg0qzYwc26iF6VGNanX7YYhWwr9cORBpELC99B3x9iKesUFbgDlX_02rDYVySryFKlRgz5UNGn1c4wbBfl4rd7SzmOwMaT2ree0wRHBaA82s--mX3suykkbSlbODHugG9Ne5pzcwqeOcnwqn8PJL1T0DeNiQrO8nuXvwn0F24Z9ZoB6WluRWCtZNtctJhhSzhJQGaSAHYJPC7hQCt6nGpc971fEaORonubelX7cGTXI2zPkYbC7MlWv2mj4cMyW8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent p-10 flex flex-col justify-end">
                <h2 className="font-headline text-3xl text-white font-bold mb-2">Mechanical Engineering</h2>
                <p className="text-blue-200 text-sm italic">Forging the future of industrial design and robotics.</p>
              </div>
            </div>
            
            {/* Right Tabs & Content */}
            <div className="lg:w-2/3 p-10">
              <div className="flex flex-wrap gap-8 border-b border-slate-100 mb-10 overflow-x-auto pb-1">
                <button className="text-slate-400 font-bold px-1 pb-4 text-xs uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap">Faculty</button>
                <button className="text-slate-400 font-bold px-1 pb-4 text-xs uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap">Advanced Labs</button>
                <button className="text-primary border-b-2 border-primary font-bold px-1 pb-4 text-xs uppercase tracking-widest whitespace-nowrap">Placement</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-900">
                <div>
                  <h4 className="font-headline text-xl font-bold text-slate-900 mb-2">Placement Success</h4>
                  <div className="w-12 h-1 bg-green-500 mb-4 rounded-full"></div>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    Our mechanical engineering graduates are highly sought after by global leaders in manufacturing, automotive, and heavy industries.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["ITC Ltd.", "Apollo Tyres", "TATA Motors", "Mahindra"].map((co) => (
                      <span key={co} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-600 hover:border-green-500 hover:text-green-600 transition-colors cursor-default">
                        {co}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                  <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-4">Academic Structure</h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-bold text-slate-900">3 Years</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Total Credits</span>
                      <span className="font-bold text-slate-900">120 Units</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Annual Intake</span>
                      <span className="font-bold text-slate-900">60 Seats</span>
                    </li>
                  </ul>
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