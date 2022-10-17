//@ts-nocheck

import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 d-flex align-items-center justify-content-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%] mt-3">
      <p className="truncate text-white font-bold fs-4 d-flex justify-content-start">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="artist truncate text-gray-300 text-sm d-flex justify-content-start">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
