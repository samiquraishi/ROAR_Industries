"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MobileMenu from "@/components/MobileMenu"; 

const navItems = [
  { label: "HOME", href: "/" },
  { label: "FRAMEWORK", href: "/framework" },
  { label: "DIVISIONS", href: "/divisions" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const divisionItems = [
  { label: "Devint", href: "/divisions/devint" },
  { label: "Iris Studios", href: "/divisions/iris" },
  { label: "Bionic Media", href: "/divisions/bionic" },
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      {/* Header bar */}
      <div className="fixed top-0 left-0 w-full z-50 mix-blend-difference backdrop-blur-md pointer-events-none">
        <div className="container !max-w-full">
          <motion.div
            className="flex justify-between items-start py-6 px-6 overflow-visible"
            onMouseLeave={() => setIsDivisionsOpen(false)}
            initial={false}
            animate={{ height: isDivisionsOpen ? 155 : 75 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: 80 }}
          >
            {/* Logo */}
            <div className="pointer-events-auto">
              <Link href="/">
                <span className="text-sm font-medium text-white">
                  ROAR INDUSTRIES
                </span>
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-start gap-8 pointer-events-auto">
              {navItems.map(({ label, href }) =>
                label === "DIVISIONS" ? (
                  <div
                    key={label}
                    className="flex flex-col"
                    onMouseEnter={() => setIsDivisionsOpen(true)}
                    onMouseLeave={() => setIsDivisionsOpen(false)}
                  >
                    <Link
                      href={href}
                      className="text-sm text-gray-300 hover:text-white transition-colors relative group"
                    >
                      {label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
                    </Link>

                    <AnimatePresence>
                      {isDivisionsOpen && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                            hidden: { opacity: 0, height: 0 },
                            visible: {
                              opacity: 1,
                              height: "auto",
                              transition: {
                                duration: 0.18,
                                ease: [0.16, 1, 0.3, 1],
                                when: "beforeChildren",
                                staggerChildren: 0.08,
                              },
                            },
                          }}
                          className="flex flex-col gap-2 pt-4"
                        >
                          {divisionItems.map((item) => (
                            <motion.li
                              key={item.label}
                              variants={{
                                hidden: { opacity: 0, y: -6 },
                                visible: {
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                    duration: 0.18,
                                    ease: [0.16, 1, 0.3, 1],
                                  },
                                },
                              }}
                            >
                              <Link
                                href={item.href}
                                className="text-sm text-gray-300 hover:text-white transition-colors relative group"
                              >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
                  </Link>
                )
              )}
            </nav>

            {/* Right side — Contact + Mobile toggle */}
            <div className="flex gap-4 items-center pointer-events-auto uppercase">
              <Link
                href="/contact"
                className="text-sm text-gray-300 hover:text-white transition-colors hidden md:inline-flex items-center gap-1 relative group"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3 h-3" />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white group-hover:w-[4.5rem] transition-all duration-300" />
              </Link>

              <MobileMenu
                navItems={navItems}
                isOpen={isMenuOpen}
                onToggle={() => setIsMenuOpen((prev) => !prev)}
                onClose={() => setIsMenuOpen(false)}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;