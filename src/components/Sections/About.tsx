'use client';

import {motion} from 'framer-motion';
import {Award, Briefcase, GraduationCap, MapPin} from 'lucide-react';
import React, {FC, memo} from 'react';

import {useScrollAnimation} from '@/hooks/useScrollAnimation';

const InfoCard: FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  index: number;
  isVisible: boolean;
}> = memo(({icon, label, value, index, isVisible}) => (
  <div
    className={`flex items-center gap-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10
               hover:bg-white/10 transition-all duration-500
               ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    style={{transitionDelay: `${index * 100}ms`}}
  >
    <div className="p-2 rounded-lg bg-nhs-blue/20 text-nhs-light-blue">
      {icon}
    </div>
    <div>
      <p className="text-sm text-dash-muted">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
));
InfoCard.displayName = 'InfoCard';

const About: FC = memo(() => {
  const {ref: storyRef, isVisible: storyVisible} = useScrollAnimation('about-story');
  const {ref: cardsRef, isVisible: cardsVisible} = useScrollAnimation('about-cards');

  return (
    <section className="relative py-24 overflow-hidden" id="summary">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nhs-dark-blue via-nhs-blue to-nhs-teal" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" height="40" patternUnits="userSpaceOnUse" width="40">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%" />
        </svg>
      </div>

      {/* Floating shapes - keep Framer Motion for continuous animation */}
      <motion.div
        animate={{scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3]}}
        className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        transition={{duration: 8, repeat: Infinity}}
      />
      <motion.div
        animate={{scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2]}}
        className="absolute bottom-10 left-10 w-48 h-48 bg-nhs-teal/20 rounded-full blur-3xl"
        transition={{duration: 10, repeat: Infinity}}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div
            ref={storyRef}
            className={`transition-all duration-600
                       ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20
                           rounded-full text-white/90 text-sm font-medium mb-6">
              About Me
            </span>

            <h2 className="text-display-sm font-bold text-white mb-6">
              From Pharmacy Counter to Population Health Analytics
            </h2>

            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                My journey started behind the counter at Tesco Pharmacy in Great Yarmouth. It was there I discovered
                my passion for automation when I built my first software solution—a system to automatically cross-reference
                prescription requests with dispensed items, saving 6 hours of staff time weekly.
              </p>

              <p>
                That spark led me to become proficient in Python and SQL, skills that now drive significant impact.
                I've developed algorithms identifying <span className="text-white font-semibold">£2.8M in annual savings</span>,
                automated processes that reduced months of manual work to <span className="text-white font-semibold">just 3 days</span>,
                and built dashboards serving clinicians across the integrated care system.
              </p>

              <p>
                Pivoting from community pharmacy to health commissioning was driven by a realisation: I don't need to be
                patient-facing to facilitate excellent healthcare. Now, leading data analytics for medicines optimisation,
                I impact outcomes at a regional level—transforming how we use data to improve prescribing quality
                and address health inequalities.
              </p>
            </div>

            <a
              href="#experience"
              className={`inline-flex items-center gap-2 mt-8 text-white hover:text-nhs-light-blue transition-all duration-500 group
                         ${storyVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{transitionDelay: '400ms'}}
            >
              <span className="font-medium">View my experience</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </a>
          </div>

          {/* Right: Info cards */}
          <div ref={cardsRef} className="space-y-4">
            <InfoCard
              icon={<MapPin className="w-5 h-5" />}
              index={0}
              isVisible={cardsVisible}
              label="Location"
              value="Norwich, Norfolk, UK"
            />
            <InfoCard
              icon={<Briefcase className="w-5 h-5" />}
              index={1}
              isVisible={cardsVisible}
              label="Current Role"
              value="Deputy Head of Population Health & Data Analysis"
            />
            <InfoCard
              icon={<GraduationCap className="w-5 h-5" />}
              index={2}
              isVisible={cardsVisible}
              label="Education"
              value="MPharm (Hons), University of East Anglia"
            />
            <InfoCard
              icon={<Award className="w-5 h-5" />}
              index={3}
              isVisible={cardsVisible}
              label="Registration"
              value="GPhC Registered Pharmacist (2211810)"
            />

            {/* Quote card */}
            <div
              className={`p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mt-6 transition-all duration-500
                         ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{transitionDelay: '500ms'}}
            >
              <blockquote className="text-white/90 italic">
                "My motivation has always been to facilitate excellent healthcare. I've just found a more
                impactful way to channel it—through data."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;
