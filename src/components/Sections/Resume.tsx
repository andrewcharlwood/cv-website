import {Award, Building2, Calendar, GraduationCap} from 'lucide-react';
import React, {FC, memo, useCallback,useEffect, useMemo, useRef, useState} from 'react';

import Section from '@/components/Layout/Section';
import ReadMore from '@/components/ReadMore';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent} from '@/components/ui/card';
import {education, experience, SectionId} from '@/data/data';
import {TimelineItem as TimelineItemType} from '@/data/dataDef';


const getEmployerColor = (location: string): string => {
  const colorMap: { [key: string]: string } = {
    'NHS Norfolk and Waveney Integrated Care Board': 'bg-blue-500',
    'Tesco Pharmacy': 'bg-red-500',
    'Paydens Pharmacy': 'bg-green-500',
    'University of East Anglia': 'bg-indigo-500',
    'Highworth Grammar School': 'bg-cyan-500',
  };

  return colorMap[location] || 'bg-slate-500';
};

const formatDate = (dateString: string): { month: string; year: string } => {
  const parts = dateString.split(' ');
  return {
    month: parts[parts.length - 2],
    year: parts[parts.length - 1] || ''
  };
};

interface TimelineItemProps {
  item: TimelineItemType;
  highlightedPlace: string | null;
  onHighlight: (place: string | null) => void;
  type: 'education' | 'work';
  isLastInSection?: boolean;
  isFirstItem?: boolean;
}


interface TimelineItemProps {
  item: TimelineItemType;
  highlightedPlace: string | null;
  onHighlight: (place: string | null) => void;
  type: 'education' | 'work';
  isLastInSection?: boolean;
  isFirstItem?: boolean;
}

