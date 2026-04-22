"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const courses = [
  {
    id: "toxin",
    name: "Foundation Toxin Course",
    subtitle: "Foundation Botox",
    cpdNumber: "#1014134",
    cpdBadge: "/cpd-toxin.png",
    entryReqs: "Medical Professionals\nNurses (NMC) and Doctors (GMC).\n\nDentists, Dental Hygienists, and Dental Therapists (GDC).\n\nPharmacists (GPhC), Paramedics, Physiotherapists, and ODPs (HCPC).",
    treatmentAreas: "Frown\nForehead\nCrows Feet\n\n3 classic foundation areas — the core of every aesthetic practice.",
    eLearning: "Pre-course PDF study materials covering:\n\nFacial anatomy\nNeurotoxin pharmacology\nPatient assessment\nInjection safety\nComplications management",
    trainingDetails: "Cost\nGroup: £600\nFounder's Course: £850pp\n\nDuration\n1 Day · 9 hrs CPD\n\nMax Delegates\nGroup: 4 · Founder's: 2",
    support: "Direct WhatsApp access to your trainers for clinical questions, case reviews, and guidance as you build your practice.",
  },
  {
    id: "advanced-toxin",
    name: "Advanced Toxin Course",
    subtitle: "Next-level Botox expertise",
    cpdNumber: "#1014138",
    cpdBadge: "/cpd-advanced-toxin.png",
    entryReqs: "Medical Professionals\nNurses (NMC) and Doctors (GMC).\n\nDentists, Dental Hygienists, and Dental Therapists (GDC).\n\nPharmacists (GPhC), Paramedics, Physiotherapists, and ODPs (HCPC).\n\nMust have completed Foundation Toxin Course first.",
    treatmentAreas: "Bunny Lines\nBrow Lift\nGummy Smile\nLip Flip\nChin Dimpling\nMasseters (jawline slimming)\nNefertiti Lift (neck)\nMigraine Treatment\nHyperhidrosis (underarm sweating)\nDAO",
    eLearning: "Pre-course PDF study materials covering:\n\nAdvanced facial anatomy\nNeurotoxin pharmacology\nPatient assessment\nInjection safety\nComplications management",
    trainingDetails: "Cost\nGroup: £600\nFounder's Course: £850pp\n\nDuration\n1 Day · 9 hrs CPD\n\nMax Delegates\nGroup: 4 · Founder's: 2",
    support: "Direct WhatsApp access to your trainers PLUS priority booking for V300 mentor support when you're ready to progress to independent prescribing.",
  },
  {
    id: "lip",
    name: "Foundation Lip Course",
    subtitle: "Natural, balanced lip enhancement",
    cpdNumber: "#1014139",
    cpdBadge: "/cpd-lip.png",
    entryReqs: "Medical Professionals\nNurses (NMC) and Doctors (GMC).\n\nDentists, Dental Hygienists, and Dental Therapists (GDC).\n\nPharmacists (GPhC), Paramedics, Physiotherapists, and ODPs (HCPC).",
    treatmentAreas: "Lip Hydration\nLip Volume Enhancement\nLip Border Definition\nCupid's Bow Shaping\n\nNatural, balanced, medically-led lip technique.",
    eLearning: "Pre-course PDF study materials covering:\n\nLip anatomy\nProduct selection\nPatient consultation\nInjection techniques\nComplications management",
    trainingDetails: "Cost\nGroup: £600\nFounder's Course: £850pp\n\nDuration\n1 Day · 9 hrs CPD\n\nMax Delegates\nGroup: 4 · Founder's: 2",
    support: "Direct WhatsApp access to your trainers for clinical questions, case reviews, and guidance as you build your practice.",
  },
  {
    id: "filler",
    name: "Foundation Dermal Filler Course",
    subtitle: "Facial contouring and rejuvenation",
    cpdNumber: "#1014136",
    cpdBadge: "/cpd-filler.png",
    entryReqs: "Medical Professionals\nNurses (NMC) and Doctors (GMC).\n\nDentists, Dental Hygienists, and Dental Therapists (GDC).\n\nPharmacists (GPhC), Paramedics, Physiotherapists, and ODPs (HCPC).",
    treatmentAreas: "Cheeks\nNasolabial Folds\nMarionette Lines\n\nThe foundation of mid-face rejuvenation and natural facial contouring.",
    eLearning: "Pre-course PDF study materials covering:\n\nFacial anatomy\nDermal filler types\nFacial assessment\nInjection techniques\nVascular safety & complications",
    trainingDetails: "Cost\nGroup: £600\nFounder's Course: £850pp\n\nDuration\n1 Day · 9 hrs CPD\n\nMax Delegates\nGroup: 4 · Founder's: 2",
    support: "Direct WhatsApp access to your trainers for clinical questions, case reviews, and guidance as you build your practice.",
  },
  {
    id: "skin",
    name: "Skin Boosters / Mesotherapy",
    subtitle: "Advanced skin rejuvenation",
    cpdNumber: "#1014137",
    cpdBadge: "/cpd-skin.png",
    entryReqs: "Medical Professionals\nNurses (NMC) and Doctors (GMC).\n\nDentists, Dental Hygienists, and Dental Therapists (GDC).\n\nPharmacists (GPhC), Paramedics, Physiotherapists, and ODPs (HCPC).",
    treatmentAreas: "Face\nNeck\nDécolleté\n\nHydration, luminosity, and long-term skin quality — an advanced skincare service.",
    eLearning: "Pre-course PDF study materials covering:\n\nSkin anatomy & aging\nSkin booster science\nPatient assessment\nInjection techniques\nSafety protocols",
    trainingDetails: "Cost\nGroup: £600\nFounder's Course: £850pp\n\nDuration\n1 Day · 9 hrs CPD\n\nMax Delegates\nGroup: 4 · Founder's: 2",
    support: "Direct WhatsApp access to your trainers for clinical questions, case reviews, and guidance as you build your practice.",
  },
];

