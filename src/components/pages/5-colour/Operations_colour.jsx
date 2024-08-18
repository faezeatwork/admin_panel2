import React from "react";
import { deleteColorService } from "../../../services/CRUD_categoryService";
import { handleDeleteOperation } from "../../general_compo/reusable_operations/delete_operation/DeleteOperation";


export const Operations_colors = ({
  rowData,
  data,
  setData,

  setColorToEdit,
}) => {


  return (
    <div>
      <i
        className="icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
        title="ویرایش محصول"
        onClick={() => setColorToEdit(rowData)}
      ></i>

      <i
        className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
        title="حذف محصول"
        onClick={() => {
          handleDeleteOperation(rowData.id, data, setData, deleteColorService);
        }}
      ></i>
    </div>
  );
};
