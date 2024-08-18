import React, { useEffect } from "react";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import { getAllBrandsService } from "../../../services/CRUD_categoryService";
import { useState } from "react";
import { Reusable_table } from "../../general_compo/reusable_table/reusable_table1/Reusable_table";
import { apiPath } from "../../../services/httpService";
import { Operations_brands } from "./Operations_brands";
import { AddNewBrands } from "./add_or_edir_brands/AddNewBrands";

export const BrandsManagement = () => {
  const [data, setData] = useState([]);
  const [brandToEdit, setBrandToEdit] = useState(null);

  //================== 📍هدرهای جدول  ================
  const header_brandsTable = [
    { field: "id", title: "id" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات" },
  ];

  //=============  📍Get all brands =====================
  const handleGetAllBrands = async () => {
    const res = await getAllBrandsService();
    try {
      if (res.status == 200) {
        setData(res.data.data);
      }
    } catch {}
  };
  useEffect(() => {
    handleGetAllBrands();
  }, []);

  //=============  📍additionField =====================
  const additionField = [
    {
      title: "لوگو",
      elements: (rowData) => (
        <>
          {rowData.logo ? (
            <img
              src={apiPath + rowData.logo}
              alt={`${rowData.original_name} logo`}
              width="40"
            />
          ) : (
            "null"
          )}
        </>
      ),
    },

    {
      title: "عملیات",
      elements: (rowData) => (
        <Operations_brands
          rowData={rowData}
          data={data}
          setData={setData}
          brandToEdit={brandToEdit}
          setBrandToEdit={setBrandToEdit}
        />
      ),
    },
  ];

  //======================  return  =======================
  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت برندها" />
        <Reusable_table
          nameOfColumn={header_brandsTable}
          dataOfRows={data}
          placeholder_searchBox="عنوان لاتین را جستجو کنید"
          go_where="/adding-brands"
          show_subGroup={true}
          show_addButton={false}
          having_searchBox={true}
          additionField={additionField}
          show_subset_icon={true}
          titleName="original_name"
        />
        <div className="text-center ">
          <AddNewBrands
            data={data}
            setData={setData}
            brandToEdit={brandToEdit}
            setBrandToEdit={setBrandToEdit}
          />
        </div>
        <div className="text-danger fs-2">اضافه کردن عکس ها : BUG</div>
      </div>
    </>
  );
};
