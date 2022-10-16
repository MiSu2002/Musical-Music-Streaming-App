import React from "react";

const Sidebar = () => (
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
  </div>
);

export default Sidebar;
