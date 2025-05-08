import {ChevronUpIcon} from '@heroicons/react/24/solid';
import {EnvelopeIcon} from '@heroicons/react/24/outline';
import React, {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {SectionId, contact} from '../../data/data';
import FooterContactLinks from '../FooterContactLinks';

// Animation Variants (from Contact/index.tsx)
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

// listItemVariants can be the same as itemVariants if no specific difference


const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-16">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full gap-y-8 md:gap-x-8">
      <motion.div
        className="flex flex-col items-center md:items-center gap-y-4 order-1 md:order-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}>
        <motion.div variants={itemVariants}>
          <EnvelopeIcon aria-hidden="true" className="h-16 w-16 text-white" />
        </motion.div>
        <motion.h2
          className="text-2xl font-bold text-white"
          variants={itemVariants}>
          {contact.headerText}
        </motion.h2>
      </motion.div>

      <motion.div
        className="order-2 md:order-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}>
        <FooterContactLinks />
      </motion.div>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
