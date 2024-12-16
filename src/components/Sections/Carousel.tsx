import {ChevronLeft, ChevronRight, ExternalLink} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, {CSSProperties,memo, useRef, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const ProjectCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const dragStartTime = useRef(0);

  const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex(prevIndex => (prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setHasMoved(false);
    dragStartX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragCurrentX.current = dragStartX.current;
    dragStartTime.current = Date.now();
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    if (Math.abs(currentX - dragStartX.current) > 5) {
      setHasMoved(true);
    }
    dragCurrentX.current = currentX;
    e.preventDefault();
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const dragDistance = dragCurrentX.current - dragStartX.current;
    const dragDuration = Date.now() - dragStartTime.current;
    const threshold = 50;

    if (Math.abs(dragDistance) > threshold && dragDuration < 300) {
      if (dragDistance > 0) {
        prev();
      } else {
        next();
      }
    }

    setIsDragging(false);
    setHasMoved(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const getItemStyle = (index: number): CSSProperties => {
    const position = (currentIndex - index + portfolioItems.length) % portfolioItems.length;
    let translateX = position === 0 ? -50 : position < portfolioItems.length / 2 ? -100 : 0;

    if (isDragging) {
      const dragOffset = (dragCurrentX.current - dragStartX.current) * -0.5;
      translateX += dragOffset;
    }

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
    <Section className="bg-neutral-800 overflow-hidden px-4 py-4 md:py-8 sm:pb-0 md:pb-16 lg:px-8 lg:pb-36 pt" noPadding={true} sectionId={SectionId.Carousel}>
      <div className="relative w-full max-w-7xl mx-auto h-[42rem] perspective-1000">
        <h2 className="text-center text-xl font-bold text-white">Check out some of my work</h2>

        <div className="relative h-[calc(100%-6rem)]">
          {/* Carousel items container */}
          <div className="relative h-full mb-12">
            {portfolioItems.map((item: PortfolioItem, index: number) => (
              <div
                className="absolute w-full max-w-4xl left-1/2 top-2 transition-all duration-500 select-none touch-none"
                key={index}
                onClick={handleClick}
                onMouseDown={handleDragStart}
                onMouseLeave={handleDragEnd}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onTouchEnd={handleDragEnd}
                onTouchMove={handleDragMove}
                onTouchStart={handleDragStart}
                style={getItemStyle(index)}
              >
                <div className="relative cursor-grab active:cursor-grabbing">
                  <div className="block transition-transform bg-white rounded-lg">
                    <div className="overflow-hidden">
                      <div className="relative aspect-video w-full">
                        <Image
                          alt={item.title}
                          className="object-contain pointer-events-none"
                          draggable={false}
                          fill
                          priority={index === currentIndex}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          src={item.image}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Link
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          href={item.url}
                          onClick={(e) => e.stopPropagation()}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          See more
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="absolute -bottom-52 left-0 right-0 flex justify-center gap-2 z-50">
            {portfolioItems.map((_, index) => (
              <button
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                key={index}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Left button - Shows previous item */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white z-50 transition-all duration-300 group"
            onClick={prev}
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
          >
            <ChevronLeft
              className={`h-6 w-6 transition-transform duration-300 ${
                isLeftHovered ? '-translate-x-1' : 'translate-x-0'
              }`}
            />
          </button>

          {/* Right button - Shows next item */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white z-50 transition-all duration-300 group"
            onClick={next}
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
          >
            <ChevronRight
              className={`h-6 w-6 transition-transform duration-300 ${
                isRightHovered ? 'translate-x-1' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>
    </Section>
  );
});

export default ProjectCarousel;