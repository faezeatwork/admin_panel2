import React from "react";
import { AddNewColor } from "./add_or_edit_color/AddNewColor";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import { getAllColorService } from "../../../services/CRUD_categoryService";
import { useEffect } from "react";
import { useState } from "react";
import { Reusable_table } from "../../general_compo/reusable_table/reusable_table1/Reusable_table";
import { Operations_colors } from "./Operations_colour";

export const ColourManagement = () => {
  const [data, setData] = useState([]);
  const [colorToEdit, setColorToEdit] = useState(null);
  //================== 📍هدرهای جدول  ======================
  const header_colorTable = [
    { field: "id", title: "id" },
    { field: "title", title: "عنوان" },
    { field: "code", title: "کد رنگ" },
  ];

  //=============  📍Get all colors =====================
  const handleGetAllColors = async () => {
    const res = await getAllColorService();

    if (res.status == 200) {
      setData(res.data.data);
     
    }
  };
  useEffect(() => {
    handleGetAllColors();
  }, []);

  //=============  📍additionField =========================
  const additionField = [
    {
      title: "رنگ",
      elements: (rowData) => {
        return (
          <div
            className="w-100"
            style={{ background: rowData.code, color: rowData.code }}
          >
            .
          </div>
        );
      },
    },
    {
      title: "عملیات",
      elements: (rowData) => {
        return (
          <Operations_colors
            rowData={rowData}
            data={data}
            setData={setData}
            colorToEdit={colorToEdit}
            setColorToEdit={setColorToEdit}
          />
        );
      },
    },
  ];

  return (
    <div className="px-4">
      <UpperPartPages title="مدیریت رنگ ها" />
      <div className="">
        <div className="row text-center d-flex justify-content-center">
          <div className=" col-lg-6 ">
            <AddNewColor
              colorToEdit={colorToEdit}
              setColorToEdit={setColorToEdit}
              setData={setData}
            />
          </div>
        </div>
        <div className="pt-5 ">
          <Reusable_table
            nameOfColumn={header_colorTable}
            dataOfRows={data}
            placeholder_searchBox="قسمتی از عنوان را وارد کنید"
            additionField={additionField}
            having_searchBox={true}
            operation={true}
            show_compo={true}
          />
        </div>
      </div>
    </div>
  );
};
