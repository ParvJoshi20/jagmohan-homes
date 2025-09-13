"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "/hero-rooms.jpg",
    alt: "Comfortable room interior",
    category: "rooms"
  },
  {
    src: "/section1-1.jpg",
    alt: "Common area view",
    category: "common-areas"
  },
  {
    src: "/section1-2.jpg",
    alt: "Dining area",
    category: "amenities"
  },
  {
    src: "/hero-about.jpg",
    alt: "Building exterior",
    category: "exterior"
  },
  {
    src: "/hero-amenities.jpg",
    alt: "Recreation facilities",
    category: "amenities"
  },
  {
    src: "/hero-accessibility.jpg",
    alt: "Accessible entrance",
    category: "exterior"
  },
  {
    src: "/section2-1.jpg",
    alt: "Garden view",
    category: "exterior"
  },
  {
    src: "/Terrace View.jpg",
    alt: "Terrace view",
    category: "amenities"
  },
  // Duplicate some images to show more gallery items
  {
    src: "/hero-rooms.jpg",
    alt: "Another room view",
    category: "rooms"
  },
  {
    src: "/section1-1.jpg",
    alt: "Study area",
    category: "common-areas"
  },
  {
    src: "/section1-2.jpg",
    alt: "Kitchen facilities",
    category: "amenities"
  },
  {
    src: "/hero-about.jpg",
    alt: "Front entrance",
    category: "exterior"
  }
];

const categories = [
  { id: "all", name: "All" },
  { id: "rooms", name: "Rooms" },
  { id: "common-areas", name: "Common Areas" },
  { id: "amenities", name: "Amenities" },
  { id: "exterior", name: "Exterior" }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/section2-1.jpg"
            alt="Jagmohan Homes Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Gallery</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Take a visual tour of our comfortable accommodations and facilities
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-[#c1b086] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">
              Explore Our Facilities
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-[#c1b086] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 px-4 py-2 rounded-lg">
                        <span className="text-gray-800 font-medium">View Image</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                width={800}
                height={600}
                className="object-contain max-h-[80vh] w-auto"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="bg-[#252e59] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Like What You See?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Experience the comfort and quality of Jagmohan Homes in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rooms"
              className="bg-[#c1b086] text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#252e59] transition-colors duration-300"
            >
              View Available Rooms
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#252e59] transition-colors duration-300"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}