import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice'

const SongCard = ({song, i}) => {
  
  const activeSong = '';

  return(
    <div className="songcard d-flex flex-column p-4 rounded">
      <div className="box1 position-relative">
        <div className={`absolute bg-black flex justify-center items-center
        ${activeSong?.title === song.title ? 'd-flex bg-dark' : 'visually-hidden'}`}>
          <PlayPause/>
        </div>
        <img className="album-image" alt='song_img' src={song.images?.coverart}/>
      </div>

      <div className="mt-3 d-flex flex-column">
        <p className='title mt-2 fw-semibold text-truncate text-start'>
          <Link className='link text-white text-decoration-none' to={`/songs/$(song?.key)`}>
          {song.title}
          </Link>
        </p>
        <p className='subtitle fs-5 text-truncate text-start'>
          <Link className='link text-decoration-none' to={song.artists ? `/artists/$song?.artists[0]?.adamid}` : '/top-artists'}>
          {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
}
  
  export default SongCard;
  