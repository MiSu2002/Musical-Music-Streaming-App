import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {PlayPause} from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice'

const SongCard = ({song, i}) => {
  
  const activeSong = 'Test';

  return(
    <div className="songcard d-flex flex-col p-4 bg-white rounded">
      <div className="box1 position-relative bg-light">
        <div className={`position-absolute d-flex justify-content-center items-center bg-black
        ${activeSong?.title === song.title ? 'd-flex bg-dark' : 'visually-hidden'}`}></div>
      </div>
    </div>
  );
}
  
  export default SongCard;
  