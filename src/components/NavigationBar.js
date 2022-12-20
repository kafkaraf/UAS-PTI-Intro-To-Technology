import { Container } from "react-bootstrap";
import logo from "../Image/Logo.png";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="bar">
      <Container>
        <div id="header">
          <h1 className="title">Don't Take Spike's Bones</h1>
          <h2>
            <img src={logo} alt="logo" />
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default NavigationBar;
