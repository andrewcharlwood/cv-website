import React, {FC, memo} from 'react';
import {ReadMoreToggler} from 'read-more-read-less-toggler-edit'

import {letterData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Letter: FC = memo(() => {
  const {description} = letterData;
  return (
    <Section className="bg-neutral-300" sectionId={SectionId.Letter}>
      <div className="flex justify-center gap-y-4">
        <h2 className="text-2xl h-max font-bold text-black">Cover letter</h2>
      </div>
      <div className="flex text-black sm:prose-base justify-center start-centre gap-y-4">
          <ReadMoreToggler
              bottomGradient="black"
              desktopBreakLines="10"
              mobileBreakLines="5"
              topGradient="#D4D4D4">
                {description}
          </ReadMoreToggler>
      </div>
    </Section>
  );
});

Letter.displayName = 'Letter';
export default Letter;
