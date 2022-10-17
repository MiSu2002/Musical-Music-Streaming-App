//@ts-nocheck

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import "../styles.css";

const Discover = () => {
  const dispatch = useDispatch();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div>
      <div className="mt-5 g-0 ms-1 ms-xl-3">
        <h2 className="fw-bolder text-md-start me-5 fs-1 ms-xl-1">
          Discover {genreTitle}
        </h2>
        <div className="d-flex justify-content-center me-3 justify-content-md-start">
          <select
            onChange={() => {}}
            value=""
            className="selectbox btn bg-dark fw-regular text-white p-2 me-5 rounded-pill mb-2 mb-md-0 group:hover flex"
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex flex-wrap justify-content-center me-5 justify-content-md-start d-grid gap-5 mt-5">
          {data?.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;