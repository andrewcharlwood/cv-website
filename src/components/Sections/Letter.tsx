import React, {FC, memo} from 'react';

import {letterData, SectionId} from '../../data/data';
import {ReadMoreToggler} from '../../index';
import Section from '../Layout/Section';

const Letter: FC = memo(() => {
  const {description} = letterData;
  return (
    <Section className="bg-neutral-300" sectionId={SectionId.Letter}>
      <ReadMoreToggler bottomGradient="black" desktopBreakLines="20" mobileBreakLines="10" topGradient="#D4D4D4">
        <div className=" text-black justify-center start-centre gap-y-4">{description}</div>
      </ReadMoreToggler>
    </Section>
  );
});

Letter.displayName = 'Letter';
export default Letter;
