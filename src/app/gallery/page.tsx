"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Camera, Image as ImageIcon } from "lucide-react";

const IMAGES = [
  { src: "/gallery/back.jpg", title: "Institute Campus", category: "Campus" },
  { src: "/gallery/back2.jpg", title: "Main Building Exterior", category: "Campus" },
  { src: "/gallery/nightview.jpeg", title: "Night View of Campus", category: "Campus" },
  { src: "/gallery/image.jpeg", title: "Academic Blocks", category: "Infrastructure" },
  { src: "/gallery/alzebros.jpeg", title: "Alzebros Cultural Event", category: "Events" },
  { src: "/gallery/freshers.jpeg", title: "Freshers Social 2024", category: "Events" },
  { src: "/gallery/inductionpro.jpeg", title: "Student Induction Program", category: "Events" },
  { src: "/gallery/polyrallly.jpeg", title: "Polytechnic Rally", category: "Events" },
  { src: "/gallery/cleandrive.jpeg", title: "Cleanliness Drive", category: "Social" },
  { src: "/gallery/zubeenda.jpeg", title: "Special Guests on Campus", category: "Events" },
  { src: "/gallery/srjr.jpeg", title: "Senior-Junior Interaction", category: "Life" },
  { src: "/gallery/dean.jpg", title: "Honorable Dean on Campus", category: "Administration" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Header Section */}
        <section className="container mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Camera className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">Capturing Moments</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-headline"
          >
            Institute <span className="text-blue-600">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed"
          >
            Explore our vibrant campus life, state-of-the-art infrastructure, and the memorable events that define the Nowgong Polytechnic experience.
          </motion.p>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative break-inside-avoid rounded-3xl overflow-hidden group shadow-2xl shadow-slate-200"
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                   <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">{img.category}</p>
                   <h3 className="text-white font-bold text-lg">{img.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                   <ImageIcon className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 mt-24">
           <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="relative z-10">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to contribute to our gallery?</h2>
                 <p className="text-slate-400 mb-10 max-w-xl mx-auto">If you have high-quality photos of campus events or student life, share them with the administration to get featured here.</p>
                 <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                   Submit Your Photos
                 </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
