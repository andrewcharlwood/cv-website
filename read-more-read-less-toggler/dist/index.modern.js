import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {BsArrowUpShort} from 'react-icons/bs';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3;
var Paragraph = styled.p(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  max-height: ${props => props.paragraphHeight || '1px';\n  overflow: hidden;\n  background-image: ", ";\n  background-clip: ", ";\n  -webkit-background-clip: ", ";\n  -webkit-text-fill-color: ", ";\n  transition: ", ";\n  line-height: 22px;\n  margin: 10px;\n"])), function (props) {
  return props.paragraphHeight;
}, function (props) {
  return props.gradientColor && props.gradientColor;
}, function (props) {
  return props.collapse && 'text';
}, function (props) {
  return props.collapse && 'text';
}, function (props) {
  return props.collapse && 'transparent';
}, function (props) {
  return props.collapse ? 'all 0.1s' : 'all 1s';
});
var ReadMoreWrapper = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 20.8px;\n  position: relative;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (props) {
  return props.buttonColor && props.buttonColor;
});
var Caret = styled(BsArrowUpShort)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  width: 36px;\n  height: 36px;\n  transform: ", ";\n"])), function (props) {
  return props.collapse && 'rotate(-180deg)';
});

const calculateHeight = () => {
  if (paragraphRef.current) {
    const height = paragraphRef.current.scrollHeight;
    setParagraphScrollHeight(height);
  }
};

const toggleHandler = () => {
  calculateHeight(); // Pre-calculate before state change
  setReadMore(!readMore);
};

var BREAKPOINTS = {
  mobile: 576
};
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

useEffect(() => {
  const handleResize = debounce(calculateHeight, 200);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

var ReadMoreToggler = function ReadMoreToggler(_ref) {
  var children = _ref.children,
      mobileBreakLines = _ref.mobileBreakLines,
      desktopBreakLines = _ref.desktopBreakLines,
      topGradient = _ref.topGradient,
      bottomGradient = _ref.bottomGradient,
      buttonColor = _ref.buttonColor;

  var _useState = useState(false),
      readMore = _useState[0],
      setReadMore = _useState[1];

  var _useState2 = useState(false),
      isParagraphExceed = _useState2[0],
      setIsParagraphExceed = _useState2[1];

  var paragraphRef = useRef();
  var isOverflow = isParagraphExceed && !readMore;

  var _useState3 = useState(),
      paragraphCollapseHeight = _useState3[0],
      setParagraphCollapseHeight = _useState3[1];

  var _useState4 = useState(),
      paragraphScrollHeight = _useState4[0],
      setParagraphScrollHeight = _useState4[1];

  var gradientColor = topGradient && bottomGradient ? "linear-gradient(to top," + topGradient + "," + bottomGradient + ")" : 'linear-gradient(to top,#FFFFFF,#25232363)';

  var toggleHandler = function toggleHandler() {
    setReadMore(!readMore);
  };
  
const calculateHeight = () => {
  if (paragraphRef.current) {
    const elementStyle = window.getComputedStyle(paragraphRef.current);
    const lineHeight = parseInt(elementStyle.getPropertyValue('line-height'), 10);
    const isMobile = window.innerWidth < BREAKPOINTS.mobile;
    const breakLines = isMobile ? mobileBreakLines || 5 : desktopBreakLines || 3;

    const collapseHeight = breakLines * lineHeight;
    const scrollHeight = paragraphRef.current.scrollHeight;
    setParagraphCollapseHeight(collapseHeight);
    setParagraphScrollHeight(scrollHeight);
    setIsParagraphExceed(collapseHeight < scrollHeight);
  }
};

  
  useEffect(() => {
    calculateHeight();
    window.addEventListener('resize', calculateHeight); // Recalculate on resize
    return () => window.removeEventListener('resize', calculateHeight); // Cleanup
  }, []);

  var ReadMoreButton = function ReadMoreButton() {
    return isParagraphExceed && /*#__PURE__*/React.createElement(ReadMoreWrapper, {
      onClick: toggleHandler,
      buttonColor: buttonColor
    }, /*#__PURE__*/React.createElement(Caret, {
      collapse: isOverflow
    }), readMore ? 'READ LESS' : 'READ MORE');
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Paragraph, {
    collapse: isOverflow,
    paragraphHeight: readMore ? paragraphScrollHeight + "px" : paragraphCollapseHeight + "px",
    gradientColor: isOverflow ? gradientColor : false,
    ref: paragraphRef
  }, children), /*#__PURE__*/React.createElement(ReadMoreButton, null));
};

export { ReadMoreToggler };
//# sourceMappingURL=index.modern.js.map
