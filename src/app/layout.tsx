"use client";
import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/providers/AOSProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollProgressBar from "@/components/common/indicators/ScrollProgressBar";


/* export const metadata: Metadata = {
  title: "ibigdata | Industry-Specific CRM Platform",
  description:
    "ibigdata is a unified CRM ecosystem offering industry-specific CRM solutions for real estate, consulting, travel, and more.",
  keywords: [
    "CRM platform",
    "industry specific CRM",
    "real estate CRM",
    "consultancy CRM",
    "travel CRM",
    "ibigdata",
  ],
  authors: [{ name: "ibigdata" }],
  openGraph: {
    title: "ibigdata CRM Platform",
    description:
      "One CRM platform. Multiple industry-specific solutions.",
    url: "https://ibigdata.in",
    siteName: "ibigdata",
    type: "website",
  },
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <AOSProvider />
      <body className="bg-white text-gray-900 antialiased hide-scrollbar">
        <div className=" bg-white">


          {/* Header / Navigation */}
          <Header />
          <ScrollProgressBar position="sticky" top="top-[64px]" className=" max-md:hidden" zIndex="99" />
          {children}
          {/* Footer */}
          <Footer />
        </div>

      </body>
    </html>
  );
}
