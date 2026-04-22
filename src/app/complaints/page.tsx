"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };

export default function ComplaintsProcedure() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* HEADER */}
      <nav className="px-6 md:px-12 py-6 border-b border-white/10">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image src="/logo.png" alt="Palm Springs Aesthetics Training" width={60} height={60} className="w-14 h-14 object-contain" />
          <div>
            <p className="font-fraunces text-lg font-light leading-tight">Palm Springs Aesthetics Training</p>
            <p className="text-[#C9A961] text-[10px] tracking-[0.3em] uppercase font-light">CPD-Accredited &middot; Cardiff</p>
          </div>
        </Link>
      </nav>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div {...fadeUp}>
          <Link href="/" className="text-[#C9A961] text-xs tracking-[0.2em] uppercase hover:text-[#d9bc7a] transition-colors">&larr; Back to Home</Link>

          <div className="mt-8 mb-12 border-b border-white/10 pb-8">
            <p className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-light mb-4">Legal</p>
            <h1 className="font-fraunces text-4xl md:text-6xl font-light leading-tight mb-4">Complaints Procedure</h1>
            <p className="text-white/50 text-sm">Last updated: April 2026</p>
          </div>

          <div className="space-y-10 text-white/75 leading-relaxed">

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">1. Our Commitment</h2>
              <p>At Palm Springs Aesthetics Training we care deeply about the quality of our training and the experience of every student. We welcome feedback &mdash; positive or negative &mdash; as it helps us continuously improve.</p>
              <p className="mt-3">If something has not met your expectations, we want to hear about it, and we will do everything we reasonably can to put it right.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">2. What This Procedure Covers</h2>
              <p>This procedure applies to complaints about:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>The quality or delivery of a training course</li>
                <li>The conduct of a trainer or staff member</li>
                <li>The content of training materials</li>
                <li>The administration, booking, or payment process</li>
                <li>Post-course support and communication</li>
              </ul>
              <p className="mt-4">For concerns about clinical care you have provided to your own patients, please contact your professional indemnity provider and your regulatory body. Those matters fall outside the scope of this procedure.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">3. How to Raise a Complaint</h2>
              <p>We ask that you follow the stages below. Most issues are resolved quickly and informally at Stage 1.</p>
            </div>

            <div>
              <h3 className="font-fraunces text-xl font-light text-[#C9A961] mb-3">Stage 1 &mdash; Informal Resolution</h3>
              <p>In the first instance, please raise your concern directly with your trainer or with Lee Pedlar (Clinical Director). This can often be resolved on the day or shortly afterwards via a brief conversation or message.</p>
              <p className="mt-3">Contact methods at Stage 1:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>In person on the training day</li>
                <li>WhatsApp message to your trainer</li>
                <li>Email to <a href="mailto:palmspringsaesthetics@yahoo.com" className="text-[#C9A961] hover:text-[#d9bc7a] transition-colors">palmspringsaesthetics@yahoo.com</a></li>
              </ul>
              <p className="mt-4">We aim to acknowledge your concern within <strong className="text-white">3 working days</strong> and respond in full within <strong className="text-white">10 working days</strong>.</p>
            </div>

            <div>
              <h3 className="font-fraunces text-xl font-light text-[#C9A961] mb-3">Stage 2 &mdash; Formal Written Complaint</h3>
              <p>If you are not satisfied with the outcome at Stage 1, you may escalate to a formal written complaint. Please email us with:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Your full name and contact details</li>
                <li>The course or service the complaint relates to</li>
                <li>A clear description of your concern</li>
                <li>What outcome you are seeking</li>
                <li>Any supporting documents or communications</li>
              </ul>
              <p className="mt-4">Send formal complaints to:</p>
              <div className="mt-3 pl-6 border-l-2 border-[#C9A961]/40">
                <p>Lee Pedlar &mdash; Clinical Director</p>
                <p>Palm Springs Aesthetics Training</p>
                <p>Mill Farm Industrial Estate, Lisvane, Cardiff, CF14 0SH</p>
                <p className="mt-2"><a href="mailto:palmspringsaesthetics@yahoo.com" className="text-[#C9A961] hover:text-[#d9bc7a] transition-colors">palmspringsaesthetics@yahoo.com</a></p>
              </div>
              <p className="mt-4">We will:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Acknowledge your complaint within <strong className="text-white">5 working days</strong></li>
                <li>Conduct a full review of the circumstances</li>
                <li>Provide a written response within <strong className="text-white">20 working days</strong></li>
                <li>Where further investigation is required, keep you informed of progress at regular intervals</li>
              </ul>
            </div>

            <div>
              <h3 className="font-fraunces text-xl font-light text-[#C9A961] mb-3">Stage 3 &mdash; External Review</h3>
              <p>If you remain dissatisfied after Stage 2, you may refer your complaint externally:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-white">CPD Accreditation body:</strong> For concerns regarding the quality or delivery of CPD-accredited training</li>
                <li><strong className="text-white">Your professional regulator:</strong> For concerns about the professional conduct of a trainer (NMC, GMC, GDC, GPhC, or HCPC as applicable)</li>
                <li><strong className="text-white">Information Commissioner&rsquo;s Office (ICO):</strong> For data protection concerns &mdash; <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#C9A961] hover:text-[#d9bc7a] transition-colors">www.ico.org.uk</a></li>
                <li><strong className="text-white">Trading Standards / Citizens Advice:</strong> For consumer contract issues</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">4. Confidentiality</h2>
              <p>All complaints are handled in confidence. Information will only be shared with those directly involved in investigating and resolving your concern, or where we are legally required to disclose.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">5. No Detriment</h2>
              <p>Raising a complaint will not affect your relationship with us, your access to post-course support, or the issuing of your certificate (where earned). We value honest feedback and will never penalise a student for raising a legitimate concern.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">6. Monitoring &amp; Improvement</h2>
              <p>All complaints are logged and reviewed to identify patterns and continually improve our training. We believe that honest feedback, handled professionally, is one of the most valuable sources of improvement for a training provider.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">7. Contact Us</h2>
              <p>For complaints, concerns, or feedback please contact:</p>
              <div className="mt-4 pl-6 border-l-2 border-[#C9A961]/40">
                <p>Palm Springs Aesthetics Training</p>
                <p>Mill Farm Industrial Estate, Lisvane, Cardiff, CF14 0SH</p>
                <p className="mt-2"><a href="mailto:palmspringsaesthetics@yahoo.com" className="text-[#C9A961] hover:text-[#d9bc7a] transition-colors">palmspringsaesthetics@yahoo.com</a></p>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <Link href="/" className="text-[#C9A961] text-xs tracking-[0.2em] uppercase hover:text-[#d9bc7a] transition-colors">&larr; Back to Home</Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}