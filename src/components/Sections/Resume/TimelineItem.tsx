import React, {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import ReadMore from '../../../learn';

// eslint-disable-next-line react-memo/require-memo
const Line = () => (
  <hr
    style={{
      color: 'rgba(52, 52, 52, 0.8)',
      backgroundColor: 'rgba(52, 52, 52, 0.2)',
      height: 5,
    }}
  />
);
const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, grade} = item;
  if (grade !== '') {
    return (
      <div className="flex flex-col pb-8 text-left last:pb-0 md:text-left">
        <div className="bg-neutral-100">
        <ReadMore>
        <div className="flex flex-col pb-4">

            <h2 className="text-xl font-bold">{title}</h2>
            <Line />
            <div className="flex items-left text-left justify-left gap-x-2 md:justify-start">
              <span className="flex-2 text-sm font-medium italic sm:flex-none">{location}</span>
              <span className="flex-2 text-sm font-medium italic sm:flex-none">•</span>
              <span className="flex-2 text-sm font-medium sm:flex-none">{grade}</span>
              <span className="flex-2 text-sm font-medium italic sm:flex-none">•</span>
              <span className="flex-2 text-sm font-medium sm:flex-none">{date}</span>
            </div>
            {content}

        </div>
        </ReadMore>
        </div>
      </div>
    );
  }
  return (
    <div className="flex list-outside flex-col pb-8 text-left last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="bg-neutral-100">
          <ReadMore>
            <h2 className="text-xl font-bold">{title}</h2>
            <Line />
            <div className="flex items-left text-left justify-left gap-x-2 md:justify-start">
              <span className="flex-2 text-sm font-medium italic sm:flex-none">{location}</span>
              <span className="flex-2 text-sm font-medium italic sm:flex-none">•</span>
              <span className="flex-2 text-sm font-medium sm:flex-none">{date}</span>
            </div>
            <div>{content}</div>
          </ReadMore>
        </div>
        </div>
      </div>
      );
      });

      TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
