//@ts-nocheck

import React from "react";

const Searchbar = () => (
  <div>
    <div className="col-12 col-lg-6 col-xl-7">
      <input
        type="text"
        className="searchbar form-control rounded-pill mt-sm-3 ms-xl-3"
        placeholder="           Search for songs, artists, genres and more..."
      ></input>
    </div>
  </div>
);

export default Searchbar;