import React, {FC, memo} from 'react';

import {SectionId,summaryData} from '../../data/data';
import Section from '../Layout/Section';
import ReadMore from '../ReadMore';

const Summary: FC = memo(() => {
  const {description} = summaryData;
  return (
    <Section className="bg-gray-300" sectionId={SectionId.Summary}>
      <div className="bg-gray-300 ">
        <ReadMore parentBackgroundColor="rgb(209, 213, 219) ">{description}</ReadMore>
      </div>
    </Section>
  );
});

Summary.displayName = 'Summary';
export default Summary;
