import React from 'react';
import Discover from './pages/Discover';
import './styles.css'

function DisplayBoard(){
    return(
        <div className="board">
            <div className="row g-0">

            {/* Profile pic in xs devices */}

            <div className="d-block d-sm-none">
                    <div className="ms-3 mt-2">
                    <div className="profile position-relative mt-3"></div>
                    </div>
                    </div>

                {/* SideBar component */}
                <div className="sidebar d-none d-sm-block col-sm-2">

                    {/* Hidden on smaller devices */}
                    <div className="d-none d-lg-block">
                    <div className="d-flex justify-content-end container ms-xxl-4 mt-4">
                    <div className="profile mt-2"></div>
                    </div>
                    </div>

                    {/* Visible on smaller devices */}
                    <div className="d-block d-lg-none">
                    <div className="container ms-2 ms-md-3 mt-4">
                    <div className="profile mt-2"></div>
                    </div>
                    </div>

                </div>


                <div className="col-sm-10">
                <div className="row mt-sm-5 me-4 ms-4">
                        <div className="col-12 col-lg-6 col-xl-7">
                            <input type="text" className="searchbar form-control rounded-pill mt-sm-3 ms-xl-3" placeholder="Search for songs, artists, genres and more...">
                            </input>
                        </div>
                    </div>
                <div className="container ms-4 me-4">
                    <Discover/>
                </div>
                </div>
            </div>
            </div>
    );
}

export default DisplayBoard;

{/* <div className="container ms-lg-5">
            
            </div> */}