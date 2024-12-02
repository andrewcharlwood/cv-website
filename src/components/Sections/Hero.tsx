import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import React, {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions, profileImageSrc, aboutItems} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div
            className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 justify-center text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            <div
              className={classNames('grid grid-cols-1 gap-y-4 gap-x-4 justify-center items-center', {
                'gap-y-13 md:grid-cols-4': profileImageSrc,
              })}>
              {!!profileImageSrc && (
                <div className="col-span-1 flex justify-center md:justify-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-xl md:h-48 md:w-48">
                    <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
                  </div>
                </div>
              )}
              <div className={classNames('col-span-2 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-2xl font-bold text-white">About me</h2>
                  <p className=" text-gray-300 sm:prose-base ">{description}</p>
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-5 sm:grid-cols-2">
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                  {Icon && <Icon className="h-6 w-6 text-white" />}
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className=" text-sm text-gray-300 text-start">{text}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1">
              <div className="flex text-white w-full justify-center items-center gap-x-4">

              </div>

            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1">
              <div className="flex w-full justify-center items-center gap-x-4">
                {actions.map(({href, text, primary, Icon}) => (
                  <a
                    className={classNames(
                      'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                      primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                    )}
                    href={href}
                    key={text}>
                    {text}
                    {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.Letter}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
