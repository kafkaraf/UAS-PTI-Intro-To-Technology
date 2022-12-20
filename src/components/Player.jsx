import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ListPlayer from "./ListPlayer";

export default function Player() {
  const [textInput, setTextInput] = useState("");
  const [setPlayer] = useState("");
  const [jmlhPlayer, setJmlh] = useState(0);
  const [playerList, setPlayerList] = useState([]);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const passData = {
    playerAmount: jmlhPlayer
  };

  const navigateToGame = () => {
    if (jmlhPlayer < 2) {
      alert("Kurang Player");
    } else {
      navigate("/Game", {
        state: passData
      });
    }
  };

  function handlePlayerList(event) {
    if (textInput === "") {
      alert("Input Player");
    } else {
      const arr = [...playerList, textInput];
      setPlayerList(arr);
      setJmlh(jmlhPlayer + 1);
    }
  }

  function handleCount() {
    if (textInput !== "") {
      setCount(count + 1);
    }
  }

  function handleChangeNumber(event) {
    if (textInput !== "") {
      setTextInput("");
    }
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setTextInput(newValue);
  }

  return (
    <div>
      <div class="player-list">
        <h1 id="pemain">Player</h1>
      </div>
      <div
        style={{ paddingRight: "40%", paddingLeft: "40%", textAlign: "center" }}
      >
        <input
          type="text"
          class="form"
          id="newplayer"
          value={textInput}
          onChange={handleChange}
          required
        />
      </div>
      <div class="buttons">
        <div id="firstbutton">
          <button
            type="button"
            id="add-player"
            onClick={(event) => {
              handlePlayerList();
              handleChangeNumber();
              handleCount();
            }}
          >
            Add Player
          </button>
        </div>

        <div id="secondbutton">
          <button type="button" id="play" onClick={navigateToGame}>
            Play
          </button>
        </div>
      </div>
      <ul id="player-names">
        {playerList.map((textInput, index) => (
          <ListPlayer key={index} id={index} text={textInput} />
        ))}
      </ul>
    </div>
  );
}
