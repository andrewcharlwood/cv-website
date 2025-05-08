import {ChevronLeft, ChevronRight, ExternalLink} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, {CSSProperties,memo, useRef, useState} from 'react';
import {motion} from 'framer-motion';

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
    const N = portfolioItems.length;

    if (N === 0) {
      return {opacity: 0, pointerEvents: 'none'};
    }

    const prevVisibleIndex = (currentIndex - 1 + N) % N;
    const nextVisibleIndex = (currentIndex + 1) % N;

    let translateXValue = '0%';
    let opacityValue = 0;
    let scaleValue = 0.7;
    let zIndexValue = 0;
    let blurValue = 3;
    let translateYValue = 30;
    let translateZValue = -400;
    let pointerEventsValue: 'auto' | 'none' = 'none';

    if (index === currentIndex) {
      // Current item
      translateXValue = '-50%';
      opacityValue = 1;
      scaleValue = 1;
      zIndexValue = N + 2;
      blurValue = 0;
      translateYValue = 0;
      translateZValue = 0;
      pointerEventsValue = 'auto';
    } else if (index === prevVisibleIndex && N > 1) {
      // Left visible item
      translateXValue = '-100%';
      opacityValue = 0.6;
      scaleValue = 0.8;
      zIndexValue = N + 1;
      blurValue = 1;
      translateYValue = 20;
      translateZValue = -200;
      pointerEventsValue = 'auto';
    } else if (index === nextVisibleIndex && N > 1 && index !== prevVisibleIndex) {
      // Right visible item
      // (index !== prevVisibleIndex handles N=2 case where prev and next are the same non-current index)
      translateXValue = '0%';
      opacityValue = 0.6;
      scaleValue = 0.8;
      zIndexValue = N + 1;
      blurValue = 1;
      translateYValue = 20;
      translateZValue = -200;
      pointerEventsValue = 'auto';
    } else {
      // Hidden items
      opacityValue = 0;
      scaleValue = 0.5; // Smaller scale for hidden items
      zIndexValue = 0;
      blurValue = 3;
      translateYValue = 30;
      translateZValue = -400;
      pointerEventsValue = 'none';

      // Position hidden items behind the center item
      translateXValue = '-50%'; 
    }

    if (isDragging) {
      const dragOffsetPercentage = (dragCurrentX.current - dragStartX.current) * -0.5;
      let currentTranslateXNum = 0;
      if (translateXValue.endsWith('%')) {
        currentTranslateXNum = parseFloat(translateXValue.substring(0, translateXValue.length - 1));
      }
      translateXValue = `${currentTranslateXNum + dragOffsetPercentage}%`;
    }

    return {
      transform: `translateX(${translateXValue}) translateY(${translateYValue}px) translateZ(${translateZValue}px) scale(${scaleValue})`,
      opacity: opacityValue,
      filter: `blur(${blurValue}px)`,
      zIndex: zIndexValue,
      pointerEvents: pointerEventsValue,
    };
  };

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
    <Section className="bg-[linear-gradient(to_bottom,theme('colors.neutral.100')_0%,theme('colors.neutral.800')_7%)] overflow-hidden px-4 py-4 md:py-8 sm:pb-32 md:pb-64 lg:px-8 lg:pb-64 pb-24" noPadding={false} sectionId={SectionId.Carousel}>
      <motion.div
        className="relative w-full max-w-7xl mx-auto h-[42rem] perspective-1000 pt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
      >
        <motion.h2
          className="text-center text-3xl font-bold text-white pb-6 pt-4"
          variants={itemVariants}
        >
          Check out some of my work
        </motion.h2>

        <motion.div
          className="relative h-[calc(100%-6rem)]"
          variants={itemVariants}
        >
          {/* Carousel items container */}
          <div className="relative h-full mb-12">
            {portfolioItems.map((item: PortfolioItem, index: number) => (
              <div
                className="absolute w-full max-w-4xl left-1/2 top-2 transition-all duration-500 select-none"
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
          <div className="absolute -bottom-60 left-0 right-0 flex justify-center gap-2">
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
        </motion.div>
      </motion.div>
    </Section>
  );
});

ProjectCarousel.displayName = 'ProjectCarousel';
export default ProjectCarousel;