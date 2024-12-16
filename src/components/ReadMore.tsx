import {memo, ReactNode, useEffect, useRef, useState} from 'react';

interface ReadMoreProps {
  children: ReactNode;
  parentBackgroundColor?: string;
  externalExpanded?: boolean;
  onExpandChange?: (isExpanded: boolean) => void;
}

const ReadMore = memo(({
                         children,
                         parentBackgroundColor = 'rgb(245, 245, 245)',
                         externalExpanded,
                         onExpandChange
                       }: ReadMoreProps) => {
  const [isExpandedInternal, setIsExpandedInternal] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [previewHeight, setPreviewHeight] = useState<number | null>(null);
  const [expandedHeight, setExpandedHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const isExpanded = externalExpanded ?? isExpandedInternal;

  const checkOverflow = () => {
    if (contentRef.current) {
      const lineHeight = parseFloat(window.getComputedStyle(contentRef.current).lineHeight || '20');
      const maxVisibleHeight = lineHeight * 8;
      const fullHeight = contentRef.current.scrollHeight;

      setPreviewHeight(maxVisibleHeight);
      setExpandedHeight(fullHeight + 40);
      setIsOverflowing(fullHeight > maxVisibleHeight);
    }
  };

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpandedInternal(newState);
    onExpandChange?.(newState);
  };

  useEffect(() => {
    checkOverflow();

    const handleResize = () => {
      checkOverflow();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [children]);

  return (
    <div className="relative">
      <div
        className={`relative transition-all duration-1000 ease-in-out ${!isExpanded && isOverflowing ? 'overflow-hidden' : ''}`}
        style={{
          maxHeight: isExpanded ? `${expandedHeight}px` : `${previewHeight || 'auto'}px`,
        }}>
        <div
          className="prose-neutral max-w-none break-words"
          ref={contentRef}
        >
          {children}
        </div>

        {!isExpanded && isOverflowing && (
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{
              background: `linear-gradient(to top, ${parentBackgroundColor}, transparent)`,
            }}
          />
        )}
      </div>

      {isOverflowing && (
        <button
          aria-expanded={isExpanded}
          className="read-more-button"
          onClick={handleToggle}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          <svg
            className={`ml-1 h-4 w-4 transform transition-transform duration-1000 ${isExpanded ? 'rotate-180' : ''}`}
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

ReadMore.displayName = 'ReadMore';
export default ReadMore;