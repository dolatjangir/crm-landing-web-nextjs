import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/providers/AOSProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollProgressBar from "@/components/common/indicators/ScrollProgressBar";
import ScrollUpButton from "@/components/common/scrollUpButton/ScrollUpButton";

export const metadata = {
  title: "ibigdata CRM",
  description: "AI-powered CRM platform",
  manifest: "/manifest.json",
};
export function generateViewport() {
  return {
    themeColor: "#1E88E5",
  };
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
         <head>
        {/* PWA & Apple */}
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
       <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        
      </head>
      <AOSProvider />
      <body className=" text-gray-900 antialiased hide-scrollbar">
        
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 ">


          {/* Header / Navigation */}
          <Header />
          <ScrollProgressBar position="sticky" top="top-[64px]" className=" max-md:hidden" zIndex="99" />
          {children}
          {/* Footer */}
          <Footer />
          <ScrollUpButton />
        </div>

      </body>
    </html>
  );
}
