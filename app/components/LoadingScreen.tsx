"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onLoadingComplete, 500); // Wait for exit animation
    }, 2500); // Show loading for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1,
                ease: "easeOut"
              }}
              className="mb-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/logo-dark.png"
                  alt="Jagmohan Homes Logo"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </motion.div>
            </motion.div>

            {/* Text Animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5
              }}
            >
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
                Jagmohan Homes
              </h1>
              <p className="text-gray-600 font-sans">
                Your Home Away From Home
              </p>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <div className="flex justify-center space-x-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="w-3 h-3 bg-[#c1b086] rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}