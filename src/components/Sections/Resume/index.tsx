import {FC, memo} from 'react';
import {ReadMoreToggler} from 'read-more-read-less-toggler-edit'

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
    return (
        <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
            <div className="flex flex-col divide-y-2 divide-neutral-300">
                <ResumeSection title="Work">
                    <ReadMoreToggler
                        bottomGradient="black"
                        desktopBreakLines="25"
                        mobileBreakLines="20"
                        topGradient="#D4D4D4">
                    {experience.map((item, index) => (
                        <TimelineItem item={item} key={`${item.title}-${index}`}/>
                    ))}
                    </ReadMoreToggler>
                </ResumeSection>
                <ResumeSection title="Education">
                    <ReadMoreToggler
                        bottomGradient="black"
                        desktopBreakLines="20"
                        mobileBreakLines="10"
                        topGradient="#D4D4D4">
                    {education.map((item, index) => (
                        <TimelineItem item={item} key={`${item.title}-${index}`}/>
                    ))}
                    </ReadMoreToggler>
                </ResumeSection>
{/*                <ResumeSection title="Skills">
                    <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {skills.map((skillgroup, index) => (
                            <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup}/>
                        ))}
                    </div>
                </ResumeSection>*/}
            </div>
        </Section>
    );
});

Resume.displayName = 'Resume';
export default Resume;
