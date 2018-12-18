import React, { useState } from "react";
import styled from "styled-components";
import { rotateOnceAnimation } from "../keyframes";

// https://codepen.io/magnus16/pen/rbEju

function Cube3D ({size, colors}) {

  const [active = false, toggleActive] = useState(0);

  return (
    <CubeContainer size={active ? size : size * 2}>
      <Cube onClick={() => toggleActive(!active)} size={active ? size : size * 2} active={active}>
        <Side active={active} initSize={size} size={active ? size : size * 2} id="s1" color={colors[0]}>
          <SideText>Kubbi</SideText>
        </Side>
        <Side active={active} initSize={size} size={active ? size : size * 2} id="s2" color={colors[1]}/>
        <Side active={active} initSize={size} size={active ? size : size * 2} id="s3" color={colors[0]}/>
        <Side active={active} initSize={size} size={active ? size : size * 2} id="s4" color={colors[1]}/>
        <Side active={active} initSize={size} size={active ? size : size * 2} id="s5" color={colors[2]}/>
        <Side active={active} initSize={size} size={active ? size : size * 2} id="s6" color={colors[2]}/>
      </Cube>
    </CubeContainer>
  );
}

Cube3D.defaultProps = {
  size: 50,
  colors: [
    "#41C3AC",
    "#f9a000",
    "#fb00ba",
  ],
};

export default Cube3D;

const SideText = styled.span`
  font-size: 1em;
`
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
  transform: rotateX(50deg) rotateY(360deg) rotateZ(140deg);
  // animation: ${props => props.active && rotateOnceAnimation}
`;

const Side = styled.div`
  position:absolute;
  display:block;
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  background: ${props => props.color};
  transition: 2000ms all;
  
  transform: ${props => {
    
    const size = !props.active ? (props.size / 6) + "px" : props.initSize + "px";
    
    switch (props.id) {
      case "s1":
        return `translateZ(${size})`;
      case "s2":
        return `rotateY(90deg) translateZ(${size})`;
      case "s3":
        return `rotateY(180deg) translateZ(${size})`;
      case "s4":
        return `rotateY(-90deg) translateZ(${size})`;
      case "s5":
        return `rotateX(90deg) translateZ(${size})`;
      case "s6":
        return `rotateX(-90deg) translateZ(${size})`;
    }
  }
  }
`;
