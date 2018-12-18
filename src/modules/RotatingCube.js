import React, { useState } from "react";
import styled from "styled-components";
import { rotateAnimation } from "../keyframes";

// https://codepen.io/magnus16/pen/rbEju

function RotatingCube ({size, colors}) {
  const [active = false, toggleActive] = useState(0);

  return (
    <CubeContainer>
      <Cube onClick={() => toggleActive(!active)} size={active ? size : size * 2} startAnimation={active}>
        <Side size={active ? size : size * 2} id="s1" color={colors[0]}/>
        <Side size={active ? size : size * 2} id="s2" color={colors[1]}/>
        <Side size={active ? size : size * 2} id="s3" color={colors[0]}/>
        <Side size={active ? size : size * 2} id="s4" color={colors[1]}/>
        <Side size={active ? size : size * 2} id="s5" color={colors[2]}/>
        <Side size={active ? size : size * 2} id="s6" color={colors[2]}/>
      </Cube>
    </CubeContainer>
  );
};

RotatingCube.defaultProps = {
  size: 100,
  colors: [
    "#41C3AC",
    "#f9a000",
    "#fb00ba",
  ],
};

export default RotatingCube;

const CubeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  transform: translateX(-50%) translateY(-50%);
  perspective:400px;
`;

const Cube = styled.div`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  transform-origin:50% 50%;
  transform-style:preserve-3d;
  animation: ${props => props.startAnimation && rotateAnimation}
`;

const Side = styled.div`
  position:absolute;
  display:block;
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  background: ${props => props.color};
  transition: 2000ms all;
  
  transform: ${props => {
  switch (props.id) {
    case "s1":
      return "translateZ(100px)";
    case "s2":
      return "rotateY(90deg) translateZ(100px)";
    case "s3":
      return "rotateY(180deg) translateZ(100px)";
    case "s4":
      return "rotateY(-90deg) translateZ(100px)";
    case "s5":
      return "rotateX(90deg) translateZ(100px)";
    case "s6":
      return "rotateX(-90deg) translateZ(100px)";
  }
}
  }
`;
