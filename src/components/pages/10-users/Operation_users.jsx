import React from "react";
import { handleDeleteOperation } from "../../general_compo/reusable_operations/delete_operation/DeleteOperation";
import { deleteUserService } from "../../../services/CRUD_categoryService";
import { NavLink } from "react-router-dom";

export const Operation_users = (rowData, data, setData) => {
  return (
    <div>
      <NavLink
        to="/add-user"
        state={{
          title_for_editing: "ویرایش محصول",
          rowData: rowData,
        }}
      >
        <i
          className=" icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
          title="ویرایش محصول"
          onClick={() => console.log(rowData)}
        ></i>
      </NavLink>
      <i
        className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
        title="حذف محصول"
        onClick={() => {
          handleDeleteOperation(rowData.id, data, setData, deleteUserService);
        }}
      ></i>
    </div>
  );
};
