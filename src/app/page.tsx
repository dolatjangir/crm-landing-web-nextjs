// app/page.tsx

import CTA from "@/components/CTA/CTA";
import Ecosystem from "@/components/Ecosystem/Ecosystem";
import CoreFeatures from "@/components/Features/CoreFeatures";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Industries from "@/components/Industries/Industries";
import ProductGrid from "@/components/Products/ProductGrid";
import Whyus from "@/components/Whyus/Whyus";


export default function HomePage() {
  return (
    <div className="">
      
      <main className="flex flex-col py-[64px]">
        {/* Hero Section */}
        <Hero />

        {/* Ecosystem Overview */}
        <Ecosystem />

        {/* Industry-Specific CRM Products */}
        <ProductGrid />

        {/* Core Platform Features */}
        <CoreFeatures />

        {/* Industries Served */}
        <Industries />

        {/* Why Choose ibigdata */}
        <Whyus />

        {/* Call To Action */}
        <CTA />
      </main>

     
    </div>
  );
}
