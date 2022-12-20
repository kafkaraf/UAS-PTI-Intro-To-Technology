import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Game from "./Game";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Game" element={<Game />} />
    </Routes>
  </BrowserRouter>
);
