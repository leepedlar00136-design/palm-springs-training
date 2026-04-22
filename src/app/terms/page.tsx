"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };

export default function TermsAndConditions() {
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
            <h1 className="font-fraunces text-4xl md:text-6xl font-light leading-tight mb-4">Terms &amp; Conditions</h1>
            <p className="text-white/50 text-sm">Last updated: April 2026</p>
          </div>

          <div className="space-y-10 text-white/75 leading-relaxed">

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">1. About Us</h2>
              <p>These Terms &amp; Conditions govern the booking and delivery of training courses, mentorship programmes, and related services provided by Palm Springs Aesthetics Training, operated by Lee Pedlar (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).</p>
              <p className="mt-3">Trading address: Mill Farm Industrial Estate, Lisvane, Cardiff, CF14 0SH.</p>
              <p className="mt-3">By booking a course, you agree to these terms in full. If you do not agree, please do not book or attend a course.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">2. Eligibility</h2>
              <p>Our training courses are open only to registered medical professionals who meet the entry requirements for the relevant course, including (but not limited to):</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Nurses (NMC)</li>
                <li>Doctors (GMC)</li>
                <li>Dentists, Dental Hygienists, and Dental Therapists (GDC)</li>
                <li>Pharmacists (GPhC)</li>
                <li>Paramedics, Physiotherapists, and ODPs (HCPC)</li>
              </ul>
              <p className="mt-4">Proof of registration may be requested before or on the training day. We reserve the right to refuse attendance if suitable evidence is not provided.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">3. Course Fees &amp; Payment</h2>
              <p>All course fees are listed on our website and are inclusive of VAT unless otherwise stated.</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Group courses: &pound;600 per delegate</li>
                <li>The Founder&rsquo;s Course (maximum 2 delegates): &pound;850 per person</li>
                <li>V300 Mentor Support &mdash; Full Package (Supervisor &amp; Assessor): &pound;2,500</li>
                <li>V300 Mentor Support &mdash; Single Role: &pound;1,500</li>
              </ul>
              <p className="mt-4">Payment is required in full at the time of booking to secure your place. Bookings are not confirmed until payment is received.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">4. Cancellations &amp; Refunds</h2>
              <p>Because we operate small-group training (maximum 4 delegates) with a dedicated model for each student, cancellations have a real cost to us and to other delegates. The following cancellation policy therefore applies:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>More than 30 days before the course: 100% refund, less a &pound;50 administration fee</li>
                <li>15&ndash;30 days before the course: 50% refund</li>
                <li>Less than 14 days before the course: No refund, but the booking may be transferred to another student nominated by you</li>
                <li>Failure to attend the course (&ldquo;no-show&rdquo;) without prior notice: No refund and no transfer</li>
              </ul>
              <p className="mt-4">V300 Mentorship fees are non-refundable once the mentorship has commenced. A partial refund may be considered at our discretion in exceptional circumstances.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">5. Rescheduling</h2>
              <p>You may request to move your booking to another course date once, free of charge, provided the request is made at least 14 days before your scheduled course and a suitable alternative date is available. Further rescheduling may be subject to a &pound;100 administration fee.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">6. Course Changes by Us</h2>
              <p>In rare circumstances (e.g. trainer illness, model cancellation, or force majeure), we may need to postpone or reschedule a course. In such cases:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>You will be offered an alternative date at no extra cost</li>
                <li>If no alternative date is suitable, you will receive a full refund</li>
                <li>We are not liable for any travel, accommodation, or other costs you incur in connection with a postponed course</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">7. CPD Certification</h2>
              <p>Each of our courses is independently CPD-accredited. A certificate will be issued to students who complete the course in full, engage appropriately with theory and practical elements, and demonstrate safe clinical behaviour.</p>
              <p className="mt-3">We reserve the right to withhold a certificate where a student has not met the learning outcomes or has demonstrated behaviour inconsistent with safe professional practice.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">8. Scope of Training</h2>
              <p>Our training provides the foundational, advanced, or specialist knowledge and practical skills described in each course specification. It does not, on its own, constitute authorisation to practise aesthetic medicine. Students remain personally responsible for:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Working within their clinical scope of practice and professional registration</li>
                <li>Obtaining appropriate medical indemnity insurance</li>
                <li>Ensuring they have access to a valid prescriber where required</li>
                <li>Complying with their regulatory body&rsquo;s code of conduct</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">9. Liability</h2>
              <p>We take every reasonable step to ensure training is delivered safely and in line with best clinical practice. However, we cannot accept liability for:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Outcomes of any treatment you perform on your own patients after training</li>
                <li>Decisions you make in your own clinical practice</li>
                <li>Indirect, consequential, or business losses arising from your attendance</li>
              </ul>
              <p className="mt-4">Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for fraud.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">10. Intellectual Property</h2>
              <p>All course materials, slide decks, videos, PDFs, and branded content supplied during training remain the intellectual property of Palm Springs Aesthetics Training. You may use them for personal study only. You must not reproduce, redistribute, sell, or teach from our materials without written permission.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">11. Governing Law</h2>
              <p>These Terms &amp; Conditions are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">12. Contact Us</h2>
              <p>For any questions about these terms, please contact:</p>
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