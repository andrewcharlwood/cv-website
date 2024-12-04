import React, {useEffect, useRef, useState} from 'react'

import {Caret,Paragraph, ReadMoreWrapper} from './styled/index'
import {BREAKPOINTS} from './styled/mediaBreakPoints'

// eslint-disable-next-line react-memo/require-memo
export const ReadMoreToggler = ({
                                  children,
                                  mobileBreakLines,
                                  desktopBreakLines,
                                  topGradient,
                                  bottomGradient,
                                  buttonColor="black"
                                }) => {
  const [readMore, setReadMore] = useState(false)
  const [isParagraphExceed, setIsParagraphExceed] = useState(false)
  const paragraphRef = useRef()
  const isOverflow = isParagraphExceed && !readMore
  const [paragraphCollapseHeight, setParagraphCollapseHeight] = useState()
  const [paragraphScrollHeight, setParagraphScrollHeight] = useState()
  const gradientColor = (topGradient && bottomGradient) ? `linear-gradient(to top,${topGradient},${bottomGradient})` : 'linear-gradient(to top,#FFFFFF,#25232363)'

  const toggleHandler = () => {
    setReadMore(!readMore)
  }

  const calculateHeight = () => {
    // dynamically set the current div line-height
    const elementStyle = window.getComputedStyle(paragraphRef.current)
    const calculatedLineHeight = elementStyle.getPropertyValue('line-height')

    // remove px from line-height value
    const lineHeight = parseInt(calculatedLineHeight, 10)

    // isoverflow calculations
    const isMobileBreakpoint = window.innerWidth < BREAKPOINTS.mobile
    const definedMobileBreakLines = mobileBreakLines ?? 5
    const definedDesktopBreakLines = desktopBreakLines ?? 3
    const calculatedAcceptableLines = (isMobileBreakpoint ? definedMobileBreakLines : definedDesktopBreakLines)
    const calculatedParagraphHeight = calculatedAcceptableLines * lineHeight
    setParagraphCollapseHeight(calculatedParagraphHeight)
    const scrollHeight = paragraphRef.current?.scrollHeight
    setParagraphScrollHeight(scrollHeight)
    const isParagraphHeightGreater = calculatedParagraphHeight < scrollHeight
    setIsParagraphExceed(isParagraphHeightGreater)
  }

  useEffect(() => {
    window.addEventListener('resize', calculateHeight)
    calculateHeight()

    // to remove event listner on unmount
    return () => {
      window.removeEventListener('resize', calculateHeight)
    }
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line react-memo/require-memo
  const ReadMoreButton = () =>
    isParagraphExceed && (
      <ReadMoreWrapper buttonColor={buttonColor} onClick={toggleHandler}>
        <Caret collapse={isOverflow} />
        {readMore ? 'READ LESS' : 'READ MORE'}
      </ReadMoreWrapper>
    )

  return (
    <div>
      <Paragraph
        collapse={isOverflow}
        gradientColor={isOverflow ? gradientColor : undefined} // Use `undefined` instead of `false` for props consistency
        paragraphHeight={
          readMore
            ? paragraphScrollHeight !== undefined
              ? `${paragraphScrollHeight}px`
              : 'auto'
            : paragraphCollapseHeight !== undefined
              ? `${paragraphCollapseHeight}px`
              : 'auto'
        }
        ref={paragraphRef}
      >
        {children}
      </Paragraph>
      <ReadMoreButton />
    </div>
  );
}
