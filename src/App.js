import React from "react";
import NavigationBar from "./components/NavigationBar";
import Player from "./components/Player";
import "./style/landingPage.css";
import "./style/Word.css";

function App() {
  return (
    <div className="logo">
      <NavigationBar />
      <div className="BG">
        <Player />
      </div>
    </div>
  );
}

export default App;
