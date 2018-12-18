import React, { useState } from "react";
import styled from "styled-components";
import { rotateXAnimation } from "../keyframes";

// https://codepen.io/magnus16/pen/rbEju

function Cube3D ({size, colors}) {

  const [active = false, toggleActive] = useState(0);

  return (
    <CubeContainer size={size}>
      <Cube onClick={() => toggleActive(!active)} size={size} startAnimation={active}>
        <Side size={size} id="s1" color={colors[0]}/>
        <Side size={size} id="s2" color={colors[1]}/>
        <Side size={size} id="s3" color={colors[0]}/>
        <Side size={size} id="s4" color={colors[1]}/>
        <Side size={size} id="s5" color={colors[2]}/>
        <Side size={size} id="s6" color={colors[2]}/>
      </Cube>
    </CubeContainer>
  );
}

Cube3D.defaultProps = {
  size: 100,
  colors: [
    "#41C3AC",
    "#f9a000",
    "#fb00ba",
  ],
};

export default Cube3D;

const CubeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  transform: translateX(-50%) translateY(-50%);
`;

const Cube = styled.div`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  transform-origin:50% 50%;
  transform-style:preserve-3d;
  animation: ${props => props.startAnimation && rotateXAnimation}
`;

const Side = styled.div`
  position:absolute;
  display:block;
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  background: ${props => props.color};
  transition: 500ms all;
  
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
