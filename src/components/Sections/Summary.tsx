import React, {FC, memo} from 'react';

import {SectionId,summaryData} from '../../data/data';
import {ReadMoreToggler} from '../../index';
import Section from '../Layout/Section';

const Summary: FC = memo(() => {
  const {description} = summaryData;
  return (
    <Section className="bg-neutral-300" sectionId={SectionId.Summary}>
      <h2 className="text-xl font-bold uppercase text-neutral-800">Summary</h2>
      <ReadMoreToggler bottomGradient="black" desktopBreakLines="15" mobileBreakLines="8" topGradient="#D4D4D4">
        <div className=" text-black justify-center start-centre gap-y-4">{description}</div>
      </ReadMoreToggler>
    </Section>
  );
});

Summary.displayName = 'Summary';
export default Summary;
