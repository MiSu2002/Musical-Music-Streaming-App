//@ts-nocheck

import * as React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";

const TopBar = ({ handleClick }) => {
  return (
    <div>
      {/* Logo and Profile pic in xs devices */}

      <div className="d-block d-sm-none">
        <div className="row g-0">
          {/* Logo */}

          <div className="col-6">
            <div className="d-flex justify-content-start logo mt-3"></div>
          </div>

          {/* Profile Pic */}
          <div className="col-6">
            <div className="me-3 mt-2 d-flex justify-content-end">
              <div className="profile position-relative mt-2">
                <div className="dropdown">
                  <button
                    className="dropdown-toggle profile-menu mt-1 p-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                  ></button>
                  <ul className="dropdown-menu fw-semibold fs-5">
                    {links.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="d-flex flex-row justify-content-start ms-3 align-items-center my-3 text-decoration-none text-sm fw-medium text-gray-200 hover:text-violet-500"
                        onClick={() => handleClick && handleClick()}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute md:hidden block top-6 me-3"></div>
      </div>
    </div>
  );
};

export default TopBar;