//@ts-nocheck

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Player from "./Player";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="songcard d-flex flex-column p-3 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="box1 relative group">
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 justify-center items-center group-hover:flex
        ${
          activeSong?.title === song.title
            ? "flex bg-black bg-opacity-70"
            : "hidden"
        }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} />
      </div>

      <div className="mt-2 mb-2 d-flex flex-column">
        <p className="title fw-semibold text-truncate text-start">
          <Link
            className="link text-white text-decoration-none"
            to={`/songs/$(song?.key)`}
          >
            {song.title}
          </Link>
        </p>
        <p className="subtitle fs-5 text-truncate text-start">
          <Link
            className="link text-decoration-none"
            to={
              song.artists
                ? `/artists/$song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;