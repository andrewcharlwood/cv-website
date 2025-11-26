'use client';

import {Award, BookOpen, GraduationCap} from 'lucide-react';
import React, {FC, memo} from 'react';

import {useScrollAnimation} from '@/hooks/useScrollAnimation';

interface EducationItem {
  icon: React.ReactNode;
  title: string;
  institution: string;
  date: string;
  grade?: string;
  details?: string[];
}

const educationItems: EducationItem[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Mary Seacole Leadership Programme',
    institution: 'NHS Leadership Academy',
    date: 'April - October 2018',
    grade: '78%',
    details: [
      'Formal NHS leadership qualification',
      'Healthcare leadership approaches and change management',
      'System-level strategic thinking',
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Master of Pharmacy (MPharm)',
    institution: 'University of East Anglia',
    date: '2011 - 2015',
    grade: '2:1 Honours',
    details: [
      'Independent research project on drug delivery cocrystals (75.1%)',
      'OSCE clinical skills assessment (80%)',
      'President of Pharmacy Society',
    ],
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'A-Levels',
    institution: 'Highworth Grammar School',
    date: '2009 - 2011',
    grade: 'Maths (A*), Chemistry (B), Politics (C)',
  },
];

const EducationCard: FC<{item: EducationItem; index: number; isVisible: boolean}> = memo(({item, index, isVisible}) => (
  <div
    className={`group relative bg-dash-card/50 backdrop-blur-sm rounded-xl border border-dash-border
               p-6 hover:border-nhs-teal/50 transition-all duration-500
               ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    style={{transitionDelay: `${index * 100}ms`}}
  >
    {/* Hover glow */}
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity
                    bg-gradient-to-br from-nhs-teal/5 to-transparent -z-10 blur-xl" />

    <div className="flex items-start gap-4">
      {/* Icon */}
      <div className="p-3 rounded-xl bg-nhs-teal/10 text-nhs-teal border border-nhs-teal/20">
        {item.icon}
      </div>

      <div className="flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-nhs-teal">{item.institution}</p>
          </div>
          {item.grade && (
            <span className="px-3 py-1 bg-dash-success/10 text-dash-success text-sm font-semibold rounded-lg whitespace-nowrap">
              {item.grade}
            </span>
          )}
        </div>

        {/* Date */}
        <p className="text-sm text-dash-muted mb-3">{item.date}</p>

        {/* Details */}
        {item.details && (
          <ul className="space-y-1.5">
            {item.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-dash-muted">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-nhs-teal flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
));
EducationCard.displayName = 'EducationCard';

const Education: FC = memo(() => {
  const {ref: headerRef, isVisible: headerVisible} = useScrollAnimation('education-header');
  const {ref: cardsRef, isVisible: cardsVisible} = useScrollAnimation('education-cards');

  return (
    <section className="relative py-24 bg-dash-dark overflow-hidden" id="education">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 164, 153, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 164, 153, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-500
                     ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-nhs-teal/10 border border-nhs-teal/20 rounded-full
                         text-nhs-teal text-sm font-medium mb-4">
            Education & Qualifications
          </span>
          <h2 className="text-display-sm font-bold text-white mb-4">
            Academic Background
          </h2>
        </div>

        {/* Education cards */}
        <div ref={cardsRef} className="space-y-6">
          {educationItems.map((item, index) => (
            <EducationCard key={item.title} item={item} index={index} isVisible={cardsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
});

Education.displayName = 'Education';
export default Education;
