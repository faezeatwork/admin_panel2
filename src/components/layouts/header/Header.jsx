import React from "react";
import Dropdown from "./dropdown/Dropdown";

export const Header = () => {
  return (
    <div className="headerDiv w-100 shadow">
      <div className="header w-100 d-flex justify-content-between">
        <div className="form-check form-switch d-flex align-items-center justify-content-center w-25">
          <input
            type="checkbox"
            className="form-check-input pointer"
            id="handle_toggle_sideMenu"
          />
        </div>
        <Dropdown />
      </div>
    </div>
  );
};
