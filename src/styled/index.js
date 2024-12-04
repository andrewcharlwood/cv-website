import {BsArrowUpShort} from 'react-icons/bs'
import styled from 'styled-components'

export const Paragraph = styled.p`
  max-height: ${(props) => props.paragraphHeight};
  overflow: hidden;
  background-image: ${(props) => props.gradientColor && props.gradientColor};
  background-clip: ${(props) => props.collapse && 'text'};
  -webkit-background-clip: ${(props) => props.collapse && 'text'};
  -webkit-text-fill-color: ${(props) => props.collapse};
  transition: ${(props) => (props.collapse ? 'all 0.3s' : 'all 0.5s')};
  line-height: 22px;
  margin: 10px;
`

export const ReadMoreWrapper = styled.span`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  line-height: 20.8px;
  position: relative;
  margin: 10px;
  display: flex;
  align-items: center;
  color: ${(props) => props.buttonColor && props.buttonColor};
`

export const Caret = styled(BsArrowUpShort)`
  width: 36px;
  height: 36px;
  transform: ${(props) => props.collapse && 'rotate(-180deg)'};
`