const TimelineItem: FC<TimelineItemProps> = memo(({
                                                    item,
                                                    highlightedPlace,
                                                    onHighlight,
                                                    type,
                                                    isLastInSection,
                                                    isFirstItem
                                                  }) => {
  const {title, date, location, content, grade} = item;
  const itemColor = getEmployerColor(location);
  const isHighlighted = highlightedPlace === location;
  const isDimmed = highlightedPlace !== null && !isHighlighted;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const dateInfo = isFirstItem ? {month: "Current", year: ""} : formatDate(date);

  useEffect(() => {
    const card = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
      }
    );

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, []);

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    // If the click is on a read-more button, don't handle the highlighting
    if (!(e.target as HTMLElement).closest('.read-more-button')) {
      // If clicking the currently highlighted card, remove highlight
      if (isHighlighted) {
        onHighlight(null);
      } else {
        // Otherwise, highlight this card's location
        onHighlight(location);
      }
    }
  }, [onHighlight, location, isHighlighted]);

  return (
    <div
       className={`relative flex gap-4 transition duration-700 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        ${isDimmed ? 'opacity-30' : ''}`}
      ref={cardRef}
    >
      {/* Timeline marker - Hidden on mobile */}
      <div className="hidden md:flex relative flex-col items-center">
        <div
          className={`absolute top-0 h-full w-1 ${itemColor.replace('bg-', 'bg-opacity-80 bg-')}
          ${isLastInSection ? 'h-[calc(135%+20px)]' : ''}`}
        />
        <div
          className={`z-10 flex h-12 min-w-24 items-center justify-center rounded-full ${itemColor} text-white
          transition-transform duration-300 px-4
          ${isHighlighted ? 'ring-4 ring-offset-2 ring-offset-neutral-100' : ''}`}>
          <div className="flex flex-col items-center justify-center text-xs font-semibold">
            <span className="uppercase">{dateInfo.month}</span>
            <span>{dateInfo.year}</span>
          </div>
        </div>
      </div>

      {/* Card content */}
      <Card
        className={`group relative flex-1 mb-8 last:mb-0 w-full transition-all duration-300
        hover:shadow-lg cursor-pointer
        ${isHighlighted ? 'scale-102 shadow-lg' : ''}`}
        onClick={handleCardClick}>
        <div className={`absolute left-0 top-0 h-full w-1 ${itemColor}`} />
        <CardContent className="pt-6">
          <div className="mb-4 w-full">
            <h3
              className="text-xl md:text-2xl font-bold text-neutral-800 group-hover:text-neutral-600
                         transition-colors duration-300 break-words">
              {title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-3">
              <Badge
                className={`flex items-center gap-1 ${itemColor} text-white
                  transition-all duration-300 break-all
                  ${isHighlighted ? 'ring-2 ring-offset-2' : ''}`}
                variant="secondary">
                {type === 'education' ? (
                  <GraduationCap className="h-3 w-3 flex-shrink-0" />
                ) : (
                  <Building2 className="h-3 w-3 flex-shrink-0" />
                )}
                <span className="break-all">{location}</span>
              </Badge>
              <Badge
                className="flex items-center gap-1 hover:bg-neutral-200 transition-colors duration-300"
                variant="outline">
                <Calendar className="h-3 w-3 flex-shrink-0" />
                <span className="break-all">{date}</span>
              </Badge>
              {grade && (
                <Badge
                  className="flex items-center gap-1 hover:bg-neutral-200 transition-colors duration-300"
                  variant="outline">
                  <Award className="h-3 w-3 flex-shrink-0" />
                  <span className="break-all">{grade}</span>
                </Badge>
              )}
            </div>
          </div>

          <div className="mt-4 w-full max-w-none ">
            <ReadMore
              externalExpanded={isHighlighted}
              onExpandChange={() => {}}
              parentBackgroundColor="rgb(255, 255, 255)"
            >
              {content}
            </ReadMore>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';

interface AnimatedSectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSectionHeader: FC<AnimatedSectionHeaderProps> = memo(({children, className}) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const currentHeaderRef = headerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentHeaderRef) {
            observer.unobserve(currentHeaderRef);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
      },
    );

    if (currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
    };
  }, []);

  return (
    <h2
      ref={headerRef}
      className={`transition duration-700 transform ${className || ''} ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </h2>
  );
});

AnimatedSectionHeader.displayName = 'AnimatedSectionHeader';

const Resume: FC = memo(() => {
  const [highlightedPlace, setHighlightedPlace] = useState<string | null>(null);

  const handleHighlight = useCallback((place: string | null) => {
    setHighlightedPlace(place);
  }, []);

  const {workItems, educationItems} = useMemo(() => {
    const educationWithYears = education.map(item => ({
      ...item,
      year: item.date.split(' ').pop() || '',
      type: 'education' as const,
    }));

    const workWithYears = experience.map(item => ({
      ...item,
      year: item.date.split(' ').pop() || '',
      type: 'work' as const,
    }));

    return {
      workItems: workWithYears.sort((a, b) => parseInt(b.year) - parseInt(a.year)),
      educationItems: educationWithYears.sort((a, b) => parseInt(b.year) - parseInt(a.year))
    };
  }, []);

  return (
    <Section className="bg-[linear-gradient(to_bottom,theme('colors.gray.300')_0%,theme('colors.neutral.100')_20%)] relative" sectionId={SectionId.Resume}>
      {highlightedPlace && (
        <div className="absolute inset-0 bg-neutral-900 opacity-5 pointer-events-none transition-opacity duration-300" />
      )}

      <div className="space-y-0">
        {/* Work Experience Section */}
        <div className="flex items-center gap-4 mb-8 md:pl-32">
          <AnimatedSectionHeader className="text-3xl font-bold text-neutral-800">Work Experience</AnimatedSectionHeader>
          <div className="invisible md:visible h-px flex-1 bg-neutral-200 " />
        </div>

        <div className="relative pl-4 w-full">
          {workItems.map((item, index) => (
            <TimelineItem
              highlightedPlace={highlightedPlace}
              isFirstItem={index === 0}
              isLastInSection={index === workItems.length - 1}
              item={item}
              key={`${item.title}-${index}`}
              onHighlight={handleHighlight}
              type={item.type}
            />
          ))}
        </div>

        {/* Education Section */}
        <Section noPadding={true} sectionId={SectionId.Education}>
          <div className="flex items-center gap-4 mb-8 bg-neutral-100 pt-8 md:pl-32">
            <AnimatedSectionHeader className="text-3xl font-bold z-50 text-neutral-800">Education</AnimatedSectionHeader>
            <div className="invisible md:visible h-px flex-1 bg-neutral-200 justify-center" />
          </div>
          <div className="relative pl-4 w-full">
            {educationItems.map((item, index) => (
              <TimelineItem
                highlightedPlace={highlightedPlace}
                isFirstItem={false}
                item={item}
                key={`${item.title}-${index}`}
                onHighlight={handleHighlight}
                type={item.type}
              />
            ))}
          </div>
        </Section>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;