//@ts-nocheck

import React from "react";
import Discover from "../pages/Discover";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import TopBar from "./TopBar";
import "../styles.css";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <div className="board">
      <div className="row g-0">
        <TopBar />

        {/* SideBar component */}
        <div className="sidebar d-none d-sm-block col-sm-2 rounded-0">
          <Sidebar />
        </div>

        <div className="col-sm-10">
          <div className="row mt-sm-5 me-4 ms-4">
            <Searchbar />
          </div>
          <div className="container ms-4 me-4">
            <Routes>
              <Route path="/" element={<Discover />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;