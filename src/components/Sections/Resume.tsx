import {Award, Building2, Calendar, GraduationCap} from 'lucide-react';
import React, {FC, memo, useMemo, useState} from 'react';

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
    'Apple': 'bg-red-500',
    'Netflix': 'bg-rose-500',
    'Highworth Grammar School': 'bg-cyan-500',
    'SpaceX': 'bg-purple-500',
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
  const [isExpanded, setIsExpanded] = useState(false);

  const dateInfo = isFirstItem ? {month: "Current", year: ""} : formatDate(date);

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't trigger if clicking the actual ReadMore button
    if (!(e.target as HTMLElement).closest('.read-more-button')) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`relative flex gap-4 transition-opacity duration-300 ${isDimmed ? 'opacity-30' : 'opacity-100'}`}
      onMouseEnter={() => onHighlight(location)}
      onMouseLeave={() => onHighlight(null)}
    >
      {/* Timeline marker - Hidden on mobile */}
      <div className="hidden md:flex relative flex-col items-center">
        <div
          className={`absolute top-0 h-full w-1 ${itemColor.replace('bg-', 'bg-opacity-80 bg-')}
          ${isLastInSection ? 'h-[calc(200%+2rem)]' : ''}`}
        />
        <div
          className={`z-10 flex h-12 min-w-24 items-center justify-center rounded-full ${itemColor} text-white
          hover:scale-110 transition-transform duration-300 px-4
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
        hover:shadow-lg hover:scale-[1.02] min-w-0 cursor-pointer
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

          <div className="mt-4 w-full max-w-none">
            <ReadMore
              externalExpanded={isExpanded}
              onExpandChange={setIsExpanded}
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

const Resume: FC = memo(() => {
  const [highlightedPlace, setHighlightedPlace] = useState<string | null>(null);

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
    <Section className="bg-neutral-100 relative" sectionId={SectionId.Resume}>
      {highlightedPlace && (
        <div className="absolute inset-0 bg-neutral-900 opacity-5 pointer-events-none transition-opacity duration-300" />
      )}

      <div className="space-y-0">
        {/* Work Experience Section */}
        <div className="flex items-center gap-4 mb-8 bg-neutral-100">
          <h2 className="pl-32 text-3xl font-bold text-neutral-800">Work Experience</h2>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="relative pl-4 w-full">
          {workItems.map((item, index) => (
            <TimelineItem
              highlightedPlace={highlightedPlace}
              isFirstItem={index === 0}
              isLastInSection={index === workItems.length - 1}
              item={item}
              key={`${item.title}-${index}`}
              onHighlight={setHighlightedPlace}
              type={item.type}
            />
          ))}
        </div>

        {/* Education Section */}
        <Section noPadding={true} sectionId={SectionId.Education}>
          <div className="flex items-center gap-4 my-8">
            <h2 className="pl-32 text-3xl font-bold text-neutral-800">Education</h2>
            <div className="h-px flex-1 bg-neutral-200 justify-center" />
          </div>
          <div className="relative pl-4 w-full">
            {educationItems.map((item, index) => (
              <TimelineItem
                highlightedPlace={highlightedPlace}
                isFirstItem={false}
                item={item}
                key={`${item.title}-${index}`}
                onHighlight={setHighlightedPlace}
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