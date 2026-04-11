"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Building2, 
  Settings, 
  Zap, 
  Terminal,
  Users,
  FlaskConical,
  Cpu,
  Award
} from "lucide-react";

const DEPT_DATA: Record<string, any> = {
  "civil": {
    name: "Civil Engineering",
    icon: Building2,
    est: "1961",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqS-wn-hQn9RZZTNIzH1AKVKM0jdziCzM_xLPD034AD1kVwW7Nipa3CsHxGIJSpC2npJIcltYLF0mX0ctKN8tM8y-7fmJZWqUixpFaAlGg-UK_Kmzij5XkUifPPYeIZSY6uv1a7cSxPHlofaRpQ-CbENv-rPbty2s1PX3E33XcGtA2iUug_BSF1DzLXnJiEk19oFstxqO2JCN0AUBrqhz56fViYabFj1XWoOnVa6DWBRh94P7CsXYnR-5st2vLtB7TV-qKAiaUUYE",
    tagline: "Building the infrastructure of tomorrow.",
    description: "The Department of Civil Engineering at Nowgong Polytechnic is one of the oldest and most prestigious departments, established in 1961. We focus on modern construction technologies, structural integrity, and sustainable infrastructure.",
    labs: ["Structural Engineering Lab", "Geotechnical Engineering Lab", "Surveying & Levelling Lab", "Concrete Technology Lab"],
    faculty: 12,
    students: 180,
    intake: 60
  },
  "mechanical": {
    name: "Mechanical Engineering",
    icon: Settings,
    est: "1961",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnShYvZ-iWCVXHg0qzYwc26iF6VGNanX7YYhWwr9cORBpELC99B3x9iKesUFbgDlX_02rDYVySryFKlRgz5UNGn1c4wbBfl4rd7SzmOwMaT2ree0wRHBaA82s--mX3suykkbSlbODHugG9Ne5pzcwqeOcnwqn8PJL1T0DeNiQrO8nuXvwn0F24Z9ZoB6WluRWCtZNtctJhhSzhJQGaSAHYJPC7hQCt6nGpc971fEaORonubelX7cGTXI2zPkYbC7MlWv2mj4cMyW8",
    tagline: "Innovating modern industrial mechanics.",
    description: "Our Mechanical Engineering department blends classical mechanical principles with modern manufacturing and robotics. We prepare students for careers in automotive, aerospace, and energy sectors.",
    labs: ["Thermal Engineering Lab", "Fluid Mechanics Lab", "CNC & Robotics Lab", "Machine Shop"],
    faculty: 14,
    students: 180,
    intake: 60
  },
  "electrical": {
    name: "Electrical Engineering",
    icon: Zap,
    est: "1961",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGzvlvAXmNNQZLUsUV47OGsKnZ02ea3Q-6O7dzEO0fMG5x6yH63dD4a3kAQ9ioYp_Yw3QP_GkW82sL_NaDEcZnIKLLI-EVV3jMhD1yT8vmBk98ZU6NIEkgJEkyRuNbG-WyXYWGN6pFr4itAqvbR8nRpHwLBdZmOwVcO0B4hwuW5TfHtgC-uVxARbWJHXxSCmkm_P2pcvmnatQPN8BH0gspK9qfj53L84f2D-rz2eluwBeYtCv5_gE0PMG9XEZnqtgKQIJiz4meAV0",
    tagline: "Powering the digital and physical world.",
    description: "The Electrical Engineering department offers comprehensive training in power systems, control electronics, and renewable energy integrations, preparing students for the evolving energy landscape.",
    labs: ["Electrical Machines Lab", "Power Electronics Lab", "Control Systems Lab", "Microprocessor Lab"],
    faculty: 10,
    students: 180,
    intake: 60
  },
  "computer": {
    name: "Computer Engineering",
    icon: Terminal,
    est: "2008",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_g5ye4zQ2DZJhPeN4_yqQtjxPhWGJT-yKNNOizWgImcWA9mxAfIU4WO1jejuoQIzLfTyTD-nFjyqzwXK0zF5kbOWYxKn2hqOrcLsUwUnsyJCxHepLdfIWO9vtbWBEQ02GOEO1tMpTybJRrdlEVlgKnmefHGgd_a56aIKXpS8Jyq5w_NjCh7-qKRuOHL-ePMua5pALo98ZwqU3b4D8C7Bu34NH1tOyOHBigwvmfLGEEdT7OoiF6u4H8-i9hj96VvyDImMTjP__S3c",
    tagline: "Architecting the digital future.",
    description: "Established in 2008, the Computer Engineering department is a hub for software development, AI, and network security. We focus on modern tech stacks and computational problem-solving.",
    labs: ["AI & Machine Learning Lab", "Full Stack Development Lab", "Network Security Lab", "Operating Systems Lab"],
    faculty: 9,
    students: 150,
    intake: 50
  }
};

export default function DepartmentDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const data = DEPT_DATA[slug as string];

  if (!data) return null;

  const Icon = data.icon;

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-body">
      <Navbar />
      
      <main className="pt-20">
        {/* Banner Section */}
        <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
           <img 
            alt={data.name} 
            className="absolute inset-0 w-full h-full object-cover" 
            src={data.heroImage}
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 text-center px-6">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
             >
               <Icon className="w-10 h-10 text-white" />
             </motion.div>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-bold text-white font-headline tracking-tight mb-4"
             >
               {data.name}
             </motion.h1>
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-blue-100/80 text-lg italic"
             >
               {data.tagline}
             </motion.p>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-slate-50 border-y border-slate-100 py-8">
           <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
              {[
                { label: "Est. Year", val: data.est, icon: Award },
                { label: "Faculty", val: data.faculty, icon: Users },
                { label: "Active Students", val: data.students, icon: Users },
                { label: "Annual Intake", val: data.intake, icon: FlaskConical },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center md:items-start">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                   <p className="text-xl font-bold text-slate-900">{stat.val}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
           <div className="lg:col-span-2">
              <h2 className="text-3xl font-headline font-bold mb-8">About the Department</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-12">
                {data.description}
              </p>

              <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-3">
                 <Cpu className="text-primary w-6 h-6" />
                 Specialized Laboratories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                {data.labs.map((lab: string) => (
                  <div key={lab} className="p-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-default">
                    <p className="font-bold text-slate-800">{lab}</p>
                    <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold">Standardized Facilities</p>
                  </div>
                ))}
              </div>
           </div>

           <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                 <div className="bg-primary rounded-3xl p-8 text-white shadow-2xl shadow-primary/20">
                    <h4 className="text-xl font-bold mb-4">Admissions 2024</h4>
                    <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                      Enroll now in our {data.name} program. Applications are managed through the DTE portal.
                    </p>
                    <a 
                      href="https://dte.assam.gov.in/" 
                      target="_blank" 
                      className="block w-full text-center bg-white text-primary py-4 rounded-2xl font-bold text-sm hover:scale-105 transition-transform"
                    >
                      Apply via DTE Portal
                    </a>
                 </div>

                 <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Department Highlights</h4>
                    <ul className="space-y-4">
                       {[
                         "Industry Aligned Curriculum",
                         "Expert Senior Faculty",
                         "Smart Classroom Facilities",
                         "Active Placement Cell"
                       ].map(item => (
                         <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
