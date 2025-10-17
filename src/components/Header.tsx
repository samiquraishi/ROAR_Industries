"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Equal, ArrowUpRight } from "lucide-react";

const navItems = [
  {
    label: "About",
    href: "/about",
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
    label: "Contact",
    href: "/contact",
  },
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.2,
      }}
    >
      {/* Background header with logo */}
      <div className="fixed top-0 left-0 w-full z-40 mix-blend-difference backdrop-blur-md pointer-events-none">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div className="pointer-events-auto">
              <Link href="/">
                <span className="text-3xl font-medium uppercase text-white">
                  Roar&nbsp; Industries
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Menu button and CTA */}
      <div className="fixed top-0 left-0 z-50 w-full pointer-events-none">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex gap-4 items-center pointer-events-auto">
              {/* Menu Button */}
              <motion.div
                whileHover={{ rotate: 270 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="size-8 border rounded-full inline-flex items-center justify-center bg-stone-300 cursor-pointer"
              >
                {isMenuOpen ? (
                  <X size={26} className="text-stone-800" />
                ) : (
                  <Equal size={26} className="text-stone-800" />
                )}
              </motion.div>

              {/* Get Started Button */}
              <div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#540000] hover:bg-transparent border-[#540000] border-2 h-9 py-3 px-5 text-sm text-white hover:text-[#540000] font-medium hidden md:inline-flex items-center transition-all duration-200"
                >
                  <Link href="/contact">Contact Us</Link>
                </motion.button>
              </div>
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
            className="fixed top-0 left-0 w-full h-screen bg-stone-300  z-30 pt-8 overflow-y-auto"
          >
            <nav className="mt-20 flex flex-col">
              {navItems.map(({ label, href }) => (
                <Link
                  href={href}
                  key={label}
                  className="text-stone-800 group/nav-item relative isolate"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="container flex items-center justify-between !max-w-full border-b  border-stone-400 py-4 md:py-6 px-6 transition-colors">
                    <span className="text-lg md:text-2xl group-hover/nav-item:pl-4 transition-all duration-300 ">
                      {label}
                    </span>
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="absolute left-0 w-full h-0 -z-10  bg-stone-400 group-hover/nav-item:h-full transition-all duration-300 bottom-0"></div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
