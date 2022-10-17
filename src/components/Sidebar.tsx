//@ts-nocheck

import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { links } from "../assets/constants";
import { FaHome } from "react-icons/fa";

const Sidebar = ({ handleClick }) => {
  return (
    <div>
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

      <div className="mt-10 position-fixed">
        {links.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className="icons d-flex flex-row justify-content-center text-decoration-none align-items-center my-8 xl:my-15 fw-medium text-gray-200 hover:text-violet-500"
            onClick={() => handleClick && handleClick()}
          >
            <item.icon
              className={`each w-10 h-8 bg-no-repeat ml-[5vw] lg:ml-[5.5vw] xl:w-16 xl:h-10
          ${item.icon === FaHome ? "mt-[15vh] flex justify-center" : "mt-0"}`}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;