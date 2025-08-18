"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Gallery of images (Add as many images as needed)
const images = [
  "/400x400 placeholder.svg", "/400x400 placeholder.svg", "/400x400 placeholder.svg", "/400x400 placeholder.svg",
  "/400x400 placeholder.svg", "/400x400 placeholder.svg", "/400x400 placeholder.svg", "/400x400 placeholder.svg",
  "/400x400 placeholder.svg", "/400x400 placeholder.svg", "/400x400 placeholder.svg", "/400x400 placeholder.svg",
  "/400x400 placeholder.svg", "/400x400 placeholder.svg", "/400x400 placeholder.svg", "/400x400 placeholder.svg",
];

const itemsPerTile = 4; // Number of images per slide
const totalTiles = Math.ceil(images.length / itemsPerTile); // Total number of slides

export default function ImageCarousel() {
  const [tileIndex, setTileIndex] = useState(0);

  // Get images for the current tile
  const currentImages = images.slice(
    tileIndex * itemsPerTile,
    tileIndex * itemsPerTile + itemsPerTile
  );

  // Go to next tile
  const nextTile = () => {
    setTileIndex((prev) => (prev + 1) % totalTiles);
  };

  // Go to previous tile
  const prevTile = () => {
    setTileIndex((prev) => (prev - 1 + totalTiles) % totalTiles);
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto flex items-center justify-center">
      {/* Image Slider */}
      <div className="relative flex w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={tileIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex w-full justify-center gap-4 mb-8"
          >
            {currentImages.map((src, i) => (
              <div key={i} className="flex-none w-[25%] p-2">
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={400}
                  height={400}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevTile}
        className="absolute left-2 -translate-y-1/2 z-10 bg-white text-black p-2 transition duration-500 hover:bg-[#c1b086] hover:text-white hover:cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextTile}
        className="absolute right-2 -translate-y-1/2 z-10 bg-white text-black p-2 transition duration-500 hover:bg-[#c1b086] hover:text-white hover:cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalTiles }).map((_, i) => (
          <button
            key={i}
            onClick={() => setTileIndex(i)}
            className={`h-3 w-3 rounded-full transition-all hover:cursor-pointer ${
              i === tileIndex ? "bg-[#c1b086]" : "bg-black/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
