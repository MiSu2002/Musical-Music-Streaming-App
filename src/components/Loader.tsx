//@ts-nocheck

import {loader} from '../assets';

const Loader = ({title}) => (
    <div className="d-flex justify-content-center align-items-center flex-col">
      <img src={loader} alt="loader" className='img-fluid w-[3rem] mt-20 d-flex justify-content-center'/>
      <h1 className='fw-bold fs-2 text-white mt-2'>{title || "Loading..."}</h1>
    </div>
  );
  
  export default Loader;
  