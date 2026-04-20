import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1410]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A961] opacity-[0.04] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A961] opacity-[0.03] blur-[100px] rounded-full" />
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-4 grid grid-cols-3 items-center">
          <div className="flex items-center justify-start">
            <Image src="/logo.png" alt="Palm Springs Aesthetics Training" width={240} height={240} className="w-40 h-40 md:w-52 md:h-52 object-contain" priority />
          </div>
          <div className="hidden md:flex items-center justify-center gap-10 text-sm font-light tracking-wide">
            <a href="#courses" className="text-white/80 hover:text-[#C9A961] transition-colors">Courses</a>
            <a href="#trainers" className="text-white/80 hover:text-[#C9A961] transition-colors">Trainers</a>
            <a href="#about" className="text-white/80 hover:text-[#C9A961] transition-colors">About</a>
            <a href="#contact" className="text-white/80 hover:text-[#C9A961] transition-colors">Contact</a>
          </div>
          <div className="flex justify-end">
            <a href="#contact" className="hidden md:inline-block px-5 py-2 text-sm border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-all">Enquire</a>
          </div>
        </nav>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-48 md:pt-56 pb-32">
          <div className="mb-8 flex items-center justify-center gap-3 flex-wrap">
            <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
            <span className="text-[#C9A961] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-light">CPD-Accredited Aesthetics Training Based in Cardiff</span>
            <span className="h-px w-8 md:w-12 bg-[#C9A961]" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
            Supportive Training by<br />
            <span className="italic font-normal text-[#C9A961]">Experienced Medical Professionals</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Delivered in small groups by medically qualified practitioners with years of real clinical experience — ensuring you feel confident, supported, and never overlooked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a href="#courses" className="px-8 py-4 bg-[#C9A961] text-[#0A0A0A] font-medium tracking-wide hover:bg-[#d9bc7a] transition-colors min-w-[200px]">View Our Courses</a>
            <a href="#contact" className="px-8 py-4 border border-white/30 text-white font-light tracking-wide hover:border-white transition-colors min-w-[200px]">Enquire Today</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto text-white/60 text-sm tracking-wide border-t border-white/10 pt-10">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#C9A961]">✦</span>
              <span>CPD Accredited #781821</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#C9A961]">✦</span>
              <span>Max 4 Delegates</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#C9A961]">✦</span>
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
        <a href="#courses" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-[#C9A961] text-[10px] tracking-[0.3em] transition-colors">
          <span>SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C9A961] to-transparent" />
        </a>
      </section>
    </main>
  );
}