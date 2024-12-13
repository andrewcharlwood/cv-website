import React, {FC, memo} from 'react';

import {SectionId,summaryData} from '../../data/data';
import ReadMore from  '../../learn';
import Section from '../Layout/Section';

const Summary: FC = memo(() => {
  const {description} = summaryData;
  return (
    <Section className="bg-neutral-300" sectionId={SectionId.Summary}>
      <div className="bg-neutral-300 ">
        <ReadMore>
          {description}
        </ReadMore>
      </div>
    </Section>
  );
});

Summary.displayName = 'Summary';
export default Summary;
