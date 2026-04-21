"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const courses = [
  { id: "toxin", name: "Foundation Toxin Course", subtitle: "Foundation Botox", price: "£600", duration: "1 day", cpd: "9 hrs CPD", cpdNumber: "#1014134", cpdBadge: "/cpd-toxin.png", description: "Our foundation anti-wrinkle toxin course for medical professionals equips healthcare practitioners with the skills and knowledge to perform safe, effective anti-wrinkle toxin treatments using botulinum toxin type A.", outcomes: ["Understand facial anatomy and muscular structure", "Patient assessment and treatment planning", "Safe injection techniques and site selection", "Recognise and manage complications", "Live model practical session"] },
  { id: "advanced-toxin", name: "Advanced Toxin Course", subtitle: "Next-level Botox expertise", price: "£600", duration: "1 day", cpd: "9 hrs CPD", cpdNumber: "#1014138", cpdBadge: "/cpd-advanced-toxin.png", description: "An advanced programme designed to elevate your expertise. Builds on foundation knowledge with sophisticated injection techniques, combination therapies, and treatment of challenging areas including the lower face, neck, and décolletage.", outcomes: ["Advanced injection techniques", "In-depth neurotoxin pharmacology", "Advanced anatomy and facial analysis", "Combination therapies", "Risk management and complications"] },
  { id: "lip", name: "Foundation Lip Course", subtitle: "Natural, balanced lip enhancement", price: "£600", duration: "1 day", cpd: "9 hrs CPD", cpdNumber: "#1014139", cpdBadge: "/cpd-lip.png", description: "Designed for medical professionals seeking to master lip filler procedures. Covers theoretical and practical aspects of lip enhancement with a focus on creating natural, balanced results tailored to each individual.", outcomes: ["Lip anatomy and physiology", "Patient assessment and consultation", "Injection techniques for lip enhancement", "Product selection and injection safety", "Managing complications and patient comfort"] },
  { id: "filler", name: "Foundation Dermal Filler Course", subtitle: "Facial contouring and rejuvenation", price: "£600", duration: "1 day", cpd: "9 hrs CPD", cpdNumber: "#1014136", cpdBadge: "/cpd-filler.png", description: "A comprehensive training programme in dermal filler procedures. Learn various filler types, facial anatomy, contouring principles, and rejuvenation techniques to achieve natural-looking results safely and confidently.", outcomes: ["Knowledge of dermal filler types", "Facial anatomy mastery", "Patient assessment and consultation", "Safe injection techniques", "Hands-on practical training"] },
  { id: "skin", name: "Skin Boosters / Mesotherapy", subtitle: "Advanced skin rejuvenation", price: "£600", duration: "1 day", cpd: "9 hrs CPD", cpdNumber: "#1014137", cpdBadge: "/cpd-skin.png", description: "An intensive programme focused on the innovative technique of skin boosters. Explore the science behind skin rejuvenation, assess patient needs, and master advanced injection techniques for natural-looking results.", outcomes: ["Comprehensive skin anatomy and aging", "In-depth knowledge of skin boosters", "Customised treatment planning", "Advanced injection techniques", "Safety protocols and risk management"] },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };
const fadeUpStagger = (i: number) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const } });
const fadeInLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };
const fadeInRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } };

