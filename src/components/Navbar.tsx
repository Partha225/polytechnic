"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/" },
    { name: "Departments", href: "/departments" },
    { name: "Admissions", href: "https://dte.assam.gov.in/" },
    { name: "T&P", href: "/tp-cell" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-white/80 backdrop-blur-xl z-50 shadow-[0px_4px_20px_rgba(30,58,138,0.05)]">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Nowgong Polytechnic Logo" className="w-10 h-10 object-contain" />
        <span className="text-lg md:text-xl font-headline font-bold text-primary tracking-tight">Nowgong Polytechnic Since 1961</span>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`${
              pathname === link.href
                ? "text-secondary border-b-2 border-secondary font-semibold"
                : "text-slate-600 font-medium hover:text-secondary"
            } transition-colors duration-300`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="/signup"
          className="hidden md:block text-primary font-bold hover:text-blue-800 transition-all text-sm px-4"
        >
          Student Info
        </Link>
        <Link href="https://dte.assam.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform">
          Admissions
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-600 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${
                  pathname === link.href
                    ? "text-secondary border-b-2 border-secondary font-semibold"
                    : "text-slate-600 font-medium hover:text-secondary"
                } transition-colors duration-300 py-2`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/signup"
              className="text-primary font-bold hover:text-blue-800 transition-all py-2"
              onClick={() => setIsOpen(false)}
            >
              Student Info
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
