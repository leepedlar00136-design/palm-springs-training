"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };

export default function PrivacyPolicy() {
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
            <h1 className="font-fraunces text-4xl md:text-6xl font-light leading-tight mb-4">Privacy Policy</h1>
            <p className="text-white/50 text-sm">Last updated: April 2026</p>
          </div>

          <div className="space-y-10 text-white/75 leading-relaxed">

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">1. Introduction</h2>
              <p>Palm Springs Aesthetics Training (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting and respecting your privacy. This policy explains how we collect, use, store, and protect your personal information when you interact with our website or training services.</p>
              <p className="mt-3">For the purposes of UK GDPR and the Data Protection Act 2018, the data controller is Lee Pedlar, trading as Palm Springs Aesthetics Training, Mill Farm Industrial Estate, Lisvane, Cardiff, CF14 0SH.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">2. Information We Collect</h2>
              <p>We may collect and process the following types of personal data:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Contact details: name, email address, telephone number</li>
                <li>Professional information: your medical registration body (NMC, GMC, GDC, GPhC, HCPC), professional role, and registration number (where required for course eligibility)</li>
                <li>Communication records: messages sent via our contact form, emails, or WhatsApp</li>
                <li>Course booking details: courses booked, payment confirmations, attendance records</li>
                <li>Photography and video: images and recordings taken during training sessions (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">3. How We Use Your Information</h2>
              <p>We use your personal data to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Respond to your enquiries and provide the training services you have requested</li>
                <li>Process course bookings and payments</li>
                <li>Issue CPD certificates upon successful course completion</li>
                <li>Provide post-course support via WhatsApp or email</li>
                <li>Verify your eligibility as a medical professional</li>
                <li>Send you relevant updates about your training (we will not send marketing communications without your explicit consent)</li>
                <li>Comply with our legal, clinical, and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">4. Legal Basis for Processing</h2>
              <p>We process your data under the following legal bases:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-white">Contract:</strong> To fulfil the training agreement between us.</li>
                <li><strong className="text-white">Legitimate interest:</strong> To operate our business, respond to enquiries, and improve our services.</li>
                <li><strong className="text-white">Consent:</strong> For any use of photography or video footage featuring you in marketing or promotional materials.</li>
                <li><strong className="text-white">Legal obligation:</strong> To meet regulatory and clinical record-keeping requirements.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">5. Sharing Your Information</h2>
              <p>We do not sell your personal data. We may share your data only with:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>CPD accreditation bodies, where required to issue your certificate</li>
                <li>Trusted service providers (e.g. email delivery, payment processing, website hosting) who are bound by strict data protection terms</li>
                <li>Regulatory or legal authorities, where required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">6. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Enquiry data: up to 12 months if no booking proceeds</li>
                <li>Student records and CPD certificates: 8 years (in line with NHS clinical record-keeping best practice)</li>
                <li>Financial records: 7 years (as required by HMRC)</li>
                <li>Photography and video: until you withdraw consent</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">7. Your Rights</h2>
              <p>Under UK GDPR you have the right to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to lawful retention periods)</li>
                <li>Object to or restrict processing in certain circumstances</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Receive your data in a portable format</li>
                <li>Lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) at www.ico.org.uk</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us using the details below.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">8. Cookies</h2>
              <p>This website does not currently use tracking or analytics cookies. Only essential cookies required for the site to function correctly are used. If we introduce analytics in the future, we will update this policy and request your consent via a cookie banner.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">9. Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or misuse. All data is stored on secure servers within the UK or EU.</p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-light text-white mb-4">10. Contact Us</h2>
              <p>If you have any questions about this policy or how we handle your data, please contact:</p>
              <div className="mt-4 pl-6 border-l-2 border-[#C9A961]/40">
                <p>Lee Pedlar &mdash; Data Protection Lead</p>
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