export default function Home() {
  const [filter, setFilter] = useState<"all" | "group" | "121" | "v300">("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const showGroup = filter === "all" || filter === "group";
  const show121 = filter === "all" || filter === "121";
  const showV300 = filter === "all" || filter === "v300";

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-white">
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-4 grid grid-cols-3 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-start">
            <Image src="/logo.png" alt="Palm Springs Aesthetics Training" width={240} height={240} className="w-40 h-40 md:w-52 md:h-52 object-contain" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="hidden md:flex items-center justify-center gap-10 text-sm font-light tracking-wide">
            <a href="#courses" className="text-white/80 hover:text-[#C9A961] transition-colors">Courses</a>
            <a href="#trainers" className="text-white/80 hover:text-[#C9A961] transition-colors">Trainers</a>
            <a href="#why" className="text-white/80 hover:text-[#C9A961] transition-colors">Why Us</a>
            <a href="#contact" className="text-white/80 hover:text-[#C9A961] transition-colors">Contact</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex justify-end">
            <a href="#contact" className="hidden md:inline-block px-5 py-2 text-sm border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-all">Enquire</a>
          </motion.div>
        </nav>
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
              { title: "Expert Medical Trainers", text: "Learn from an Advanced Nurse Practitioner, a Senior Pharmacist, and a Midwife — all V300 qualified or mentors, with decades of clinical experience combined.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /> },
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

      {/* OUR COURSES */}
      <section id="courses" className="bg-[#FAFAFA] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-12 md:mb-16">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">Our Courses</span>
              <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-6">
              Real skills. <span className="italic">Fully supported.</span><br />
              <span className="italic text-[#C9A961]">A model for every area, every time — never shared.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#8C827A] font-light max-w-2xl mx-auto leading-relaxed">
              Small group training with full hands-on experience injecting real models. We provide a dedicated model for each delegate &mdash; you never share, and you practise every area yourself from start to finish.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              { id: "all" as const, label: "All Courses" },
              { id: "group" as const, label: "Group Courses" },
              { id: "121" as const, label: "1-to-1 with Lee" },
              { id: "v300" as const, label: "V300 Mentor Support" },
            ].map((btn) => (
              <motion.button key={btn.id} onClick={() => setFilter(btn.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className={`px-5 py-2.5 text-sm tracking-wide transition-all border ${filter === btn.id ? "bg-[#0A0A0A] text-white border-[#0A0A0A]" : "bg-transparent text-[#0A0A0A] border-[#0A0A0A]/20 hover:border-[#0A0A0A]"}`}>{btn.label}</motion.button>
            ))}
          </motion.div>

          {showGroup && (
            <motion.div {...fadeUp} className="mb-20">
              <div className="text-center mb-10">
                <p className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-2">Group Courses</p>
                <p className="text-[#8C827A]">Led by Alana &amp; Debbie &middot; Max 4 delegates &middot; £600</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, i) => (
                  <motion.div key={course.id} {...fadeUpStagger(i)} whileHover={{ y: -6, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.15)" }} className="bg-white border border-[#0A0A0A]/10 hover:border-[#C9A961] transition-colors flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-[#0A0A0A]/5 bg-[#FAFAFA]/50">
                      <div className="relative w-full h-16">
                        <Image src={course.cpdBadge} alt={`CPD Accredited ${course.cpdNumber}`} fill className="object-contain object-left" />
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="mb-6">
                        <h3 className="font-fraunces text-2xl font-light mb-1">{course.name}</h3>
                        <p className="text-[#8C827A] text-sm italic">{course.subtitle}</p>
                      </div>
                      <div className="space-y-2 text-sm text-[#0A0A0A]/70 mb-6 pb-6 border-b border-[#0A0A0A]/10">
                        <div className="flex justify-between"><span>Duration</span><span className="text-[#0A0A0A]">{course.duration}</span></div>
                        <div className="flex justify-between"><span>Price</span><span className="text-[#0A0A0A]">{course.price} inc VAT</span></div>
                        <div className="flex justify-between"><span>Accreditation</span><span className="text-[#0A0A0A]">{course.cpd} {course.cpdNumber}</span></div>
                        <div className="flex justify-between"><span>Max delegates</span><span className="text-[#0A0A0A]">4</span></div>
                      </div>
                      {expanded === course.id && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.4 }} className="mb-6 text-sm text-[#0A0A0A]/70 leading-relaxed space-y-4 overflow-hidden">
                          <p>{course.description}</p>
                          <div>
                            <p className="text-[#0A0A0A] font-medium mb-2 tracking-wide text-xs uppercase">Learning Outcomes</p>
                            <ul className="space-y-1.5">
                              {course.outcomes.map((o, j) => (
                                <li key={j} className="flex gap-2"><span className="text-[#C9A961]">&middot;</span><span>{o}</span></li>
                              ))}
                            </ul>
                          </div>
                          <p className="text-xs text-[#C9A961] italic">Also available as 1-to-1 with Lee &mdash; £850</p>
                        </motion.div>
                      )}
                      <div className="mt-auto flex flex-col gap-2">
                        <button onClick={() => setExpanded(expanded === course.id ? null : course.id)} className="text-xs tracking-[0.2em] uppercase text-[#0A0A0A]/60 hover:text-[#C9A961] transition-colors self-start">
                          {expanded === course.id ? "Hide Details ↑" : "View Details ↓"}
                        </button>
                        <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block text-center px-5 py-3 bg-[#0A0A0A] text-white text-sm tracking-wide hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-colors">Enquire</motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {show121 && (
            <motion.div {...fadeUp} className="mb-20">
              <div className="bg-[#0A0A0A] text-white p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white opacity-[0.01] blur-[140px] rounded-full" />
                <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <p className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-4">Premium 1-to-1 Option</p>
                    <h3 className="font-fraunces text-3xl md:text-5xl font-light leading-[1.1] mb-4">Private training<br /><span className="italic text-[#C9A961]">exclusively with Lee</span></h3>
                    <p className="text-white/70 font-light leading-relaxed mb-6">Prefer undivided attention? Book any of our courses as a 1-to-1 directly with our Founder &amp; Clinical Director. Tailored pace, your specific questions answered, full clinical focus on you.</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Private tuition</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Led by Lee personally</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Flexible dates</span>
                    </div>
                    <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block px-8 py-4 bg-[#C9A961] text-[#0A0A0A] font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors">Enquire About 1-to-1</motion.a>
                  </div>
                  <div className="border-l-2 border-[#C9A961]/30 pl-8 md:pl-12">
                    <p className="text-[#C9A961] text-sm tracking-[0.3em] uppercase font-light mb-4">Investment</p>
                    <p className="font-fraunces text-6xl md:text-7xl font-light mb-2">£850</p>
                    <p className="text-white/60 mb-8">per course &middot; inc VAT</p>
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
            <motion.div {...fadeUp}>
              <div className="bg-[#0A0A0A] text-white p-10 md:p-16 relative overflow-hidden border border-[#C9A961]/20">
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white opacity-[0.012] blur-[140px] rounded-full" />
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
                  <div className="flex flex-wrap gap-2 justify-center mb-10">
                    <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Led by Lee or Alana</span>
                    <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Personalised mentorship</span>
                    <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Clinical exposure in aesthetics</span>
                    <span className="px-3 py-1.5 bg-white/10 text-white text-xs tracking-wide">Ongoing post-qualification support</span>
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

      {/* MEET YOUR TRAINERS */}
      <section id="trainers" className="bg-[#FAFAFA] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            <p className="text-lg md:text-xl text-[#8C827A] font-light max-w-2xl mx-auto leading-relaxed">
              Every session is led by medically qualified experts who care as deeply about your growth as they do about your patients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-32">
            <motion.div {...fadeInLeft} whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} className="relative aspect-[3/4] overflow-hidden">
              <Image src="/lee.png" alt="Lee Pedlar" fill className="object-cover" />
              <div className="absolute inset-0 ring-1 ring-black/5" />
            </motion.div>
            <motion.div {...fadeInRight}>
              <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light">01</span>
              <h3 className="font-fraunces text-4xl md:text-5xl font-light mt-3 mb-2">Lee</h3>
              <p className="text-[#8C827A] text-sm tracking-[0.2em] uppercase mb-8">Founder &amp; Clinical Director</p>
              <div className="space-y-4 text-[#0A0A0A]/80 leading-relaxed mb-8">
                <p>Lee is an Advanced Nurse Practitioner with a Master&rsquo;s degree in Advanced Clinical Practice, bringing over 18 years of experience within healthcare and nine years dedicated to aesthetic medicine.</p>
                <p>As the owner of Palm Springs Aesthetics and Palm Springs Aesthetics Training, Lee has built a reputation for delivering safe, ethical, and results-driven treatments, alongside high-quality, supportive education for healthcare professionals entering the aesthetics field.</p>
                <p>Lee is also a medical faculty member for Vivacy, a role he has held for the past four years, where he delivers advanced training across the UK in skin boosters and dermal filler treatments. His teaching style is recognised for being approachable, clinically robust, and focused on developing confident, competent practitioners.</p>
                <p>Alongside this, Lee plays a key role in supporting non-medical prescribers as a V300 Practice Assessor, having guided numerous students successfully through their prescribing qualifications.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">Advanced Nurse Practitioner</span>
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">V300 Practice Assessor</span>
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">Dermal Fillers &amp; Skin Boosters</span>
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">Vivacy Faculty Trainer</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="https://wa.me/447792689767" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#C9A961] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Lee
                </motion.a>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="tel:+447792689767" className="inline-flex items-center gap-2 px-5 py-3 border border-[#0A0A0A] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[#0A0A0A] hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Call Lee
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-32">
            <motion.div {...fadeInRight} whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} className="md:order-2 relative aspect-[3/4] overflow-hidden">
              <Image src="/alana.png" alt="Alana" fill className="object-cover" />
              <div className="absolute inset-0 ring-1 ring-black/5" />
            </motion.div>
            <motion.div {...fadeInLeft} className="md:order-1">
              <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light">02</span>
              <h3 className="font-fraunces text-4xl md:text-5xl font-light mt-3 mb-2">Alana</h3>
              <p className="text-[#8C827A] text-sm tracking-[0.2em] uppercase mb-8">Senior Pharmacist &amp; Lead Trainer</p>
              <div className="space-y-4 text-[#0A0A0A]/80 leading-relaxed mb-8">
                <p>Alana is a highly experienced pharmacist with over 25 years in clinical practice, bringing a depth of medical knowledge and patient-centred care into the field of aesthetics over the past five years.</p>
                <p>As an advanced aesthetics practitioner and V300 Independent Prescriber mentor, Alana has supported and guided numerous healthcare professionals through their prescribing qualifications, helping them develop safe, ethical, and confident practice. Her teaching is known for being supportive, structured, and clinically grounded, ensuring every student feels equipped to practise to a high standard.</p>
                <p>Alana&rsquo;s approach to aesthetics is centred on achieving natural, refined results that enhance rather than alter. She is deeply committed to safety, governance, and evidence-based practice, with a strong emphasis on responsible use of prescription-only medicines and maintaining the highest professional standards.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">V300 Prescriber Mentor</span>
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">Advanced Injectables</span>
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">Clinical Governance</span>
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">Patient Safety</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="https://wa.me/447827442951" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#C9A961] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Alana
                </motion.a>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="tel:+447827442951" className="inline-flex items-center gap-2 px-5 py-3 border border-[#0A0A0A] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[#0A0A0A] hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Call Alana
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeInLeft} whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} className="relative aspect-[3/4] overflow-hidden">
              <Image src="/debbie.png" alt="Debbie" fill className="object-cover" />
              <div className="absolute inset-0 ring-1 ring-black/5" />
            </motion.div>
            <motion.div {...fadeInRight}>
              <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light">03</span>
              <h3 className="font-fraunces text-4xl md:text-5xl font-light mt-3 mb-2">Debbie</h3>
              <p className="text-[#8C827A] text-sm tracking-[0.2em] uppercase mb-8">Midwife &amp; Lead Trainer</p>
              <div className="space-y-4 text-[#0A0A0A]/80 leading-relaxed mb-8">
                <p>Debbie is a highly experienced midwife with over 20 years in clinical practice, bringing a strong foundation of patient care, safety, and compassion into her aesthetics career over the past four years.</p>
                <p>She holds a qualification in teaching and has recently achieved her V300 Independent Prescribing certification, further strengthening her clinical scope and commitment to delivering safe, evidence-based practice. Debbie is passionate about education and supporting others in developing confidence and competence within aesthetics.</p>
                <p>Her clinical interests lie primarily in dermal fillers, where she focuses on achieving balanced, natural-looking results tailored to each individual. Alongside this, Debbie has a strong interest in skincare, recognising the importance of a holistic approach to skin health and long-term results.</p>
                <p>Known for her warm, supportive approach, Debbie creates a positive learning environment while maintaining high professional and ethical standards in both her clinical work and teaching.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">V300 Independent Prescriber</span>
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">Dermal Fillers</span>
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">Skin Health &amp; Skincare</span>
                <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-xs tracking-wide">Qualified Teacher</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="https://wa.me/447552231220" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#C9A961] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Debbie
                </motion.a>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="tel:+447552231220" className="inline-flex items-center gap-2 px-5 py-3 border border-[#0A0A0A] text-[#0A0A0A] text-sm font-medium tracking-wide hover:bg-[#0A0A0A] hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Call Debbie
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}