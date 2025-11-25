import React, {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {SectionId, skillCategories} from '@/data/data';

import Section from '../Layout/Section';
import {Badge} from '../ui/badge';

const Skills: FC = memo(() => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.1},
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.4, ease: 'easeOut'},
    },
  };

  return (
    <Section className="bg-gray-900" sectionId={SectionId.Skills}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
      >
        <div className="max-w-full mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <motion.h2 className="text-4xl font-bold text-white mb-4" variants={itemVariants}>
              Technical Skills
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {skillCategories.map(category => (
              <motion.div
                key={category.name}
                className="bg-gray-800 rounded-lg p-6"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <Badge
                      key={skill}
                      className="bg-blue-600 hover:bg-blue-700 text-white border-none"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
