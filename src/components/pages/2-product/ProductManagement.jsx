import React from "react";
import { Reusable_table2 } from "../../general_compo/reusable_table/reusable_table2/Reusable_table2";
import { Operation_products } from "./table_addition/Operation_products";
import { useState } from "react";

export const ProductManagement = () => {
  const [data, setData] = useState([]); //محصولات موجود در هر صفحه
  //============== هدرهای جدول📍====================
  const headers_productTable = [
    { field: "id", title: "#" },
    {
      field: null,
      title: "گروه (های) محصول",
      elements: (rowData) => {
        const titleOfProducts = rowData.categories
          .map((item) => item.title)
          .join(" - ");
        return rowData.categories[0] ? titleOfProducts : "__";
      },
    },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "stock", title: "موجودی" },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Operation_products rowData={rowData} data={data} setData={setData} />
      ),
    },
  ];
  return (
    <div>
      <Reusable_table2
        nameOfColumn={headers_productTable}
        data={data}
        setData={setData}
        go_where="/adding-product"
      />
    </div>
  );
};
