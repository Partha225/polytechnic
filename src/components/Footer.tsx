"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-20 px-4 md:px-8 bg-slate-950 text-slate-400 font-sans text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain invert" />
            <h2 className="text-xl font-bold text-white tracking-tight">Nowgong Polytechnic</h2>
          </div>
          <p className="mb-6 leading-relaxed">Estd. 1961. A premier technical institution in Assam, committed to excellence and innovation in technical education. Nurturing the next generation of engineers.</p>
          <div className="flex gap-4">
             {/* Social Links */}
             <Link 
               href="https://www.facebook.com/profile.php?id=61579161308605" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-white text-[10px] font-bold"
             >
               FB
             </Link>
             <Link 
               href="https://x.com/now_poly" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-slate-800 transition-colors text-white text-[10px] font-bold"
             >
               X
             </Link>
             <Link 
               href="https://www.instagram.com/now.gongpolytechnic/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-colors text-white text-[10px] font-bold"
             >
               IG
             </Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Academic Links</h4>
          <ul className="space-y-4">
            <li><Link className="hover:text-blue-400 transition-colors" href="/departments">Departments</Link></li>
            <li><Link className="hover:text-blue-400 transition-colors" href="https://dte.assam.gov.in/">Admissions</Link></li>
            <li><Link className="hover:text-blue-400 transition-colors" href="/gallery">Campus Gallery</Link></li>
            <li><Link className="hover:text-blue-400 transition-colors" href="#">RTI Notifications</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Contact Details</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
               <span className="material-symbols-outlined text-blue-500 text-sm mt-1">location_on</span>
               <p>Bishnu Rabha Path, Nagaon, Assam<br/>District- Nagaon, Pin - 782003</p>
            </div>
            <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-blue-500 text-sm">call</span>
               <p>0367-2254032</p>
            </div>
            <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-blue-500 text-sm">mail</span>
               <p className="text-blue-400 hover:text-blue-300 transition-colors">office@nowgongpolytechnic.ac.in</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Campus Location</h4>
          <div className="rounded-2xl overflow-hidden h-48 ring-1 ring-white/10 shadow-2xl">
            <iframe 
              src="https://maps.google.com/maps?q=Nowgong%20Polytechnic,%20Nagaon,%20Assam&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
          © 2024 Nowgong Polytechnic. All Rights Reserved. <br className="md:hidden"/>
          Developed with excellence by <span className="text-slate-400">Trinayan Jyoti Bora</span>
        </p>
      </div>
    </footer>
  );
}
