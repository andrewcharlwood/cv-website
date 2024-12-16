import {ChevronLeft, ChevronRight} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, {memo, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const ProjectCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(prevIndex => (prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1));
  };

  const getItemStyle = (index: number) => {
    const position = (index - currentIndex + portfolioItems.length) % portfolioItems.length;
    const translateX = position === 0 ? -50 : position < portfolioItems.length / 2 ? -80 : 20;
    const translateZ = position === 0 ? 0 : -200;
    const translateY = position === 0 ? 0 : 20;
    const scale = position === 0 ? 1 : 0.8;

    return {
      transform: `translateX(${translateX}%) translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
      opacity: position === 0 ? 1 : 0.6,
      filter: `blur(${position === 0 ? 0 : 1}px)`,
      zIndex: portfolioItems.length - position,
    };
  };

  return (
    <Section className="bg-neutral-800 overflow-hidden px-4 py-4 md:py-8 sm:pb-0 md:pb-16 lg:px-8 lg:pb-24 pt" noPadding={true} sectionId={SectionId.Carousel}>
      <div className="relative w-full max-w-7xl mx-auto h-[42rem] perspective-1000">
        <h2 className="text-center text-xl font-bold text-white">Check out some of my work</h2>

        <div className="relative h-[calc(100%-6rem)]">
          {portfolioItems.map((item: PortfolioItem, index: number) => (
            <div
              className="absolute w-full max-w-4xl left-1/2 top-2 transition-all duration-500"
              key={index}
              style={getItemStyle(index)}>
              <div className="relative">
                <Link
                  className="block transition-transform bg-white rounded-lg"
                  href={item.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="overflow-hidden">
                    <div className="relative aspect-video w-full">
                      <Image
                        alt={item.title}
                        className="object-contain"
                        fill
                        priority={index === currentIndex}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={item.image}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Link>

                {/* Position indicators relative to each slide, but only show for active slide */}
                {index === currentIndex && (
                  <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                    {portfolioItems.map((_, dotIndex) => (
                      <button
                        className={`h-2 w-2 rounded-full transition-colors ${
                          currentIndex === dotIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        key={dotIndex}
                        onClick={() => setCurrentIndex(dotIndex)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white z-50"
            onClick={prev}>
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white z-50"
            onClick={next}>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </Section>
  );
});

export default ProjectCarousel;