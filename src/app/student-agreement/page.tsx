"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };

export default function StudentAgreement() {
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
            <h1 className="font-fraunces text-4xl md:text-6xl font-light leading-tight mb-4">Student Agreement</h1>
            <p className="text-white/50 text-sm">Last updated: April 2026</p>
          </div>

          <div className="space-y-10 text-white/75 leading-relaxed">

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">1. Purpose of this Agreement</h2>
              <p>This Student Agreement sets out the standards of conduct, responsibility, and clinical behaviour expected of you as a student attending any course or mentorship programme delivered by Palm Springs Aesthetics Training.</p>
              <p className="mt-3">By booking and attending a course you confirm that you have read, understood, and agree to this Student Agreement alongside our Terms &amp; Conditions and Privacy Policy.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">2. Professional Registration &amp; Honesty</h2>
              <p>You confirm that:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>You are a registered medical professional with a valid registration with your governing body (NMC, GMC, GDC, GPhC, HCPC, or equivalent)</li>
                <li>Your registration is in good standing and not subject to any pending fitness-to-practise investigation that would prevent safe training</li>
                <li>You will provide evidence of your registration on request</li>
                <li>All information supplied during booking is true and accurate</li>
              </ul>
              <p className="mt-4">Failure to disclose relevant information may result in immediate removal from the course without refund.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">3. Scope of Practice</h2>
              <p>You understand and agree that:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Training equips you with foundational, advanced, or specialist clinical skills, but you remain responsible for applying those skills within your own regulated scope of practice</li>
                <li>You will obtain appropriate medical indemnity insurance before performing any aesthetic treatments on patients</li>
                <li>Non-prescribing students must work with a qualified prescriber or hold a V300 Independent Prescribing qualification before administering prescription-only medicines (POMs) such as botulinum toxin</li>
                <li>You will comply with all guidance issued by your regulatory body, the JCCP, and any other relevant authority</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">4. Professional Conduct on Training Days</h2>
              <p>During all training sessions you agree to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Arrive punctually and ready to train in appropriate clinical attire</li>
                <li>Treat trainers, fellow delegates, models, and clinic staff with respect and professionalism at all times</li>
                <li>Follow all clinical, safety, and infection-control instructions given by your trainer</li>
                <li>Refrain from attending under the influence of alcohol, recreational drugs, or prescription medications that may impair clinical judgement</li>
                <li>Behave in a manner consistent with your professional code of conduct</li>
              </ul>
              <p className="mt-4">We reserve the right to remove any student whose behaviour is unsafe, disrespectful, or inconsistent with professional standards. No refund will be issued in such cases.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">5. Models &amp; Hands-On Practice</h2>
              <p>Many of our courses involve practical, hands-on training on real models. You agree that:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>You will treat models with dignity, respect, and appropriate clinical care at all times</li>
                <li>You will perform procedures only under the supervision and guidance of your trainer</li>
                <li>You will stop immediately if instructed to do so by a trainer</li>
                <li>You understand that models are present to support your education, not as paying clients, and you will not treat them as such</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">6. Photography &amp; Video Consent</h2>
              <p>Photographs and/or video footage may be taken on training days, including certificate-presentation photos, practical footage, and informal group photos. By attending you agree that:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Photos and videos may be used internally for quality assurance, CPD evidence, and certificate issue</li>
                <li>Your image will only be used for marketing or promotional purposes if you have given specific additional consent</li>
                <li>You may withdraw consent for marketing use at any time by emailing us; we will remove your image from future promotional material as soon as reasonably practicable</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">7. Confidentiality</h2>
              <p>Any clinical cases, patient stories, or model information discussed during training are confidential. You must not share identifiable information about other students, trainers, or models outside the training environment.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">8. Intellectual Property</h2>
              <p>All training materials, slides, PDFs, handouts, and video resources remain the intellectual property of Palm Springs Aesthetics Training. You may use them for personal study and reference only. You must not share, reproduce, resell, or teach from our materials without our explicit written permission.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">9. Post-Course Support</h2>
              <p>We offer direct WhatsApp access to your trainers for clinical case discussion and guidance as you build your practice. We ask that you:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Respect that trainers are working clinicians and may not respond instantly</li>
                <li>Do not share identifiable patient information (names, clear face photos, dates of birth) via messaging</li>
                <li>Use the support channel for genuine clinical questions, not routine administrative matters</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">10. Certificate Issue</h2>
              <p>A CPD certificate will be issued to students who:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Attend the full course (theory and practical elements)</li>
                <li>Demonstrate safe clinical behaviour</li>
                <li>Complete any pre-course e-learning required</li>
              </ul>
              <p className="mt-4">We reserve the right to withhold a certificate where these conditions are not met. In such cases, feedback will be provided and where appropriate you will be offered the opportunity to re-attend or complete additional learning.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">11. Acceptance</h2>
              <p>By booking a course or mentorship programme with Palm Springs Aesthetics Training, you confirm that you have read and agree to this Student Agreement in full.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">12. Contact Us</h2>
              <p>If you have any questions about this agreement, please contact:</p>
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