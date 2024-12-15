import {Building2, Calendar, GraduationCap, MapPin} from 'lucide-react';
import React, {FC, memo, useMemo, useState} from 'react';

import Section from '@/components/Layout/Section';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent} from '@/components/ui/card';
import {education, experience, SectionId} from '@/data/data';
import {TimelineItem as TimelineItemType} from '@/data/dataDef';

import ReadMore from '../../../learn';

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

interface TimelineItemProps {
  item: TimelineItemType;
  year: string;
  highlightedPlace: string | null;
  onHighlight: (place: string | null) => void;
  type: 'education' | 'work';
}

const TimelineItem: FC<TimelineItemProps> = memo(({item, year, highlightedPlace, onHighlight, type}) => {
  const {title, date, location, content, grade} = item;
  const itemColor = getEmployerColor(location);
  const isHighlighted = highlightedPlace === location;
  const isDimmed = highlightedPlace !== null && !isHighlighted;

  return (
    <div className={`relative flex gap-4 transition-opacity duration-300 ${isDimmed ? 'opacity-30' : 'opacity-100'}`}>
      {/* Timeline marker */}
      <div className="relative flex flex-col items-center">
        <div className={`absolute top-0 h-full w-px ${itemColor.replace('bg-', 'bg-opacity-30 bg-')}`} />
        <div className={`z-10 flex h-8 w-8 items-center justify-center rounded-full ${itemColor} text-white
          ${isHighlighted ? 'ring-4 ring-offset-2 ring-offset-neutral-100' : ''}`}>
          <span className="text-xs font-semibold">{year}</span>
        </div>
      </div>

      {/* Card content */}
      <Card className={`relative flex-1 mb-8 last:mb-0 w-full transition-transform duration-300
        ${isHighlighted ? 'scale-102 shadow-lg' : ''}`}>
        <div className={`absolute left-0 top-0 h-full w-1 ${itemColor}`} />
        <CardContent className="pt-6">
          <div className="mb-4 w-full">
            <h3 className="text-2xl font-bold text-neutral-800">{title}</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              <Badge
                className={`flex items-center gap-1 cursor-pointer ${itemColor} text-white
                  transition-transform duration-300 hover:scale-105
                  ${isHighlighted ? 'ring-2 ring-offset-2' : ''}`}
                onClick={() => onHighlight(isHighlighted ? null : location)}
                onMouseEnter={() => onHighlight(location)}
                onMouseLeave={() => onHighlight(null)}
                variant="secondary"
              >
                {type === 'education' ? (
                  <GraduationCap className="h-3 w-3" />
                ) : (
                  <Building2 className="h-3 w-3" />
                )}
                {location}
              </Badge>
              <Badge className="flex items-center gap-1" variant="outline">
                <Calendar className="h-3 w-3" />
                {date}
              </Badge>
              {grade && (
                <Badge className="flex items-center gap-1" variant="outline">
                  <MapPin className="h-3 w-3" />
                  {grade}
                </Badge>
              )}
            </div>
          </div>

          <div className="mt-4 w-full max-w-none">
            <ReadMore>
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

  const allItems = useMemo(() => {
    const educationWithYears = education.map(item => ({
      ...item,
      year: item.date.split(' ').pop() || '',
      type: 'education' as const
    }));

    const workWithYears = experience.map(item => ({
      ...item,
      year: item.date.split(' ').pop() || '',
      type: 'work' as const
    }));

    return [...workWithYears, ...educationWithYears].sort((a, b) => {
      return parseInt(b.year) - parseInt(a.year);
    });
  }, []);

  return (
    <Section className="bg-neutral-100 relative" sectionId={SectionId.Resume}>
      {highlightedPlace && (
        <div className="absolute inset-0 bg-neutral-900 opacity-5 pointer-events-none transition-opacity duration-300" />
      )}

      <div className="space-y-0">
        {/* Work Experience Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800">Work Experience</h2>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="relative pl-4 w-full">
          {allItems.map((item, index) => {
            // Add section divider for Education
            if (index > 0 && allItems[index - 1].type !== item.type && item.type === 'education') {
              return (
                <Section noPadding={true} sectionId={SectionId.Education}>
                  <React.Fragment key={`section-${item.type}`}>
                    <div className="flex items-center gap-4 my-8">
                      <h2 className="text-3xl font-bold text-neutral-800">Education</h2>
                      <div className="h-px flex-1 bg-neutral-200" />
                    </div>
                    <TimelineItem
                      highlightedPlace={highlightedPlace}
                      item={item}
                      key={`${item.title}-${index}`}
                      onHighlight={setHighlightedPlace}
                      type={item.type}
                      year={item.year}
                    />
                  </React.Fragment>
                </Section>
              );
            }

            return (
              <TimelineItem
                highlightedPlace={highlightedPlace}
                item={item}
                key={`${item.title}-${index}`}
                onHighlight={setHighlightedPlace}
                type={item.type}
                year={item.year}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;