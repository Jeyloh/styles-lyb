import React from "react";
import styled from "styled-components";
import { glowAnimation } from "../keyframes";

const BurntBox = ({text, height, width, colors}) => {

  return (
    <BurntBoxStyling height={height} width={width} gradientColor1={colors[0]} gradientColor2={colors[1]} gradientColor3={colors[2]}>
      <BurnText height={height} width={width}  background={colors[0]}>{text}</BurnText>
    </BurntBoxStyling>
  );
};


BurntBox.defaultProps = {
  text: "I'm burning!",
  height: "500px",
  width: "100%",
  colors: [
    "#41C3AC",
    "#f9a000",
    "#fb00ba",
  ],
};

export default BurntBox;

const BurntBoxStyling = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white; // ${props => `linear-gradient(135deg,  ${props.gradientColor1} 0%, ${props.gradientColor2} 70%, ${props.gradientColor3} 70%, ${props.gradientColor1} 100%)` }; 
  width: ${props => props.width};
  height: ${props => props.height};
`;
const BurnText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${glowAnimation};
  font-size: 3em;
  color: white;
  text-shadow:  0 0 10px white;
  border-radius: inherit;
  mix-blend-mode: multiply;
  background: ${props => props.background};
  width: ${props => props.width};
  height: ${props => props.height};
`;
