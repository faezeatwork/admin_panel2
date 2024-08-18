import React from "react";
import { AddNewDiscounts_modal } from "./AddNewDiscounts_modal";

export const handleAddDiscounts = (discountToEdit, setDiscountToEdit) => {
  return (
    <AddNewDiscounts_modal
      discountToEdit={discountToEdit}
      setDiscountToEdit={setDiscountToEdit}
    />
  );
};
