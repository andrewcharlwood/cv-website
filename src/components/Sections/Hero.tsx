import classNames from 'classnames';
import {ArrowDown} from 'lucide-react';
import Image from 'next/image';
import React, {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions, profileImageSrc, aboutItems} = heroData;

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, scale: 0.95, y: 20},
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const listItemVariants = itemVariants;
  const actionItemVariants = itemVariants;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <video
          autoPlay
          className="absolute z-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          src={imageSrc}
        />
        <div className="z-10 pt-4 sm:pt-14 max-w-screen-xl px-4 lg:px-0">
          <motion.div
            className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 justify-center text-center shadow-lg backdrop-blur-sm z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            <motion.h1
              className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl pb-2"
              variants={itemVariants}>
              {name}
            </motion.h1>
            <motion.div
              className={classNames('grid grid-cols-1 gap-y-4 gap-x-4 justify-center items-center', {
                'gap-y-13 md:grid-cols-4': profileImageSrc,
              })}
              variants={itemVariants}>
              {!!profileImageSrc && (
                <div className="col-span-1 flex justify-center md:justify-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-xl md:h-48 md:w-48">
                    <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
                  </div>
                </div>
              )}
              <div className={classNames('col-span-2 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
                <div className="flex flex-col gap-y-2">
                  
                  <div className=" text-gray-300 sm:prose-base">{description}</div>
                </div>
              </div>
            </motion.div>

            <motion.ul
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible">
              {aboutItems.map(({id, label, text, Icon}) => (
                <motion.li
                  className="flex flex-wrap items-center gap-x-2 gap-y-1"
                  key={id}
                  variants={listItemVariants}>
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                  <span className="text-sm md:text-lg font-bold text-white whitespace-nowrap">{label}:</span>
                  <span className="text-sm md:text-lg text-gray-300">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible">
              <div className="flex w-full justify-center items-center gap-x-4">
                {actions.map(({href, text, primary, Icon}) => (
                  <motion.a
                    className={classNames(
                      'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                        primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                    )}
                    href={href}
                    key={text}
                    variants={actionItemVariants}>
                    {text}
                    {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center pt-4 sn:pt-6 md:pt-8 lg:pt-10"
              variants={itemVariants}>
              <a
                className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                href={`/#${SectionId.Summary}`}>
                <ArrowDown className="bg-transparent h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 animate-bounce [animation-duration:2s]" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
