import {FC, memo} from 'react';
import {ReadMoreToggler} from 'read-more-read-less-toggler-edit'

import {TimelineItem} from '../../../data/dataDef';

// eslint-disable-next-line react-memo/require-memo
const Line = () => (<hr
        style={{
            color: 'rgba(52, 52, 52, 0.8)', backgroundColor: 'rgba(52, 52, 52, 0.2)', height: 5,
        }}
    />);
const TimelineItem: FC<{ item: TimelineItem }> = memo(({item}) => {
    const {title, date, location, content, grade} = item;
    if (grade !== "") {
        return (<div className="flex flex-col pb-8 text-left last:pb-0 md:text-left">
                        <div className="flex flex-col pb-4">
                            <ReadMoreToggler
                                bottomGradient="black"
                                desktopBreakLines="15"
                                mobileBreakLines="8"
                                topGradient="#D4D4D4">
                            <h2 className="text-xl font-bold">{title}</h2>
                            <Line/>
                            <div className="flex items-left text-left justify-left gap-x-2 md:justify-start">
                                <span className="flex-2 text-sm font-medium italic sm:flex-none">{location}</span>
                                <span className="flex-2 text-sm font-medium italic sm:flex-none">•</span>
                                <span className="flex-2 text-sm font-medium sm:flex-none">{grade}</span>
                                <span className="flex-2 text-sm font-medium italic sm:flex-none">•</span>
                                <span className="flex-2 text-sm font-medium sm:flex-none">{date}</span>
                            </div>
                            {content}
                            </ReadMoreToggler>
                        </div>

            </div>);
    }
    return (<div className="flex list-outside flex-col pb-8 text-left last:pb-0 md:text-left">
                    <div className="flex flex-col pb-4">
                        <ReadMoreToggler
                            bottomGradient="black"
                            desktopBreakLines="15"
                            mobileBreakLines="8"
                            topGradient="#D4D4D4">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <Line/>
                        <div className="flex items-left text-left justify-left gap-x-2 md:justify-start">
                            <span className="flex-2 text-sm font-medium italic sm:flex-none">{location}</span>
                            <span className="flex-2 text-sm font-medium italic sm:flex-none">•</span>
                            <span className="flex-2 text-sm font-medium sm:flex-none">{date}</span>
                        </div>
                        <div>
                        {content}
                        </div>

                    </ReadMoreToggler>
                    </div>


        </div>);
});


TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
