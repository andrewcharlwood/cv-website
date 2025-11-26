'use client';

import {AnimatePresence, motion} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import React, {FC, memo, useEffect, useState} from 'react';

const navLinks = [
  {href: '#summary', label: 'About'},
  {href: '#skills', label: 'Skills'},
  {href: '#experience', label: 'Experience'},
  {href: '#education', label: 'Education'},
  {href: '#projects', label: 'Projects'},
];

const Navigation: FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 0.5}}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dash-dark/95 backdrop-blur-lg border-b border-dash-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{scale: 1.02}}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nhs-blue to-nhs-teal flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AC</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-dash-success rounded-full border-2 border-dash-dark" />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-semibold leading-tight">Andy Charlwood</p>
                <p className="text-xs text-dash-muted leading-tight">Healthcare Data Analytics</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="px-4 py-2 text-dash-text hover:text-white rounded-lg hover:bg-white/5
                           transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-nhs-teal
                                 group-hover:w-1/2 transition-all duration-300" />
                </motion.a>
              ))}

              {/* CTA Button */}
              <motion.a
                href="#contact-form"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="ml-4 px-5 py-2 bg-nhs-blue text-white rounded-lg font-medium
                         hover:bg-nhs-bright-blue transition-colors"
              >
                Contact
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-dash-card border border-dash-border text-dash-text
                       hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.2}}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-dash-dark/98 backdrop-blur-xl border-b border-dash-border shadow-xl">
              <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: index * 0.05}}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-dash-text hover:text-white hover:bg-white/5
                             rounded-lg transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact-form"
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: navLinks.length * 0.05}}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 mt-2 bg-nhs-blue text-white text-center rounded-lg
                           font-medium hover:bg-nhs-bright-blue transition-colors"
                >
                  Contact
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
