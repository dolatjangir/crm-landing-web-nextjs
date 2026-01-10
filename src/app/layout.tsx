import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/providers/AOSProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollProgressBar from "@/components/common/indicators/ScrollProgressBar";

export const metadata = {
  title: "ibigdata CRM",
  description: "AI-powered CRM platform",
  manifest: "/manifest.json",
};
export function generateViewport() {
  return {
    themeColor: "#a752cc",
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
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
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
