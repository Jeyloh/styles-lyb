import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import { Shuffle, RotatingCube, Cube3D } from "./modules"
import BurntBox from "./modules/BurntBox";

class App extends Component {
  render () {
    return <BurntBox/>;
    return (
      <GridContainer>

        <GridBox>
          <RotatingCube/>
        </GridBox>
        <GridBox>
          <Cube3D/>
        </GridBox>
        <GridBox>
          <Shuffle />
        </GridBox>
        <GridBox>
          <h1>tba</h1>
        </GridBox>
        <GridBox>
          <h1>tba</h1>
        </GridBox>
        <GridBox>
          <h1>tba</h1>
        </GridBox>


      </GridContainer>
    );
  }
}

export default App;

const GridContainer = styled.div`
  z-index: -10;
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  background-color: #fff;
`;

const GridBox = styled.div`
  position: relative;
  background-color: #444;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px;
`;