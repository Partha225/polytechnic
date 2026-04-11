"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AdmissionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-body selection:bg-primary-container/30">
      <Navbar />
      
      <main className="lg:pl-64 pt-24 pb-12">
        {/* Hero Section */}
        <header className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-3/5"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] uppercase tracking-widest font-bold mb-4">
                Admission Open 2024-25
              </span>
              <h1 className="text-4xl md:text-7xl font-headline font-bold text-on-surface leading-[1.1] mb-6">
                Shape Your <span className="italic text-primary">Technical</span> Future.
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
                Join Assam's heritage technical institution. We cultivate expertise through hands-on learning and academic rigor since 1961.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-primary/90 transition-all hover:scale-[0.98]">
                  Apply Now
                </button>
                <button className="px-8 py-4 rounded-full text-lg font-semibold text-primary border-2 border-primary/20 hover:bg-primary/5 transition-colors">
                  Download Prospectus
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:w-2/5 relative"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  alt="Students in lab" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxtMFuDYhBORYgvcSeKf7kFpv6AdBU38sym6JG44B3XvVxcxys5L-OVUrbcGi-UXsh_BdmzRroVCvULao3_ICas4ioT0zJs01rEwVwEAtuyaDKrHmuHmZGfYgKk46y8WRE8b3Ecf3XfWnnvdXelN26H0m1Kk4rIGvc19sc0W90bezZBWPg0YyV9jG4O17kHyn3i1xMCTK4CRUesZCUdBnBYr2MUn1hn54hRympHjGvglelZaM7mNrlinPmyat8q6fPePqOVqc-jfM"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">verified</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-tighter text-slate-500 font-bold">AICTE Approved</p>
                    <p className="text-sm font-bold text-slate-900">60+ Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Eligibility Bento Grid */}
        <section className="px-4 md:px-8 py-16 bg-slate-100/50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4 text-slate-900">
              Eligibility Check
              <span className="h-px flex-1 bg-slate-200"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-slate-900 mb-2">Academic Foundation</h3>
                    <p className="text-slate-500">The minimum requirements for diploma entrance.</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-4xl">fact_check</span>
                </div>
                <ul className="space-y-6">
                  {[
                    { title: "10th Standard Pass", desc: "Must have passed the High School Leaving Certificate (HSLC) or equivalent examination from a recognized board." },
                    { title: "Core Subject Proficiency", desc: "Mandatory subjects: Mathematics and Science. Minimum aggregate marks of 40% (General) or 35% (SC/ST) in these subjects." },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[16px] text-green-600 font-bold">done</span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{item.title}</p>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary text-white p-8 rounded-xl flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-headline font-bold mb-4">Age Limit</h3>
                  <p className="opacity-90 leading-relaxed">Candidate should be between 15 and 20 years of age as of 1st July of the admission year. (Relaxation applicable for reserved categories).</p>
                </div>
                <div className="mt-8 relative z-10">
                  <button className="w-full bg-white text-primary py-3 rounded-full font-bold hover:bg-slate-100 transition-all">Check Detailed Criteria</button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[120px] opacity-10 rotate-12">calendar_today</span>
              </div>
            </div>
          </div>
        </section>

        {/* Application Pathway */}
        <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-slate-900 mb-4">Application Pathway</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A streamlined 4-step process to secure your seat at Nowgong Polytechnic.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-slate-200 z-0"></div>
            {[
              { num: "01", title: "Registration", desc: "Create your account on the PAT (Polytechnic Admission Test) portal." },
              { num: "02", title: "Entrance Test", desc: "Appear for the PAT examination conducted by DTE, Assam." },
              { num: "03", title: "Choice Filling", desc: "Select Nowgong Polytechnic as your preferred institution.", active: true },
              { num: "04", title: "Verification", desc: "Submit physical documents for authentication and fee payment." },
            ].map((step) => (
              <div key={step.num} className="relative z-10 group">
                <div className={`w-24 h-24 ${step.active ? "bg-primary text-white shadow-lg" : "bg-slate-100 text-primary"} rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white transition-transform group-hover:scale-110 duration-300`}>
                  <span className="text-2xl font-bold">{step.num}</span>
                </div>
                <div className="text-center">
                  <h4 className="font-headline font-bold text-xl mb-2 text-slate-900">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Document Checklist */}
        <section className="px-4 md:px-8 py-16 bg-slate-100/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-3 text-slate-900">
                <span className="material-symbols-outlined text-primary">description</span>
                Document Checklist
              </h3>
              <div className="space-y-4">
                {[
                  "HSLC Admit Card & Marksheet",
                  "PAT Admit Card & Result",
                  "Permanent Residential Certificate (PRC)",
                  "Caste/Category Certificate (if applicable)",
                  "Recent Passport Size Photos (3 nos)"
                ].map((doc) => (
                  <div key={doc} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium">{doc}</span>
                    <span className="material-symbols-outlined text-slate-400">cloud_upload</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-400 italic font-medium">Note: All documents must be self-attested before uploading in PDF format (max 500kb).</p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-xl border-l-4 border-primary shadow-sm border border-slate-100">
                <h3 className="text-2xl font-headline font-bold mb-4 text-slate-900">Counselling Session</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Selected candidates will be invited for online/offline counselling based on their PAT merit rank. This is where you finalize your branch selection.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Next Session</p>
                    <p className="font-bold text-slate-900">August 14, 2024</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Venue</p>
                    <p className="font-bold text-slate-900">College Seminar Hall</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary text-white p-8 rounded-xl shadow-xl flex-1 flex flex-col justify-center">
                <h4 className="text-xl font-bold mb-2">Need Help with Admission?</h4>
                <p className="opacity-80 mb-6 text-sm">Our helpdesk is available from 10:00 AM to 4:00 PM on all working days.</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-600">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    Call Support
                  </button>
                  <a className="text-sm font-bold underline underline-offset-4 decoration-white/30 hover:decoration-white" href="#">Email Admissions</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-8 py-24 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-slate-900 mb-8">Ready to begin your journey?</h2>
          <p className="text-slate-600 text-lg mb-12">Don't miss the opportunity to be part of the class of 2024. Application window closes soon.</p>
          <div className="inline-flex flex-col items-center gap-6">
            <button className="bg-primary text-white px-12 py-5 rounded-full text-xl font-bold shadow-[0px_20px_40px_rgba(30,58,138,0.2)] hover:scale-105 transition-all">
              Start Your Application Now
            </button>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <span className="material-symbols-outlined text-green-500 font-bold">check_circle</span>
              SECURE ADMISSION PORTAL
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}