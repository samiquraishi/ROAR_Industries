"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Equal, ArrowUpRight } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Framework",
    href: "/framework",
  },
  {
    label: "Divisions",
    href: "/divisions",
  },
  {
    label: "About",
    href: "/about",
  }
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-hide menu when switching to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
     
    >
      {/* Header with backdrop blur and mix-blend-difference */}
      <div className="fixed top-0 left-0 w-full z-40 mix-blend-difference backdrop-blur-md pointer-events-none">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center px-6">
            {/* Left side - Logo */}
            <div className="pointer-events-auto">
              <Link href="/">
                <span className="text-sm font-medium text-white">
                  ROAR INDUSTRIES
                </span>
              </Link>
            </div>

            {/* Center - Navigation (hidden on small screens) */}
            <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-white hover:text-gray-300 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right side - Contact and Menu */}
            <div className="flex gap-4 items-center pointer-events-auto">
              {/* Contact Button */}
              <Link
                href="/contact"
                className="text-sm text-white hover:text-gray-300 transition-colors hidden md:inline-flex items-center gap-1"
              >
                Contact
                <ArrowUpRight className="w-3 h-3" />
              </Link>

              {/* Mobile Menu Button */}
              <motion.div
                whileHover={{ rotate: 270 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden size-8 inline-flex items-center justify-center cursor-pointer mix-blend-difference"
              >
                {isMenuOpen ? (
                  <X size={26} className="text-white" />
                ) : (
                  <Equal size={26} className="text-white" />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-page Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-black  z-30 pt-8 overflow-y-auto"
          >
            <nav className="mt-20 flex flex-col">
              {navItems.map(({ label, href }) => (
                <Link
                  href={href}
                  key={label}
                  className="text-stone-300 group/nav-item relative isolate"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="container flex items-center justify-between !max-w-full border-b  border-stone-900 py-4 px-6 transition-colors">
                    <span className="text-lg group-hover/nav-item:pl-4 transition-all duration-300 ">
                      {label}
                    </span>
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="absolute left-0 w-full h-0 -z-10  bg-[#1a1a1a] group-hover/nav-item:h-full transition-all duration-300 bottom-0"></div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
