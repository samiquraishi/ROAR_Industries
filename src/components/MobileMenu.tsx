"use client";

import { FC } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Equal, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({
  navItems,
  isOpen,
  onToggle,
  onClose,
}) => {
  return (
    <>
      {/* Hamburger */}
      <motion.div
        whileHover={{ rotate: 270 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={onToggle}
        className="md:hidden size-8 inline-flex items-center justify-center cursor-pointer"
      >
        {isOpen ? (
          <X size={26} className="text-white" />
        ) : (
          <Equal size={26} className="text-white" />
        )}
      </motion.div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full h-screen bg-black z-[45] pt-8 overflow-y-auto"
              >
                <nav className="mt-20 flex flex-col">
                  {navItems.map(({ label, href }) => (
                    <Link
                      href={href}
                      key={label}
                      className="text-stone-300 group/nav-item relative isolate"
                      onClick={onClose}
                    >
                      <div className="container flex items-center justify-between !max-w-full border-b border-stone-900 py-4 px-6 transition-colors">
                        <span className="text-lg group-hover/nav-item:pl-4 transition-all duration-300">
                          {label}
                        </span>
                        <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div className="absolute left-0 w-full h-0 -z-10 bg-[#1a1a1a] group-hover/nav-item:h-full transition-all duration-300 bottom-0" />
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default MobileMenu;