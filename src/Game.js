import React from "react";
import NavigationBar from "./components/NavigationBar";
import Spike from "./components/Spike";

function Game() {
  return (
    <div className="logo">
      <NavigationBar />
      <div className="BG">
        <Spike />
      </div>
    </div>
  );
}

export default Game;
