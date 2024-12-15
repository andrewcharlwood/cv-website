import {memo, ReactNode, useEffect, useRef, useState} from 'react';

interface ReadMoreProps {
  children: ReactNode;
}

const ReadMore = memo(({children}: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [previewHeight, setPreviewHeight] = useState<number | null>(null);
  const [expandedHeight, setExpandedHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [parentBgColor, setParentBgColor] = useState('transparent');

  useEffect(() => {
    if (containerRef.current) {
      const bgColor = window.getComputedStyle(containerRef.current.parentElement!).getPropertyValue('background-color');
      setParentBgColor(bgColor);
    }

    if (contentRef.current) {
      const lineHeight = parseFloat(window.getComputedStyle(contentRef.current).lineHeight || '0');

      // Calculate preview height (8 lines)
      const maxVisibleHeight = lineHeight * 8;
      setPreviewHeight(maxVisibleHeight);

      // Calculate full height
      const fullHeight = contentRef.current.scrollHeight + 50;
      setExpandedHeight(fullHeight);

      // Check if content is overflowing
      if (fullHeight > maxVisibleHeight) {
        setIsOverflowing(true);
      }
    }
  }, []);

  return (
    <div className="relative" ref={containerRef} style={{backgroundColor: parentBgColor}}>
      <div
        className="relative overflow-hidden transition-all duration-1000 ease-in-out"
        style={{
          maxHeight: isExpanded ? `${expandedHeight}px` : `${previewHeight || 'auto'}px`,
        }}>
        <div className="text-black" ref={contentRef}>
          {children}
        </div>

        {!isExpanded && isOverflowing && (
          <div
            className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t"
            style={{
              backgroundImage: `linear-gradient(to top, ${parentBgColor}, transparent)`,
            }}
          />
        )}
      </div>

      {isOverflowing && (
        <button aria-expanded={isExpanded} className="read-more-button" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Read Less' : 'Read More'}
          <svg
            className={`ml-2 h-4 w-4 transform transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </button>
      )}
    </div>
  );
});

export default ReadMore;
