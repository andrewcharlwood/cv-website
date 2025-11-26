'use client';

import {motion} from 'framer-motion';
import {Building2, Calendar, ChevronDown, ChevronUp} from 'lucide-react';
import React, {FC, memo, useState} from 'react';

import {useScrollAnimation} from '@/hooks/useScrollAnimation';

interface ExperienceItem {
  id: string;
  date: string;
  title: string;
  company: string;
  companyColor: string;
  summary: string;
  achievements: string[];
  isCurrent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 'deputy-head',
    date: 'July 2024 - Present',
    title: 'Deputy Head of Population Health & Data Analysis',
    company: 'NHS Norfolk & Waveney ICB',
    companyColor: 'nhs-blue',
    summary: 'Lead data analytics strategy for medicines optimisation, developing bespoke datasets and analytical frameworks. Acted as Interim Head (May-Sept 2025) reporting to Associate Director of Pharmacy.',
    achievements: [
      'Managed £220M prescribing budget with sophisticated forecasting models',
      'Designed Python algorithm identifying £2.8M annual savings across 14,000 patients',
      'Automated incentive scheme analysis: months → 3 days processing time',
      'Created comprehensive opioid monitoring dashboard for clinical safety',
      'Developed £14.6M QIPP efficiency savings target, achieving over-target performance',
    ],
    isCurrent: true,
  },
  {
    id: 'high-cost-drugs',
    date: 'May 2022 - June 2024',
    title: 'Medicines Optimisation Pharmacist',
    company: 'NHS Norfolk & Waveney ICB',
    companyColor: 'nhs-blue',
    summary: 'Led implementation of NICE technology appraisals and high-cost drug pathways, ensuring patient access while optimising care pathways.',
    achievements: [
      'Automated Blueteq form creation: 70% reduction in forms, saving 30 hours monthly',
      'Integrated Blueteq data with secondary care databases for accurate tracking',
      'Developed clinical pathways for rheumatology, ophthalmology, and gastroenterology',
      'Created Python-based Sankey chart analysis for patient journey visualisation',
    ],
  },
  {
    id: 'pharmacy-manager',
    date: 'Nov 2017 - May 2022',
    title: 'Pharmacy Manager',
    company: 'Tesco Pharmacy',
    companyColor: 'nhs-bright-blue',
    summary: 'Managed all pharmacy operations with full autonomy, leading regional initiatives and contributing to national improvements.',
    achievements: [
      'Designed national asthma screening solution: 30-60 mins saved daily per pharmacy',
      'Created induction training eLearning modules deployed across Tesco pharmacy estate',
      'Led NMS delivery initiatives achieving target performance across region',
      'Served on Local Pharmaceutical Committee supporting Norfolk\'s community pharmacies',
    ],
  },
  {
    id: 'duty-manager',
    date: 'Aug 2016 - Oct 2017',
    title: 'Duty Pharmacy Manager',
    company: 'Tesco Pharmacy',
    companyColor: 'nhs-bright-blue',
    summary: 'Progressed rapidly from newly qualified pharmacist to Acting Pharmacy Manager within two months.',
    achievements: [
      'Co-led initiatives for NMS and asthma referrals across region',
      'Built first automation solution for prescription request tracking',
    ],
  },
  {
    id: 'pre-reg',
    date: 'July 2015 - July 2016',
    title: 'Pre-Registration Pharmacist',
    company: 'Paydens Pharmacy',
    companyColor: 'nhs-teal',
    summary: 'Completed professional training in challenging, service-rich environment.',
    achievements: [
      'Increased NMS completion rates from <10% to 50-60% through process improvement',
      'Initiated Patient Group Directions for NRT, EHC, and chlamydia services',
    ],
  },
];

const ExperienceCard: FC<{
  experience: ExperienceItem;
  index: number;
  isLast: boolean;
  isVisible: boolean;
}> = memo(({experience, index, isLast, isVisible}) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <div
      className={`relative pl-8 md:pl-12 transition-all duration-500
                 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
      style={{transitionDelay: `${index * 100}ms`}}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-dash-border to-transparent" />
      )}

      {/* Timeline dot */}
      <div className={`absolute left-0 md:left-2 top-1 w-6 h-6 rounded-full border-4 border-dash-bg
                      ${experience.isCurrent ? 'bg-nhs-teal animate-pulse' : 'bg-dash-card border-dash-border'}`}>
        {experience.isCurrent && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-dash-success rounded-full animate-ping" />
        )}
      </div>

      {/* Card */}
      <div className={`bg-dash-card/70 backdrop-blur-sm rounded-xl border border-dash-border
                      hover:border-${experience.companyColor}/50 transition-all duration-300 overflow-hidden`}>
        {/* Header */}
        <button
          className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-nhs-blue/50 rounded-t-xl"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              {/* Date badge */}
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-dash-muted" />
                <span className="text-sm text-dash-muted">{experience.date}</span>
                {experience.isCurrent && (
                  <span className="px-2 py-0.5 bg-dash-success/20 text-dash-success text-xs font-medium rounded-full">
                    Current
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>

              {/* Company */}
              <div className="flex items-center gap-2">
                <Building2 className={`w-4 h-4 text-${experience.companyColor}`} />
                <span className={`text-${experience.companyColor} font-medium`}>{experience.company}</span>
              </div>
            </div>

            {/* Expand button */}
            <div className="p-2 rounded-lg bg-dash-dark border border-dash-border">
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-dash-muted" />
              ) : (
                <ChevronDown className="w-5 h-5 text-dash-muted" />
              )}
            </div>
          </div>
        </button>

        {/* Expandable content - keep Framer Motion for expand/collapse interaction */}
        <motion.div
          animate={{height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0}}
          className="overflow-hidden"
          initial={false}
          transition={{duration: 0.3}}
        >
          <div className="px-6 pb-6">
            {/* Summary */}
            <p className="text-dash-muted mb-4">{experience.summary}</p>

            {/* Achievements */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-dash-text uppercase tracking-wider">Key Achievements</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    animate={{opacity: 1, x: 0}}
                    className="flex items-start gap-3 text-dash-muted"
                    initial={{opacity: 0, x: -10}}
                    transition={{delay: idx * 0.05}}
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-nhs-teal flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});
ExperienceCard.displayName = 'ExperienceCard';

const ExperienceTimeline: FC = memo(() => {
  const {ref: headerRef, isVisible: headerVisible} = useScrollAnimation('experience-header');
  const {ref: timelineRef, isVisible: timelineVisible} = useScrollAnimation('experience-timeline');
  const {ref: linkRef, isVisible: linkVisible} = useScrollAnimation('experience-link');

  return (
    <section className="relative py-24 bg-dash-bg overflow-hidden" id="experience">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 94, 184, 0.5) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-500
                     ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-nhs-blue/10 border border-nhs-blue/20 rounded-full
                         text-nhs-light-blue text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-display-sm font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-dash-muted max-w-2xl mx-auto">
            From community pharmacy to NHS leadership—a journey of continuous growth and innovation
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experiences.length - 1}
              isVisible={timelineVisible}
            />
          ))}
        </div>

        {/* Education link */}
        <div
          ref={linkRef}
          className={`mt-12 text-center transition-all duration-500
                     ${linkVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <a
            className="inline-flex items-center gap-2 text-dash-muted hover:text-nhs-light-blue transition-colors group"
            href="#education"
          >
            <span>View education & qualifications</span>
            <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});

ExperienceTimeline.displayName = 'ExperienceTimeline';
export default ExperienceTimeline;
