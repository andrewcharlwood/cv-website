import {FC, memo} from 'react';

import {education, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Education: FC = memo(() => {
    return (
        <Section className="bg-neutral-100" sectionId={SectionId.Education}>
            <div className="flex flex-col divide-y-2 divide-neutral-300">
                <ResumeSection title="Education">
                    {education.map((item, index) => (
                        <TimelineItem item={item} key={`${item.title}-${index}`}/>
                    ))}
                </ResumeSection>
            </div>
        </Section>
    );
});

Education.displayName = 'Education';
export default Education;
