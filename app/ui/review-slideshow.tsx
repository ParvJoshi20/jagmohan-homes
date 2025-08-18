"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    text: `"I stayed here for almost all of the duration of my bachelor's degree and I can without a doubt say that there is no other place to stay in the area like Jagmohan Homes. This place was like a new home for me, away from home. The owner treats you like their friend and it doesn't feel like you're living anywhere else, it feels very homey. The rooms are spacious and the rent is very very reasonable."`,
    name: "PARV JOSHI",
    location: "JODHPUR",
    image: "/profile-image.jpeg",
  },
  {
    id: 2,
    text: `"I stayed here for almost all of the duration of my bachelor's degree and I can without a doubt say that there is no other place to stay in the area like Jagmohan Homes. This place was like a new home for me, away from home. The owner treats you like their friend and it doesn't feel like you're living anywhere else, it feels very homey. The rooms are spacious and the rent is very very reasonable."`,
    name: "SANYA MEHTA",
    location: "DELHI",
    image: "/profile-image.jpeg",
  },
  {
    id: 3,
    text: `"I stayed here for almost all of the duration of my bachelor's degree and I can without a doubt say that there is no other place to stay in the area like Jagmohan Homes. This place was like a new home for me, away from home. The owner treats you like their friend and it doesn't feel like you're living anywhere else, it feels very homey. The rooms are spacious and the rent is very very reasonable."`,
    name: "RAHUL SHARMA",
    location: "MUMBAI",
    image: "/profile-image.jpeg",
  },
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto px-4 lg:px-0">
      {/* Review Card */}
      <div className="overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.3)] shadow-black/30 p-4 lg:p-6 mx-2 lg:mx-6 text-white rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={reviews[currentIndex].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <p className="font-sans font-medium text-justify text-sm lg:text-base leading-relaxed">{reviews[currentIndex].text}</p>
            <div className="profile flex flex-row gap-4 items-center">
              <Image
                alt="photo of the reviewer"
                src={reviews[currentIndex].image}
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-300 lg:w-20 lg:h-20"
              />
              <div className="name flex flex-col">
                <h2 className="font-sans font-bold text-sm lg:text-base">{reviews[currentIndex].name}</h2>
                <h2 className="font-sans text-gray-300 text-xs lg:text-sm">{reviews[currentIndex].location}</h2>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute -left-2 lg:-left-10 top-1/2 -translate-y-1/2 p-2 bg-white text-black rounded-full hover:bg-gray-200 hover:cursor-pointer transition shadow-lg"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute -right-2 lg:-right-10 top-1/2 -translate-y-1/2 p-2 bg-white text-black rounded-full hover:bg-gray-200 hover:cursor-pointer transition shadow-lg"
      >
        <ChevronRight size={20} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
