import React, {FC, memo} from 'react';
import {ReadMoreToggler} from 'read-more-read-less-toggler-edit'

import {letterData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Line = () => (<hr
    style={{
        color: 'rgba(52, 52, 52, 0.8)', backgroundColor: 'rgba(52, 52, 52, 0.2)', height: 5,
    }}
/>);

const Letter: FC = memo(() => {
    const {description} = letterData;
    return (<Section className="bg-neutral-300" sectionId={SectionId.Letter}>
            <div className="flex justify-center gap-y-4">
                <h2 className="text-2xl h-max font-bold text-black">Cover letter</h2>
            </div>
            <Line/>
            <ReadMoreToggler
                bottomGradient="black"
                desktopBreakLines="10"
                mobileBreakLines="5"
                topGradient="#D4D4D4">
                <div className=" text-black justify-center start-centre gap-y-4">
                    {description}
                </div>
            </ReadMoreToggler>

        </Section>);
});

Letter.displayName = 'Letter';
export default Letter;
