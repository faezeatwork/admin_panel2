import React from "react";
import { handleDeleteOperation } from "../../general_compo/reusable_operations/delete_operation/DeleteOperation";
import { deleteDiscountService } from "../../../services/CRUD_categoryService";
import { NavLink } from "react-router-dom";

export const Operation_discounts = ({
  rowData,
  data,
  setData,
  setDiscountToEdit,
}) => {
  return (
    <span className=" d-flex justify-content-center align-items-center">
      <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        {/* دکمه ویرایش کد تخفیف 👇 */}
        <NavLink to={"/discount-management/add-edit-discount"}>
          <i
            className=" icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
            onClick={() => {
              setDiscountToEdit(rowData);
            }}
          ></i>
        </NavLink>
      </span>
      {/* دکمه حذف کد تخفیف 👇 */}
      <i
        className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
        title="حذف محصول"
        onClick={() => {
          handleDeleteOperation(
            rowData.id,
            data,
            setData,
            deleteDiscountService
          );
        }}
      ></i>
    </span>
  );
};



