import React from "react";
import { deleteAttributeService } from "../../../services/CRUD_categoryService";
import { handleDeleteOperation } from "../reusable_operations/delete_operation/DeleteOperation";

export const Operations_attributes = ({
  rowData,
  data,
  setData,
  getAttToEdit,
  setGetAttToEdit,
}) => {
  //console.log(rowData.in_filter);
  return (
    <div
      className={`rounded ${
        getAttToEdit && rowData.id == getAttToEdit.attributeId ? "shadow" : null
      }`}
    >
      <i
        className="icon_product_table fas fa-edit text-warning mx-1 pointer has_tooltip"
        title="ویرایش محصول"
        onClick={() => {
          setGetAttToEdit({
            attributeId: rowData.id,
            attributeTitle: rowData.title,
            attributeUnit: rowData.unit,
            switchShowFilter: rowData.in_filter == "0" ? 0 : 1,
          });
        }}
      ></i>

      <i
        className="icon_product_table fas fa-times text-danger mx-1 pointer has_tooltip"
        title="حذف محصول"
        onClick={() => {
          handleDeleteOperation(
            rowData.id,
            data,
            setData,
            deleteAttributeService
          );
        }}
      ></i>
    </div>
  );
};
