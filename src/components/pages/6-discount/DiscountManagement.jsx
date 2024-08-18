import React, { useState } from "react";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import { useEffect } from "react";
import { getAllDiscountsService } from "../../../services/CRUD_categoryService";
import { Reusable_table } from "../../general_compo/reusable_table/reusable_table1/Reusable_table";
import { handle_header_discountsTable } from "./FormikHelper_discounts";
import { handleAddDiscounts } from "./handleAddDiscounts";

export const DiscountManagement = () => {
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(1);
  const [discountToEdit, setDiscountToEdit] = useState({});
  //============= 👇گرفتن همه تخفیف ها 📍 =================
  const handleGetAllDiscounts = async () => {
    const res = await getAllDiscountsService();
    if (res.status == 200) {
      setData(res.data.data);
    }
  };

  useEffect(() => {
    handleGetAllDiscounts();
  }, [forceRender]);

  //=================== 👇 force render table ================
  useEffect(() => {
    document
      .getElementById("btn-close-modal-discount")
      .addEventListener("click", () => {
        setForceRender((i) => i + 1);
      });
  }, []);

  // ======================= 👇return ==========================
  return (
    <>
      <div className="px-4">
        <UpperPartPages title="مدیریت تخفیف ها" />
        <div className="pt-5">
          <Reusable_table
            nameOfColumn={handle_header_discountsTable(
              data,
              setData,
              setDiscountToEdit
            )}
            dataOfRows={data}
            placeholder_searchBox="قسمتی از عنوان را وارد کنید"
            having_searchBox={true}
            modal_addButton={true}
            modal_compo={handleAddDiscounts(discountToEdit, setDiscountToEdit)}
          />
        </div>
      </div>
    </>
  );
};
