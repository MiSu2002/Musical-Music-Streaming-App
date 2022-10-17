//@ts-nocheck

import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
import "./styles.css";
import Main from "./components/main";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="App">
      <div className="flex justify-start d-none d-md-block logo mt-3"></div>
      <header className="App-header">
        <Main />
      </header>
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#4e2a80] backdrop-blur-lg rounded-pill z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
