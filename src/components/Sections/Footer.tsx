'use client';

import {motion} from 'framer-motion';
import {Github, Linkedin, Mail, MapPin} from 'lucide-react';
import React, {FC, memo} from 'react';

import {useScrollAnimation} from '@/hooks/useScrollAnimation';

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/andrewcharlwood/',
    label: 'LinkedIn',
  },
  {
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/andrewcharlwood',
    label: 'GitHub',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: 'mailto:andy@charlwood.xyz',
    label: 'Email',
  },
];

const Footer: FC = memo(() => {
  const currentYear = new Date().getFullYear();
  const {ref: contentRef, isVisible: contentVisible} = useScrollAnimation('footer-content');
  const {ref: bottomRef, isVisible: bottomVisible} = useScrollAnimation('footer-bottom');

  return (
    <footer className="relative bg-dash-dark border-t border-dash-border overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 94, 184, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 94, 184, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div
            className={`space-y-4 transition-all duration-500
                       ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nhs-blue to-nhs-teal flex items-center justify-center">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Andy Charlwood</h3>
                <p className="text-dash-muted text-sm">GPhC: 2211810</p>
              </div>
            </div>

            <p className="text-dash-muted leading-relaxed">
              Healthcare data analytics professional combining pharmacy expertise with
              advanced technical skills to drive population health improvements.
            </p>

            <div className="flex items-center gap-2 text-dash-muted">
              <MapPin className="w-4 h-4 text-nhs-teal" />
              <span>Norwich, Norfolk, UK</span>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`space-y-4 transition-all duration-500
                       ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{transitionDelay: '100ms'}}
          >
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Experience', 'Education', 'Projects'].map((item) => (
                <a
                  key={item}
                  className="text-dash-muted hover:text-nhs-light-blue transition-colors"
                  href={`#${item.toLowerCase() === 'about' ? 'summary' : item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div
            className={`space-y-4 transition-all duration-500
                       ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{transitionDelay: '200ms'}}
          >
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  aria-label={social.label}
                  className="p-3 bg-dash-card rounded-xl border border-dash-border text-dash-muted
                           hover:text-nhs-light-blue hover:border-nhs-blue/50 transition-all"
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  whileHover={{scale: 1.1, y: -2}}
                  whileTap={{scale: 0.95}}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <a
              className="inline-flex items-center gap-2 text-dash-muted hover:text-nhs-light-blue transition-colors"
              href="mailto:andy@charlwood.xyz"
            >
              <Mail className="w-4 h-4" />
              andy@charlwood.xyz
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          ref={bottomRef}
          className={`mt-12 pt-8 border-t border-dash-border transition-all duration-500
                     ${bottomVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{transitionDelay: '300ms'}}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dash-muted text-sm">
              &copy; {currentYear} Andy Charlwood. Built with Next.js & Tailwind CSS.
            </p>

            <div className="flex items-center gap-4 text-dash-muted text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-dash-success rounded-full animate-pulse" />
                Open to the right conversation
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
