import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BsArrowUpShort } from 'react-icons/bs';
import debounce from 'lodash/debounce';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3;
var Paragraph = styled.p(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  max-height: ", ";\n  overflow: hidden;\n  background-image: ", ";\n  background-clip: ", ";\n  -webkit-background-clip: ", ";\n  -webkit-text-fill-color: ", ";\n  transition: ", ";\n  line-height: 22px;\n  margin: 10px;\n"])), function (props) {
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
  return props.collapse ? 'all 0.3s' : 'all 0.5s';
});
var ReadMoreWrapper = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 20.8px;\n  position: relative;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (props) {
  return props.buttonColor && props.buttonColor;
});
var Caret = styled(BsArrowUpShort)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  width: 36px;\n  height: 36px;\n  transform: ", ";\n"])), function (props) {
  return props.collapse && 'rotate(-180deg)';
});

var BREAKPOINTS = {
  mobile: 576
};

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
    var _paragraphRef$current;

    var scrollHeight = (_paragraphRef$current = paragraphRef.current) === null || _paragraphRef$current === void 0 ? void 0 : _paragraphRef$current.scrollHeight;
    setParagraphScrollHeight(scrollHeight);
    setReadMore(function (prev) {
      return !prev;
    });
  };

  var calculateHeight = function calculateHeight() {
    var _paragraphRef$current2;

    var elementStyle = window.getComputedStyle(paragraphRef.current);
    var calculatedLineHeight = elementStyle.getPropertyValue('line-height');
    var lineHeight = parseInt(calculatedLineHeight, 10);
    var isMobileBreakpoint = window.innerWidth < BREAKPOINTS.mobile;
    var definedMobileBreakLines = mobileBreakLines != null ? mobileBreakLines : 5;
    var definedDesktopBreakLines = desktopBreakLines != null ? desktopBreakLines : 3;
    var calculatedAcceptableLines = isMobileBreakpoint ? definedMobileBreakLines : definedDesktopBreakLines;
    var calculatedParagraphHeight = calculatedAcceptableLines * lineHeight;
    setParagraphCollapseHeight(calculatedParagraphHeight);
    var scrollHeight = (_paragraphRef$current2 = paragraphRef.current) === null || _paragraphRef$current2 === void 0 ? void 0 : _paragraphRef$current2.scrollHeight;
    setParagraphScrollHeight(scrollHeight);
    var isParagraphHeightGreater = calculatedParagraphHeight < scrollHeight;
    setIsParagraphExceed(isParagraphHeightGreater);
  };

  useEffect(function () {
    var debouncedResize = debounce(calculateHeight, 100);
    window.addEventListener('resize', debouncedResize);
    calculateHeight();
    return function () {
      window.removeEventListener('resize', debouncedResize);
    };
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
    paragraphHeight: readMore ? (paragraphScrollHeight || 'auto') + "px" : (paragraphCollapseHeight || 'auto') + "px",
    gradientColor: isOverflow ? gradientColor : false,
    ref: paragraphRef
  }, children), /*#__PURE__*/React.createElement(ReadMoreButton, null));
};

export { ReadMoreToggler };
//# sourceMappingURL=index.modern.js.map
