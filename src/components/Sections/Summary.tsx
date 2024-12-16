import {ArrowDown} from 'lucide-react';
import React, {FC, memo, useEffect,useState} from 'react';

import {SectionId, summaryData} from '@/data/data';

import Section from '../Layout/Section';

const Summary: FC = memo(() => {
  const {description} = summaryData;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Section className="bg-gray-300 " sectionId={SectionId.Summary}>
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-full mx-auto ">
          {/* Animated Welcome */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in pt-0">
              Summary
            </h1>

          </div>


          {/* Content Area */}
          <div className="bg-white rounded-lg p-6 shadow-lg w-full">
            <div className="prose max-w-none">
              {description}
            </div>
          </div>

          {/* Skills Pills */}
          {/*<div className="mt-6 flex flex-wrap justify-center gap-2">*/}
          {/*  {['Pharmacy','Healthcare Leadership', 'Python', 'SQL'].map((skill) => (*/}
          {/*    <span*/}
          {/*      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors duration-300"*/}
          {/*      key={skill}*/}
          {/*    >*/}
          {/*      {skill}*/}
          {/*    </span>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>

      </div>
      <br />
      <div className="flex justify-center">
        <a
          className="rounded-full bg-white"
          href={`/#${SectionId.Resume}`}>
          <ArrowDown className="bg-transparent animate-bounce p-2 " size={48}/>
        </a>
      </div>
    </Section>
  );
});

Summary.displayName = 'Summary';
export default Summary;