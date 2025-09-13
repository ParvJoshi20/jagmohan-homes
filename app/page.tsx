import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import Section1 from "./components/introduction";
import Section2 from "./components/amenities";
import Section3 from "./components/rooms";
import Section4 from "./components/reviews";
import Section5 from "./components/gallery";
import Section6 from "./components/location";
import Footer from "./components/footer";

"use client";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  if (showLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <section className="py-8 md:py-12 lg:py-16">
          <Section1 />
        </section>
        
        {/* About Preview Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <div className="w-20 h-1 bg-[#c1b086] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              About Jagmohan Homes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our story, values, and commitment to providing exceptional accommodation services for students and professionals.
            </p>
            <a
              href="/about"
              className="inline-block bg-[#c1b086] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#252e59] transition-colors duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </section>

        <section className="py-8 md:py-12 lg:py-16">
          <Section2 />
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <Section3 />
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <Section4 />
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <Section5 />
        </section>
        
        {/* Gallery Preview Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <div className="w-20 h-1 bg-[#c1b086] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Explore Our Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Take a visual tour of our comfortable rooms, modern amenities, and beautiful facilities.
            </p>
            <a
              href="/gallery"
              className="inline-block bg-[#c1b086] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#252e59] transition-colors duration-300"
            >
              View All Photos
            </a>
          </div>
        </section>

        <section className="py-8 md:py-12 lg:py-16">
          <Section6 />
        </section>
        
        {/* Contact Preview Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-[#252e59] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for inquiries, bookings, or to schedule a visit to our facilities.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#c1b086] text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#252e59] transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
