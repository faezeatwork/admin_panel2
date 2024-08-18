import React from "react";
import { NavLink } from "react-router-dom";

export const ItemsOfList = (props) => {
  const { icon, item, targetPath } = props;
  return (
    <div className="pb-2">
      <NavLink
        to={targetPath}
        href="../pages/product_group_management/ProductGroupManagement"
        className="text-decoration-none"
      >
        <li className="p-2 sidebar_menu_item d-flex justify-content-start align-items-center pointer">
          <i className={`ps-1 icon fas ${icon} text-light icon`}></i>
          <span
            className="items_of_sidebar_list d-none text-light "
            id="sidebar_items"
          >
            {item}
          </span>
        </li>
      </NavLink>
    </div>
  );
};
