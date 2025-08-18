"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 backdrop-blur-sm shadow-md 
        ${isScrolled ? "h-16 bg-white/60" : "h-24 bg-white/40"}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 lg:px-8 py-2">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/Logo-dark.png"
            alt="Logo"
            width={isScrolled ? 50 : 70}
            height={isScrolled ? 35 : 50}
            className="object-cover transition-all duration-300"
          />
          <Link href="/">
            <h1
              className={`text-black font-mono font-semibold transition-all duration-300 
              ${isScrolled ? "text-lg" : "text-xl"}`}
            >
              Jagmohan Homes
            </h1>
          </Link>
        </div>

        {/* Navigation for Large Screens */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            {["Rooms", "About Us", "Amenities", "Contact Us", "Gallery"].map(
              (item, index) => (
                <li key={index}>
                  <Link href="#">
                    <h2 className="text-black text-lg font-mono hover:underline transition-all duration-300">
                      {item}
                    </h2>
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown Menu) */}
      <nav
        className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-center gap-4 py-5">
          {["Rooms", "About Us", "Amenities", "Contact Us", "Gallery"].map(
            (item, index) => (
              <li key={index} className="w-full text-center">
                <Link href="#" onClick={() => setIsMenuOpen(false)}>
                  <h2 className="text-black text-lg font-mono hover:underline transition-all duration-300">
                    {item}
                  </h2>
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
