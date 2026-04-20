import type { Metadata } from "next";
import { Fraunces, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Palm Springs Aesthetics Training | CPD Accredited Courses in Cardiff",
  description:
    "CPD-accredited aesthetics training for medical professionals in Cardiff. Small groups, expert trainers, hands-on learning. Foundation Toxin courses and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${dancingScript.variable} antialiased bg-[#FAFAFA] text-[#0A0A0A]`}
      >
        {children}
      </body>
    </html>
  );
}