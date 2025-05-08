import {ArrowDown} from 'lucide-react';
import React, {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {SectionId, summaryData} from '@/data/data';

import Section from '../Layout/Section';

const Summary: FC = memo(() => {
  const {description} = summaryData;

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.2},
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, scale: 0.95, y: 20},
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  };

  return (
    <Section className="bg-[linear-gradient(to_bottom,#048cdc_0%,theme('colors.gray.300')_20%)] " sectionId={SectionId.Summary}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
      >
        <div className="max-w-full mx-auto ">
          {/* Animated Welcome */}
          <div className="text-center mb-8">
            <motion.h1
              className="text-4xl font-bold text-white mb-4 animate-fade-in pt-0"
              variants={itemVariants}
            >
              Summary
            </motion.h1>

          </div>


          {/* Content Area */}
          <motion.div
            className="bg-white rounded-lg p-6 shadow-lg w-full"
            variants={itemVariants}
          >
            <div className="prose max-w-none">
              {description}
            </div>
          </motion.div>

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

      </motion.div>
      <br />
      <motion.div
        className="flex justify-center"
        variants={itemVariants}
      >
        <a
          className="rounded-full bg-white"
          href={`/#${SectionId.Resume}`}>
          <ArrowDown className="bg-transparent animate-bounce p-2 [animation-duration:1.5s]" size={48}/>
        </a>
      </motion.div>
    </Section>
  );
});

Summary.displayName = 'Summary';
export default Summary;