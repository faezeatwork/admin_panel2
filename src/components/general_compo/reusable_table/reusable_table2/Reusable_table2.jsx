import React from "react";
import { useState } from "react";
import { getProductsService } from "../../../../services/CRUD_categoryService";
import { useEffect } from "react";
import { UpperPartPages } from "../../reusable_operations/UpperPartPages";
import { NavLink } from "react-router-dom";
import { AddItem_btn } from "../../add_or_edit_product/AddItem_btn";
import { Pagination } from "./Pagination";
import { Table } from "./Table";

export const Reusable_table2 = ({ nameOfColumn, data, setData, go_where }) => {
  const [currentPage, setCurrentPage] = useState(1); //صفحه فعلی
  const [countOfProducts_everyPage, setCountOfProducts_everyPage] = useState(5); // تعداد محصولات که در هر صفحه نمایش داده میشود
  const [pageCount, setPageCount] = useState([]); //تعداد کل صفحات
  const [listOfPages, setListOfPages] = useState([]); //یک ارایه از تعداد صفحات
  const [charSearch, setSearchChar] = useState("");
  const [loading, setLoading] = useState(false);

  //============== 📍 گرفتن محصولات ===================
  const handleGetProducts = async (page, count, char) => {
    setLoading(true);
    const res = await getProductsService(page, count, char);
    setLoading(false);
    if (res.status == 200) {
      setData(res.data.data);
      setPageCount(res.data.last_page);
    }
  };
  useEffect(() => {
    handleGetProducts(currentPage, countOfProducts_everyPage, charSearch);
  }, [currentPage, charSearch]);

  //============== 📍 هندل سرچ باکس ===================
  const handleSearch = (char) => {
    setSearchChar(char);
    handleGetProducts(1, countOfProducts_everyPage, char);
  };

  let timeOut;
  const handleSetSearchChar = (char) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      handleSearch(char);
    }, 1000);
  };
  //===================================================
  useEffect(() => {
    let pArr = [];
    for (let i = 1; i <= pageCount; i++) pArr.push(i);
    setListOfPages(pArr);
  }, [pageCount]);

  return (
    <div className="p-4 reusable_table">
      <UpperPartPages title="مدیریت محصول" />
      <div className="d-flex justify-content-between align-items-center p-2">
        {/* ================== 🔍 start searchBox👇 ================== */}
        <div className="input-group mb-3 searchBox">
          <span className="input-group-text searchButton " id="basic-addon2">
            جستجو
          </span>
          <input
            type="text"
            className="form-control searchInput"
            placeholder="قسمتی از عنوان را جستجو کنید"
            onChange={(e) => handleSetSearchChar(e.target.value)}
          />
        </div>

        {/* ================== 🔍 end searchBox👆 ==================== */}

        {/* ================== ➕ start show_addButton👇 ================== */}
        <NavLink
          to="/adding-product"
          state={{
            title_for_adding: "اضافه کردن محصول جدید",
          }}
        >
          {/*👉 AddProduct component in 2-product*/}
          <AddItem_btn />
        </NavLink>
        {/* ================== ➕ end show_addButton👆 ==================== */}
      </div>
      <Table data={data} nameOfColumn={nameOfColumn} loading={loading} />
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        listOfPages={listOfPages}
        data={data}
      />
    </div>
  );
};
//⭐README
//این جدول فرقش با اون یکی جدول1 در این هست که
// تعداد آیتم هایی که از سمت سرور میتونیم بگیریم
// میتونه خیلی خیلی زیاد باشه
// پس همه رو باهم نمیگیره
//هر شماره صفحه رو کلیک کنی میره سمت سرور
// و دیتاهای اون صفحه رو میگیره
//اش هم محزاست چون باید متفاوت عمل کنه pagination2
