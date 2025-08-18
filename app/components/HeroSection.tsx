"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/hero-about.jpg",
    alt: "Exterior view of the PG",
    backgroundText: "ABOUT",
    title: "Comfortable & Secure Living",
    description: "A fully-furnished PG offering a homely experience for students and professionals.",
    buttonText: "Explore More",
    buttonLink: "/about",
  },
  {
    src: "/hero-accessibility.jpg",
    alt: "Accessibility and Location",
    backgroundText: "ACCESSIBILITY",
    title: "Easy Access & Prime Location",
    description: "Located near key transport hubs and essential amenities.",
    buttonText: "View Location",
    buttonLink: "/location",
  },
  {
    src: "/hero-rooms.jpg",
    alt: "Different types of rooms",
    backgroundText: "ROOMS",
    title: "Spacious & Well-Furnished Rooms",
    description: "Single, double, and dormitory options available with modern facilities.",
    buttonText: "View Rooms",
    buttonLink: "/rooms",
  },
  {
    src: "/hero-amenities.jpg",
    alt: "PG Amenities and Activities",
    backgroundText: "AMENITIES",
    title: "Top-Notch Amenities & Activities",
    description: "Common areas, high-speed WiFi, laundry, and recreational facilities.",
    buttonText: "Check Amenities",
    buttonLink: "/amenities",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000; // Change every 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen w-full">
      {/* Background Image with Transition */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content (Background Text + Main Content + Button) */}
      <div className="relative z-10 text-white text-center max-w-2xl mx-auto px-5">
        {/* Large Background Text */}
        <motion.h1
          key={slides[currentIndex].backgroundText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.2, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-[180px] font-extrabold uppercase opacity-10"
        >
          {slides[currentIndex].backgroundText}
        </motion.h1>

        {/* Title & Description */}
        <motion.h2
          key={slides[currentIndex].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold drop-shadow-lg"
        >
          {slides[currentIndex].title}
        </motion.h2>

        <motion.p
          key={slides[currentIndex].description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg mt-2 drop-shadow-md"
        >
          {slides[currentIndex].description}
        </motion.p>

        {/* Button */}
        <motion.a
          key={slides[currentIndex].buttonText}
          href={slides[currentIndex].buttonLink}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all"
        >
          {slides[currentIndex].buttonText}
        </motion.a>
      </div>

      {/* Thumbnail Indicator */}
      <div className="absolute bottom-5 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
