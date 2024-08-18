import React from "react";
import { handleDeleteOperation } from "../../../general_compo/reusable_operations/delete_operation/DeleteOperation";
import { deleteProductService } from "../../../../services/CRUD_categoryService";
import { NavLink } from "react-router-dom";

export const Operation_products = ({ rowData, data, setData }) => {
  return (
    <>
      <NavLink
        to="/adding-product"
        state={{
          title_for_editing: "ویرایش محصول",
          rowData: rowData,
        }}
      >
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش محصول"
        ></i>
      </NavLink>
      <NavLink
        to={`/product-management/${rowData.id}/adding-attribute`}
        state={{
          rowData: rowData,
        }}
      >
        <i
          className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip"
          title="ثبت ویژگی"
        ></i>
      </NavLink>

      <i
        className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف محصول"
        onClick={() =>
          handleDeleteOperation(rowData.id, data, setData, deleteProductService)
        }
      ></i>
    </>
  );
};
