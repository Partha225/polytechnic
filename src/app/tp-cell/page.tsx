"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const placements = [
  {
    branch: "Civil Engineering",
    icon: "architecture",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "bg-amber-500",
    companies: [
      "Dalmia Bharat Cement",
      "NERIWALM (North Eastern Institute of Water and Land Management, Tezpur)",
      "Enercon India Pvt Ltd. (Ahmedabad)",
      "Kalpataru Power Transmission Ltd. (KPTL)",
    ],
  },
  {
    branch: "Computer Engineering",
    icon: "computer",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-500",
    companies: [
      "HCL Infosys Hyderabad",
      "Reliance Jio Infocom",
      "Kaziranga University",
      "Euthissa Care Technology Bhubaneswar",
    ],
  },
  {
    branch: "Electrical Engineering",
    icon: "bolt",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    iconBg: "bg-yellow-500",
    companies: [
      "Marico India Ltd. Guwahati",
      "Cummins India Pvt. Ltd. (Pune)",
      "ITC Foods Pvt. Ltd.",
      "ESSEL Propak",
      "Reliance Jio Infocom",
      "Sun Pharma Pvt. Ltd. (Azara)",
      "Euthissa Care Technology Bhubaneswar",
      "Anand and Anand Group",
      "Garuda Power",
      "Kalpataru Power Transmission Ltd. (KPTL)",
      "Cavin Kare Ltd.",
      "Exide Battery",
    ],
  },
  {
    branch: "Mechanical Engineering",
    icon: "settings",
    color: "bg-slate-100 text-slate-700 border-slate-200",
    iconBg: "bg-slate-600",
    companies: [
      "Marico India Ltd. Guwahati",
      "Cummins India Pvt. Ltd. (Pune)",
      "ITC Foods Pvt. Ltd.",
      "ESSEL Propak",
      "Mikuni India Pvt. Ltd. (Alwar, Rajasthan)",
      "Sun Pharma Pvt. Ltd. (Azara)",
      "Euthissa Care Technology Bhubaneswar",
      "Mendo India Pvt. Ltd. (Chennai)",
      "Bajaj Allianz Insurance",
      "Apollo Tyres",
      "Anand and Anand Group",
      "Garuda Power",
      "TIPL (Tractors India Pvt. Ltd., Kolkata)",
      "Burckhardt Compression India Ltd",
      "Exide Battery",
    ],
  },
];

const activities = [
  { icon: "groups", text: "Campus pooling for final year students." },
  { icon: "factory", text: "2 compulsory internships for every student to make them industry-friendly." },
  { icon: "school", text: "Special coaching for higher studies (B.Tech & post-diploma) with extra Mathematics support." },
  { icon: "record_voice_over", text: "Counselling classes accommodated in the final year routine." },
  { icon: "handshake", text: "MoU signed with 8+ Industrial Organizations via the Industry Interaction Cell." },
  { icon: "lightbulb", text: "Entrepreneurship Cell guiding students in entrepreneurial activities." },
  { icon: "workspace_premium", text: "Special life-skill training from ICT Academy (AICTE MoU) — 154 & 147 students in 2016–18 batches." },
  { icon: "engineering", text: "Apprenticeship via BOPT (MHRD) — students trained in OIL, IOCL, ONGC, MSME, PGCIL, NEEPCO, etc." },
  { icon: "location_on", text: "Industry/project site visits for final year students arranged by departments." },
];

export default function TPCellPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-body">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">

        {/* Hero */}
        <section className="relative bg-primary text-white py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#60a5fa,_transparent_60%)]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.p
              {...fadeUp}
              className="text-blue-300 font-bold uppercase tracking-widest text-[10px] mb-3"
            >
              Nowgong Polytechnic, Nagaon, Assam
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-headline text-4xl md:text-6xl font-bold mb-4 leading-tight"
            >
              Training &amp; <br />
              <span className="text-blue-300">Placement Cell</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-blue-100 text-lg max-w-2xl leading-relaxed"
            >
              Empowering students with industry exposure, internships, and career
              opportunities across all four engineering departments.
            </motion.p>
          </div>
        </section>

        {/* About */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                About the Cell
              </p>
              <h2 className="font-headline text-3xl font-bold text-slate-900">
                What We Do
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The Placement and Training Cell of Nowgong Polytechnic looks after
                all activities of Placement, Training, Internship, and Higher
                Studies. It also manages student training in Industrial
                Organizations and counsels students for a bright future.
              </p>
              <p className="text-slate-600 leading-relaxed">
                A central committee comprising the Principal and all HoDs ensures
                departmental staff contribute to T&amp;P activities. Each of the 4
                branches — Civil, Electrical, Mechanical, and Computer Engineering
                — has its own subgroup with faculty and student volunteers who
                assist the HR group in campus pooling.
              </p>
              <blockquote className="border-l-4 border-primary pl-5 py-2 bg-blue-50 rounded-r-2xl text-slate-700 italic text-sm">
                "To be a leading Technical Institute by producing Diploma Engineers
                for Nation Building."
                <span className="block mt-1 not-italic text-[10px] font-bold text-primary uppercase tracking-widest">
                  — Vision of the Institution
                </span>
              </blockquote>
            </div>

            {/* TPO Card */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-7 border border-slate-100 flex flex-col gap-4 h-fit"
            >
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-2xl">
                  contact_phone
                </span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Training &amp; Placement Officer
                </p>
                <h3 className="font-headline text-xl font-bold text-slate-900">
                  Mr. Nipu Sarmah
                </h3>
                <p className="text-slate-500 text-sm">
                  Lecturer, Dept. of Electrical Engineering
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <a
                  href="tel:+919365710951"
                  className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-base">
                    call
                  </span>
                  +91 93657 10951
                </a>
                <a
                  href="mailto:tpo@nowgongpolytechnic.ac.in"
                  className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-primary transition-colors break-all"
                >
                  <span className="material-symbols-outlined text-primary text-base">
                    mail
                  </span>
                  tpo@nowgongpolytechnic.ac.in
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Activities */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                Our Initiatives
              </p>
              <h2 className="font-headline text-3xl font-bold text-slate-900">
                Key Activities
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activities.map((act, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">
                      {act.icon}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {act.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Placements by Branch */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
              Last 10 Years
            </p>
            <h2 className="font-headline text-3xl font-bold text-slate-900">
              Companies &amp; Organizations
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              On-Campus &amp; Off-Campus recruiters across all departments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {placements.map((dept, i) => (
              <motion.div
                key={dept.branch}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden"
              >
                <div className="flex items-center gap-4 p-6 border-b border-slate-100">
                  <div
                    className={`w-12 h-12 ${dept.iconBg} rounded-2xl flex items-center justify-center shadow-md`}
                  >
                    <span className="material-symbols-outlined text-white text-2xl">
                      {dept.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-slate-900">
                    {dept.branch}
                  </h3>
                </div>
                <ul className="p-6 space-y-2">
                  {dept.companies.map((company) => (
                    <li
                      key={company}
                      className="flex items-start gap-2 text-slate-600 text-sm"
                    >
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                        arrow_right
                      </span>
                      {company}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
