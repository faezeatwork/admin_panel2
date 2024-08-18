import React from "react";
import { deleteGuaranteeService } from "../../../services/CRUD_categoryService";
import { handleDeleteOperation } from "../../general_compo/reusable_operations/delete_operation/DeleteOperation";

export const Operations_guarantee = ({
  rowData,
  setGuaranteeToEdit,
  data,
  setData,
}) => {
  return (
    <div>
      <i
        className="icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
        title="ویرایش محصول"
        data-bs-placement="top"
        data-bs-toggle="modal"
        data-bs-target="#add-brand-modal"
        onClick={() => setGuaranteeToEdit(rowData)}
      ></i>

      <i
        className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
        title="حذف محصول"
        onClick={() =>
          handleDeleteOperation(
            rowData.id,
            data,
            setData,
            deleteGuaranteeService
          )
        }
      ></i>
    </div>
  );
};
