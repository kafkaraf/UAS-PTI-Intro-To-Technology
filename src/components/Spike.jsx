import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import sleep from "../Image/Sleep.png";
import tulang from "../Image/Bones.png";

export default function Spike() {
  let bones = [];
  const [time, setTime] = useState(15);
  const [count, setCount] = useState(1);
  const location = useLocation();
  const passData = location.any;
  const navigate = useNavigate();

  function handleClick(event) {
    document.getElementById("click").play();
    setTime(10);
    setCount(count + 1);
    if (count === passData.playerAmount) {
      setCount(1);
    }
    const id = event.target.id;
    document.getElementById(id).style.display = "none";
    if (id) {
      gameplay();
    }
    var newPlayer = "";
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (time === 0) {
        gameplay();
      } else {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div id="full-game">
      <div className="Gameatas">
        <h4 id="play-turn">Turns: Player {count}</h4>
        <h4 id="countdown">Times: {time} Seconds</h4>
      </div>
      <img
        style={{ width: "30%", marginLeft: "35%" }}
        src={sleep}
        alt="anjingtidur"
        id="anjing"
      />

      <div>
        <img
          style={{ width: "5%", marginLeft: "25%" }}
          src={tulang}
          alt="tulangbones"
          id="bai"
        />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
      </div>

      <div>
        <img
          style={{ width: "5%", marginLeft: "25%" }}
          src={tulang}
          alt="tulangbones"
          id="bai"
        />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
        <img style={{ width: "5%" }} src={tulang} alt="tulangbones" id="bai" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,0.1fr)",
          gap: "5%",
          justifyContent: "center",
          marginTop: "5%"
        }}
      >
        {bones}
      </div>
    </div>
  );
}