const graduates = [
  { src: "/grad-1.webp", alt: "Graduates celebrating with Lee" },
  { src: "/grad-2.webp", alt: "Group of six graduating students" },
  { src: "/grad-3.webp", alt: "Graduate with her certificate" },
  { src: "/grad-4.webp", alt: "Registered Nurse graduate" },
  { src: "/grad-5.webp", alt: "Two graduates holding certificates together" },
  { src: "/grad-6.webp", alt: "Three graduating medical professionals" },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };
const fadeUpStagger = (i: number) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const } });
const fadeInLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };
const fadeInRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };

const ProspectusColumn = ({ title, body, isGold, icon }: { title: string; body: string; isGold: boolean; icon: React.ReactNode }) => (
  <div className={`p-8 md:p-10 flex flex-col items-center text-center ${isGold ? "bg-[#C9A961] text-[#0A0A0A]" : "bg-[#1a1a1a] text-white"}`}>
    <div className={`w-14 h-14 rounded-full border-2 ${isGold ? "border-[#0A0A0A]/40" : "border-[#C9A961]/50"} flex items-center justify-center mb-6`}>
      <svg className={`w-6 h-6 ${isGold ? "text-[#0A0A0A]" : "text-[#C9A961]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
    </div>
    <h4 className={`font-fraunces text-xl md:text-2xl font-normal tracking-wide uppercase mb-5 ${isGold ? "text-[#0A0A0A]" : "text-white"}`}>
      {title}
    </h4>
    <div className={`text-sm md:text-[15px] leading-relaxed whitespace-pre-line ${isGold ? "text-[#0A0A0A] font-normal" : "text-white/75 font-light"}`}>
      {body}
    </div>
  </div>
);

const prospectusIcons = {
  entry: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  areas: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  elearning: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
  training: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  support: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />,
};

export default function Home() {
  const [filter, setFilter] = useState<"all" | "group" | "121" | "v300">("all");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", role: "", course: "", trainingType: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", role: "", course: "", trainingType: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const show121 = filter === "all" || filter === "121";
  const showV300 = filter === "all" || filter === "v300";
  const showGroup = filter === "all" || filter === "group";

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-white">
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-4 grid grid-cols-3 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-start">
            <Image src="/logo.png" alt="Palm Springs Aesthetics Training" width={240} height={240} className="w-40 h-40 md:w-52 md:h-52 object-contain" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="hidden md:flex items-center justify-center gap-8 text-xs font-light tracking-[0.25em] uppercase">
            <a href="#courses" className="group relative text-white/80 hover:text-[#C9A961] transition-colors">
              Courses
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-400" />
            </a>
            <span className="text-[#C9A961]/40 text-[8px]">&#9670;</span>
            <a href="#trainers" className="group relative text-white/80 hover:text-[#C9A961] transition-colors">
              Trainers
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-400" />
            </a>
            <span className="text-[#C9A961]/40 text-[8px]">&#9670;</span>
            <a href="#why" className="group relative text-white/80 hover:text-[#C9A961] transition-colors whitespace-nowrap">
              Why Us
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-400" />
            </a>
            <span className="text-[#C9A961]/40 text-[8px]">&#9670;</span>
            <a href="#contact" className="group relative text-white/80 hover:text-[#C9A961] transition-colors">
              Contact
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-400" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex justify-end items-center">
            <a href="#contact" className="hidden md:inline-block px-5 py-2 text-sm border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-all">Enquire</a>
            {/* MOBILE HAMBURGER */}
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-white hover:text-[#C9A961] transition-colors" aria-label="Open menu">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </nav>

        {/* MOBILE MENU OVERLAY */}
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 z-50 bg-[#0A0A0A] md:hidden">
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4">
              <Image src="/logo.png" alt="Palm Springs Aesthetics Training" width={120} height={120} className="w-28 h-28 object-contain" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white hover:text-[#C9A961] transition-colors" aria-label="Close menu">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-full flex flex-col items-center justify-center px-6 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-10 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#C9A961]" />
                <span className="text-[#C9A961] text-[10px] tracking-[0.3em] uppercase font-light">Menu</span>
                <span className="h-px w-8 bg-[#C9A961]" />
              </motion.div>
              <nav className="flex flex-col items-center gap-8 mb-12">
                {[
                  { href: "#courses", label: "Courses" },
                  { href: "#graduates", label: "Graduates" },
                  { href: "#trainers", label: "Trainers" },
                  { href: "#why", label: "Why Us" },
                  { href: "#contact", label: "Contact" },
                ].map((link, i) => (
                  <motion.a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }} className="font-fraunces text-4xl font-light text-white hover:text-[#C9A961] transition-colors">
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.a href="#contact" onClick={() => setMobileMenuOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.75 }} className="inline-block px-10 py-4 bg-[#C9A961] text-[#0A0A0A] font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors mb-10 min-w-[240px]">
                Enquire Now
              </motion.a>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className="flex gap-4">
                <a href="https://instagram.com/palm_springs_training" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 border border-white/20 hover:border-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A] text-white/70 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com/palmspringsaestheticstraining" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 border border-white/20 hover:border-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A] text-white/70 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-48 md:pt-56 pb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-8 flex items-center justify-center gap-3 flex-wrap">
            <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
            <span className="text-[#C9A961] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-light">CPD-Accredited Aesthetics Training Based in Cardiff</span>
            <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
            Supportive Training by<br />
            <span className="italic font-normal text-[#C9A961]">Experienced Medical Professionals</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Delivered in small groups by medically qualified practitioners with years of real clinical experience &mdash; ensuring you feel confident, supported, and never overlooked.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <motion.a href="#courses" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-[#C9A961] text-[#0A0A0A] font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors min-w-[200px]">View Our Courses</motion.a>
            <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 border border-white/30 text-white font-light tracking-wide hover:border-white transition-colors min-w-[200px]">Enquire Today</motion.a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto text-white/60 text-sm tracking-wide border-t border-white/10 pt-10">
            <div className="flex items-center justify-center gap-2"><span className="text-[#C9A961]">&#10022;</span><span>CPD Accredited Provider</span></div>
            <div className="flex items-center justify-center gap-2"><span className="text-[#C9A961]">&#10022;</span><span>Max 4 Delegates</span></div>
            <div className="flex items-center justify-center gap-2"><span className="text-[#C9A961]">&#10022;</span><span>5-Star Rated</span></div>
          </motion.div>
        </div>
        <motion.a href="#why" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-[#C9A961] text-[10px] tracking-[0.3em] transition-colors">
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>SCROLL</motion.span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C9A961] to-transparent" />
        </motion.a>
      </section>

      {/* INSIDE OUR CLINIC */}
      <section className="relative bg-[#0A0A0A] text-white overflow-hidden">
        <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
          <Image src="/clinic-training.webp" alt="Lee teaching inside the Palm Springs Aesthetics Training clinic" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <motion.div {...fadeUp} className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
                <span className="text-[#C9A961] text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">Inside Our Clinic</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight max-w-3xl">
                Training inside a real,<br />
                <span className="italic text-[#C9A961]">working Cardiff clinic.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mt-6 leading-relaxed">
                Not a hotel conference room. Not a rented space. You train where we treat real patients every day &mdash; with the equipment, environment, and standards of a genuine clinical setting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY TRAIN WITH US */}
      <section id="why" className="bg-[#0A0A0A] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white opacity-[0.008] blur-[160px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16 md:mb-20">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">Why Train With Us</span>
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-6">
              Training built around<br />
              <span className="italic text-[#C9A961]">your success</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Every detail &mdash; from class size to post-course support &mdash; designed to help you succeed as a confident, safe, and respected aesthetic practitioner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              { title: "Small Groups, Max 4", text: "Never more than four delegates per course. More one-to-one time, more questions, more hands-on practice — the way training should be.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
              { title: "CPD Accredited", text: "Every course independently CPD-accredited. Verifiable credentials, recognised hours, certified upon completion — credentials you can trust.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
              { title: "Expert Medical Trainers", text: "Learn from an Advanced Nurse Practitioner, a Senior Pharmacist, and a Midwife — all V300 Non-Medical Prescribers and Mentors, with decades of clinical experience combined.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /> },
              { title: "Free 47-Page Marketing PDF", text: "Complimentary copy of our 'Healthcare Marketing Mastery' guide — strategies for attracting and retaining patients once you're qualified.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
              { title: "Ongoing Support", text: "Training doesn't end when the course does. Direct access to your trainers via WhatsApp for questions, case reviews, and guidance as you build your practice.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
              { title: "CPD Certificate Awarded", text: "Every student leaves with a formal CPD-accredited certificate on successful completion — verifiable, industry-recognised, yours to keep forever.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15l8.385-8.415a2.485 2.485 0 000-3.519 2.495 2.495 0 00-3.524 0L12 7.941 7.139 3.066a2.495 2.495 0 00-3.524 0 2.485 2.485 0 000 3.52L12 15z" /> },
            ].map((benefit, i) => (
              <motion.div key={i} {...fadeUpStagger(i)} whileHover={{ y: -4, borderColor: "rgba(201, 169, 97, 0.5)" }} className="group bg-white/[0.03] border border-white/10 transition-colors p-8">
                <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ duration: 0.4 }} className="w-12 h-12 mb-6 flex items-center justify-center border border-[#C9A961]/30 rounded-full">
                  <svg className="w-5 h-5 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{benefit.icon}</svg>
                </motion.div>
                <h3 className="font-fraunces text-2xl font-light mb-3">{benefit.title}</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm">{benefit.text}</p>
              </motion.div>
            ))}
            <motion.div {...fadeUpStagger(6)} whileHover={{ y: -4 }} className="group bg-white/[0.03] border border-white/10 hover:border-[#C9A961]/50 transition-all p-8 sm:col-span-2 lg:col-span-3">
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ duration: 0.4 }} className="w-12 h-12 flex items-center justify-center border border-[#C9A961]/30 rounded-full">
                  <svg className="w-5 h-5 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </motion.div>
                <div>
                  <h3 className="font-fraunces text-2xl md:text-3xl font-light mb-3">A Real Cardiff Clinic, Not a Hotel Room</h3>
                  <p className="text-white/60 font-light leading-relaxed">Train inside Palm Springs Aesthetics &mdash; a working, 5-star-rated clinic used by real patients every day. Professional equipment, clinical environment, the real world from day one.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR COURSES — PROSPECTUS STYLE */}
      <section id="courses" className="bg-[#0A0A0A] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-12 md:mb-16">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">Our Courses</span>
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-6">
              Real skills. <span className="italic">Fully supported.</span><br />
              <span className="italic text-[#C9A961]">A model for every area, every time.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Five CPD-accredited courses, each taught in full prospectus detail. Small groups, dedicated models, and complete transparency on what you&rsquo;ll learn.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              { id: "all" as const, label: "All Courses" },
              { id: "group" as const, label: "Group Courses" },
              { id: "121" as const, label: "The Founder's Course" },
              { id: "v300" as const, label: "V300 Mentor Support" },
            ].map((btn) => (
              <motion.button key={btn.id} onClick={() => setFilter(btn.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className={`px-5 py-2.5 text-sm tracking-wide transition-all border ${filter === btn.id ? "bg-[#C9A961] text-[#0A0A0A] border-[#C9A961]" : "bg-transparent text-white border-white/30 hover:border-[#C9A961]"}`}>{btn.label}</motion.button>
            ))}
          </motion.div>

          {showGroup && (
            <div className="space-y-16 md:space-y-20">
              {courses.map((course, i) => (
                <motion.div key={course.id} {...fadeUp}>
                  {/* COURSE HEADER */}
                  <div className="mb-8 text-center">
                    <p className="text-[#C9A961] text-xs tracking-[0.4em] font-light mb-3">COURSE {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="font-fraunces text-3xl md:text-4xl lg:text-5xl font-light mb-2">{course.name}</h3>
                    <p className="text-white/60 italic mb-6">{course.subtitle}</p>
                    <div className="relative w-52 h-16 mx-auto">
                      <Image src={course.cpdBadge} alt={`CPD Accredited ${course.cpdNumber}`} fill className="object-contain" />
                    </div>
                  </div>

                  {/* 5-COLUMN PROSPECTUS */}
                  <div className="grid grid-cols-1 md:grid-cols-5 border border-[#C9A961]/20">
                    <ProspectusColumn title="Entry Requirements" body={course.entryReqs} isGold={false} icon={prospectusIcons.entry} />
                    <ProspectusColumn title="Treatment Areas Covered" body={course.treatmentAreas} isGold={true} icon={prospectusIcons.areas} />
                    <ProspectusColumn title="E-Learning" body={course.eLearning} isGold={false} icon={prospectusIcons.elearning} />
                    <ProspectusColumn title="Training Details" body={course.trainingDetails} isGold={true} icon={prospectusIcons.training} />
                    <ProspectusColumn title="Support" body={course.support} isGold={false} icon={prospectusIcons.support} />
                  </div>

                  {/* CTA BAR */}
                  <div className="mt-8 flex flex-col items-center gap-3">
                    <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block px-10 py-4 bg-[#C9A961] text-[#0A0A0A] font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors text-center min-w-[280px]">
                      Enquire About This Course
                    </motion.a>
                    <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-3 mb-1">Or WhatsApp Direct</p>
                    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-2xl justify-center">
                      <motion.a href="https://wa.me/447792689767" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9A961]/40 text-[#C9A961] text-xs tracking-wide hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Lee &mdash; Founder&rsquo;s Course
                      </motion.a>
                      <motion.a href="https://wa.me/447827442951" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9A961]/40 text-[#C9A961] text-xs tracking-wide hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Alana &mdash; Group Training
                      </motion.a>
                      <motion.a href="https://wa.me/447552231220" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9A961]/40 text-[#C9A961] text-xs tracking-wide hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Debbie &mdash; Group Training
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {show121 && (
            <motion.div {...fadeUp} className="mt-20">
              <div className="bg-[#1a1a1a] text-white p-10 md:p-16 relative overflow-hidden border border-[#C9A961]/20">
                <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <p className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-4">Maximum 2 Delegates</p>
                    <h3 className="font-fraunces text-3xl md:text-5xl font-light leading-[1.1] mb-4">The<br /><span className="italic text-[#C9A961]">Founder&rsquo;s Course</span></h3>
                    <p className="text-white/70 font-light leading-relaxed mb-6">Trained personally by our Founder &amp; Clinical Director. Never more than two delegates per session &mdash; meaning clinical depth, unhurried pace, and the quiet focus of a master class with an Advanced Nurse Practitioner with nearly a decade in aesthetic medicine.</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Maximum 2 delegates</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Taught by Lee personally</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Flexible dates</span>
                    </div>
                    <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block px-8 py-4 bg-[#C9A961] text-[#0A0A0A] font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors">Enquire Now</motion.a>
                  </div>
                  <div className="border-l-2 border-[#C9A961]/30 pl-8 md:pl-12">
                    <p className="text-[#C9A961] text-sm tracking-[0.3em] uppercase font-light mb-4">Investment</p>
                    <p className="font-fraunces text-6xl md:text-7xl font-light mb-2">£850</p>
                    <p className="text-white/60 mb-2">per person &middot; inc VAT</p>
                    <p className="text-[#C9A961] text-xs tracking-[0.2em] uppercase mb-8">Max 2 delegates per session</p>
                    <p className="text-white/70 font-light text-sm mb-2">Available on all 5 courses:</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>&middot; Foundation Toxin</li>
                      <li>&middot; Advanced Toxin</li>
                      <li>&middot; Foundation Lip</li>
                      <li>&middot; Foundation Dermal Filler</li>
                      <li>&middot; Skin Boosters / Mesotherapy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {showV300 && (
            <motion.div {...fadeUp} className="mt-20">
              <div className="bg-[#1a1a1a] text-white p-10 md:p-16 relative overflow-hidden border border-[#C9A961]/20">
                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <p className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-4">Specialist Mentorship</p>
                    <h3 className="font-fraunces text-3xl md:text-5xl font-light leading-[1.1] mb-4">V300 Independent Prescribing<br /><span className="italic text-[#C9A961]">Mentor Support</span></h3>
                    <p className="text-white/70 font-light leading-relaxed max-w-2xl mx-auto">For medical professionals completing their V300 qualification. We provide formal Practice Supervisor and Practice Assessor support &mdash; tailored, hands-on, and led by Lee or Alana.</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <motion.div whileHover={{ y: -4 }} className="bg-white/[0.03] border border-[#C9A961]/30 p-8">
                      <p className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-3">Full Package</p>
                      <p className="font-fraunces text-5xl font-light mb-2">£2,500</p>
                      <p className="text-white/60 text-sm mb-6">inc VAT</p>
                      <p className="text-white/80 mb-4 font-medium">Practice Supervisor AND Practice Assessor support included</p>
                      <p className="text-white/60 text-sm leading-relaxed">Complete V300 mentorship covering both supervisory roles. Ideal for candidates wanting a single point of contact throughout their qualification.</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -4 }} className="bg-white/[0.03] border border-white/10 p-8">
                      <p className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-3">Single Role</p>
                      <p className="font-fraunces text-5xl font-light mb-2">£1,500</p>
                      <p className="text-white/60 text-sm mb-6">inc VAT</p>
                      <p className="text-white/80 mb-4 font-medium">Practice Supervisor OR Practice Assessor</p>
                      <p className="text-white/60 text-sm leading-relaxed">If you already have one role covered, we can provide the other. Full support within the scope of your chosen role.</p>
                    </motion.div>
                  </div>
                  <div className="text-center">
                    <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block px-8 py-4 bg-[#C9A961] text-[#0A0A0A] font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors">Enquire About V300</motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* OUR GRADUATES */}
      <section id="graduates" className="bg-[#0A0A0A] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C9A961] opacity-[0.05] blur-[140px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16 md:mb-20">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">Our Graduates</span>
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-6">
              Real medical professionals.<br />
              <span className="italic text-[#C9A961]">Real careers launched at Palm Springs.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Every face on this page is a qualified nurse, doctor, dentist, or pharmacist who trained with us &mdash; and walked out with the skills, confidence, and accreditation to practise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {graduates.map((grad, i) => (
              <motion.div key={i} {...fadeUpStagger(i)} whileHover={{ y: -6 }} className="relative aspect-[4/5] overflow-hidden bg-white/[0.03] p-3 border border-[#C9A961]/15 group">
                <div className="relative w-full h-full overflow-hidden">
                  <Image src={grad.src} alt={grad.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-center text-white/50 text-sm italic mt-12 max-w-xl mx-auto font-light">
            A small selection of the hundreds of medical professionals we&rsquo;ve trained since 2021.
          </motion.p>
        </div>
      </section>

      {/* MEET YOUR TRAINERS */}
      <section id="trainers" className="bg-[#0A0A0A] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A961] opacity-[0.04] blur-[140px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-20 md:mb-24">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">Meet Your Trainers</span>
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-6">
              Three practitioners.<br />
              <span className="italic">Decades of clinical experience.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Every session is led by medically qualified experts who care as deeply about your growth as they do about your patients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-32">
            <motion.div {...fadeInLeft} whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} className="relative aspect-[3/4] overflow-hidden bg-white/[0.03] p-3 border border-[#C9A961]/20">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/lee-new.webp" alt="Lee Pedlar" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div {...fadeInRight}>
              <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light">Featured Trainer / 01</span>
              <h3 className="font-fraunces text-4xl md:text-5xl font-light mt-3 mb-2">Lee</h3>
              <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-8">Founder &amp; Clinical Director</p>
              <div className="space-y-4 text-white/70 leading-relaxed mb-8">
                <p>Lee is an Advanced Nurse Practitioner with a Master&rsquo;s degree in Advanced Clinical Practice, bringing over 18 years of experience within healthcare and nine years dedicated to aesthetic medicine.</p>
                <p>As the owner of Palm Springs Aesthetics and Palm Springs Aesthetics Training, Lee has built a reputation for delivering safe, ethical, and results-driven treatments, alongside high-quality, supportive education for healthcare professionals entering the aesthetics field.</p>
                <p>Lee is also a medical faculty member for Vivacy, a role he has held for the past four years, where he delivers advanced training across the UK in skin boosters and dermal filler treatments. His teaching style is recognised for being approachable, clinically robust, and focused on developing confident, competent practitioners.</p>
                <p>Alongside this, Lee plays a key role in supporting non-medical prescribers as a V300 Practice Assessor, having guided numerous students successfully through their prescribing qualifications.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Advanced Nurse Practitioner</span>
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">V300 Practice Assessor</span>
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Dermal Fillers &amp; Skin Boosters</span>
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Vivacy Faculty Trainer</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="https://wa.me/447792689767" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#C9A961] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors">
                  WhatsApp Lee
                </motion.a>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="tel:+447792689767" className="inline-flex items-center gap-2 px-5 py-3 border border-white/30 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-[#0A0A0A] transition-colors">
                  Call Lee
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-32">
            <motion.div {...fadeInRight} whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} className="md:order-2 relative aspect-[3/4] overflow-hidden bg-white/[0.03] p-3 border border-[#C9A961]/20">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/alana.png" alt="Alana" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div {...fadeInLeft} className="md:order-1">
              <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light">Featured Trainer / 02</span>
              <h3 className="font-fraunces text-4xl md:text-5xl font-light mt-3 mb-2">Alana</h3>
              <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-8">Senior Pharmacist &amp; Lead Trainer</p>
              <div className="space-y-4 text-white/70 leading-relaxed mb-8">
                <p>Alana is a highly experienced pharmacist with over 25 years in clinical practice, bringing a depth of medical knowledge and patient-centred care into the field of aesthetics over the past five years.</p>
                <p>As an advanced aesthetics practitioner and V300 Independent Prescriber mentor, Alana has supported and guided numerous healthcare professionals through their prescribing qualifications, helping them develop safe, ethical, and confident practice. Her teaching is known for being supportive, structured, and clinically grounded, ensuring every student feels equipped to practise to a high standard.</p>
                <p>Alana&rsquo;s approach to aesthetics is centred on achieving natural, refined results that enhance rather than alter. She is deeply committed to safety, governance, and evidence-based practice, with a strong emphasis on responsible use of prescription-only medicines and maintaining the highest professional standards.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">V300 Prescriber Mentor</span>
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Advanced Injectables</span>
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Clinical Governance</span>
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Patient Safety</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="https://wa.me/447827442951" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#C9A961] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors">
                  WhatsApp Alana
                </motion.a>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="tel:+447827442951" className="inline-flex items-center gap-2 px-5 py-3 border border-white/30 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-[#0A0A0A] transition-colors">
                  Call Alana
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeInLeft} whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} className="relative aspect-[3/4] overflow-hidden bg-white/[0.03] p-3 border border-[#C9A961]/20">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/debbie.png" alt="Debbie" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div {...fadeInRight}>
              <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light">Featured Trainer / 03</span>
              <h3 className="font-fraunces text-4xl md:text-5xl font-light mt-3 mb-2">Debbie</h3>
              <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-8">Midwife &amp; Lead Trainer</p>
              <div className="space-y-4 text-white/70 leading-relaxed mb-8">
                <p>Debbie is a highly experienced midwife with over 20 years in clinical practice, bringing a strong foundation of patient care, safety, and compassion into her aesthetics career over the past four years.</p>
                <p>She holds a qualification in teaching and has recently achieved her V300 Independent Prescribing certification, further strengthening her clinical scope and commitment to delivering safe, evidence-based practice. Debbie is passionate about education and supporting others in developing confidence and competence within aesthetics.</p>
                <p>Her clinical interests lie primarily in dermal fillers, where she focuses on achieving balanced, natural-looking results tailored to each individual. Alongside this, Debbie has a strong interest in skincare, recognising the importance of a holistic approach to skin health and long-term results.</p>
                <p>Known for her warm, supportive approach, Debbie creates a positive learning environment while maintaining high professional and ethical standards in both her clinical work and teaching.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">V300 Independent Prescriber</span>
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Dermal Fillers</span>
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Skin Health &amp; Skincare</span>
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Qualified Teacher</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="https://wa.me/447552231220" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#C9A961] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors">
                  WhatsApp Debbie
                </motion.a>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="tel:+447552231220" className="inline-flex items-center gap-2 px-5 py-3 border border-white/30 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-[#0A0A0A] transition-colors">
                  Call Debbie
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0A0A0A] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A961] opacity-[0.04] blur-[180px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-12 md:mb-16">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">Enquire</span>
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-6">
              Ready to begin your<br />
              <span className="italic text-[#C9A961]">aesthetics journey?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Tell us a little about yourself and which course you&rsquo;re interested in. We&rsquo;ll be in touch personally within 24 hours.
            </p>
          </motion.div>

          <motion.form {...fadeUp} onSubmit={handleFormSubmit} className="bg-white/[0.03] border border-white/10 p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#C9A961] text-xs tracking-[0.2em] uppercase font-light mb-2">Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleFormChange} className="w-full bg-transparent border-b border-white/30 focus:border-[#C9A961] text-white py-3 px-1 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[#C9A961] text-xs tracking-[0.2em] uppercase font-light mb-2">Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full bg-transparent border-b border-white/30 focus:border-[#C9A961] text-white py-3 px-1 outline-none transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#C9A961] text-xs tracking-[0.2em] uppercase font-light mb-2">Phone *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleFormChange} className="w-full bg-transparent border-b border-white/30 focus:border-[#C9A961] text-white py-3 px-1 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[#C9A961] text-xs tracking-[0.2em] uppercase font-light mb-2">Professional Role *</label>
                <select name="role" required value={formData.role} onChange={handleFormChange} className="w-full bg-transparent border-b border-white/30 focus:border-[#C9A961] text-white py-3 px-1 outline-none transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-[#0A0A0A]">Select your role</option>
                  <option value="Nurse (NMC)" className="bg-[#0A0A0A]">Nurse (NMC)</option>
                  <option value="Doctor (GMC)" className="bg-[#0A0A0A]">Doctor (GMC)</option>
                  <option value="Dentist / Dental Hygienist / Dental Therapist (GDC)" className="bg-[#0A0A0A]">Dentist / Dental Hygienist / Dental Therapist (GDC)</option>
                  <option value="Pharmacist (GPhC)" className="bg-[#0A0A0A]">Pharmacist (GPhC)</option>
                  <option value="Paramedic / Physiotherapist / ODP (HCPC)" className="bg-[#0A0A0A]">Paramedic / Physiotherapist / ODP (HCPC)</option>
                  <option value="Other" className="bg-[#0A0A0A]">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#C9A961] text-xs tracking-[0.2em] uppercase font-light mb-2">Interested Course</label>
                <select name="course" value={formData.course} onChange={handleFormChange} className="w-full bg-transparent border-b border-white/30 focus:border-[#C9A961] text-white py-3 px-1 outline-none transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-[#0A0A0A]">Select a course</option>
                  <option value="Foundation Toxin" className="bg-[#0A0A0A]">Foundation Toxin</option>
                  <option value="Advanced Toxin" className="bg-[#0A0A0A]">Advanced Toxin</option>
                  <option value="Foundation Lip" className="bg-[#0A0A0A]">Foundation Lip</option>
                  <option value="Foundation Dermal Filler" className="bg-[#0A0A0A]">Foundation Dermal Filler</option>
                  <option value="Skin Boosters / Mesotherapy" className="bg-[#0A0A0A]">Skin Boosters / Mesotherapy</option>
                  <option value="Not sure yet" className="bg-[#0A0A0A]">Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-[#C9A961] text-xs tracking-[0.2em] uppercase font-light mb-2">Preferred Training Type</label>
                <select name="trainingType" value={formData.trainingType} onChange={handleFormChange} className="w-full bg-transparent border-b border-white/30 focus:border-[#C9A961] text-white py-3 px-1 outline-none transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-[#0A0A0A]">Select training type</option>
                  <option value="Group Course (£600)" className="bg-[#0A0A0A]">Group Course (&pound;600)</option>
                  <option value="The Founder's Course (£850pp, max 2)" className="bg-[#0A0A0A]">The Founder&rsquo;s Course (&pound;850pp, max 2)</option>
                  <option value="V300 Mentor Support" className="bg-[#0A0A0A]">V300 Mentor Support</option>
                  <option value="Not sure yet" className="bg-[#0A0A0A]">Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#C9A961] text-xs tracking-[0.2em] uppercase font-light mb-2">Message *</label>
              <textarea name="message" required value={formData.message} onChange={handleFormChange} rows={5} placeholder="Tell us a little about yourself and what you're hoping to achieve..." className="w-full bg-transparent border-b border-white/30 focus:border-[#C9A961] text-white py-3 px-1 outline-none transition-colors placeholder:text-white/30 resize-none" />
            </div>

            <div className="pt-4 text-center">
              <motion.button type="submit" disabled={formStatus === "sending"} whileHover={{ scale: formStatus === "sending" ? 1 : 1.03 }} whileTap={{ scale: formStatus === "sending" ? 1 : 0.98 }} className="inline-block px-12 py-4 bg-[#C9A961] text-[#0A0A0A] font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[240px]">
                {formStatus === "sending" ? "Sending..." : "Send Enquiry"}
              </motion.button>
              {formStatus === "success" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-[#C9A961] font-light">
                  Thank you &mdash; we&rsquo;ll be in touch within 24 hours.
                </motion.p>
              )}
              {formStatus === "error" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-red-400 font-light">
                  Something went wrong. Please try WhatsApp or call us directly.
                </motion.p>
              )}
            </div>
          </motion.form>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <p className="text-white/50 text-sm mb-4 tracking-wide">Prefer to speak to us directly?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/447792689767" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9A961]/40 text-[#C9A961] text-xs tracking-wide hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-colors">
                WhatsApp Lee
              </a>
              <a href="https://wa.me/447827442951" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9A961]/40 text-[#C9A961] text-xs tracking-wide hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-colors">
                WhatsApp Alana
              </a>
              <a href="https://wa.me/447552231220" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9A961]/40 text-[#C9A961] text-xs tracking-wide hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-colors">
                WhatsApp Debbie
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] text-white border-t border-[#C9A961]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">

          {/* Top Row — Logo + Tagline */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-10 border-b border-white/10 mb-12">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Image src="/logo.png" alt="Palm Springs Aesthetics Training" width={80} height={80} className="w-16 h-16 object-contain" />
              <div>
                <p className="font-fraunces text-xl font-light leading-tight">Palm Springs Aesthetics Training</p>
                <p className="text-[#C9A961] text-[10px] tracking-[0.3em] uppercase font-light mt-1">CPD-Accredited &middot; Cardiff</p>
              </div>
            </div>
            <div className="flex gap-6 flex-wrap">
              <a href="#courses" className="text-white/60 hover:text-[#C9A961] text-xs tracking-[0.2em] uppercase transition-colors">Courses</a>
              <a href="#graduates" className="text-white/60 hover:text-[#C9A961] text-xs tracking-[0.2em] uppercase transition-colors">Graduates</a>
              <a href="#trainers" className="text-white/60 hover:text-[#C9A961] text-xs tracking-[0.2em] uppercase transition-colors">Trainers</a>
              <a href="#contact" className="text-white/60 hover:text-[#C9A961] text-xs tracking-[0.2em] uppercase transition-colors">Contact</a>
            </div>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Contact */}
            <div>
              <h4 className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-6">Contact</h4>
              <address className="not-italic text-white/70 text-sm leading-relaxed mb-6">
                Palm Springs Aesthetics<br />
                Mill Farm Industrial Estate<br />
                Lisvane<br />
                Cardiff<br />
                CF14 0SH
              </address>
              <div className="space-y-2 text-sm">
                <a href="mailto:palmspringsaesthetics@yahoo.com" className="block text-white/70 hover:text-[#C9A961] transition-colors">palmspringsaesthetics@yahoo.com</a>
                <a href="tel:+447792689767" className="block text-white/70 hover:text-[#C9A961] transition-colors">+44 7792 689767</a>
              </div>
            </div>

            {/* Our Courses */}
            <div>
              <h4 className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-6">Our Courses</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#courses" className="text-white/70 hover:text-[#C9A961] transition-colors">Foundation Toxin</a></li>
                <li><a href="#courses" className="text-white/70 hover:text-[#C9A961] transition-colors">Advanced Toxin</a></li>
                <li><a href="#courses" className="text-white/70 hover:text-[#C9A961] transition-colors">Foundation Lip</a></li>
                <li><a href="#courses" className="text-white/70 hover:text-[#C9A961] transition-colors">Foundation Dermal Filler</a></li>
                <li><a href="#courses" className="text-white/70 hover:text-[#C9A961] transition-colors">Skin Boosters / Mesotherapy</a></li>
                <li className="pt-2 border-t border-white/10 mt-3"><a href="#courses" className="text-[#C9A961] hover:text-[#d9bc7a] transition-colors">The Founder&rsquo;s Course &mdash; Max 2 Delegates</a></li>
                <li><a href="#courses" className="text-[#C9A961] hover:text-[#d9bc7a] transition-colors">V300 Mentor Support</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-6">Legal &amp; Policy</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="text-white/70 hover:text-[#C9A961] transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-white/70 hover:text-[#C9A961] transition-colors">Terms &amp; Conditions</a></li>
                <li><a href="/student-agreement" className="text-white/70 hover:text-[#C9A961] transition-colors">Student Agreement</a></li>
                <li><a href="/complaints" className="text-white/70 hover:text-[#C9A961] transition-colors">Complaints Procedure</a></li>
              </ul>

              <h4 className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-4 mt-10">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/palm_springs_training" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 border border-white/20 hover:border-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A] text-white/70 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com/palmspringsaestheticstraining" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 border border-white/20 hover:border-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A] text-white/70 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Palm Springs Aesthetics Training. All rights reserved.</p>
            <p className="tracking-wide">CPD-Accredited Aesthetic Training Provider &middot; Based in Cardiff, UK</p>
          </div>

        </div>
      </footer>
    </main>
  );
}