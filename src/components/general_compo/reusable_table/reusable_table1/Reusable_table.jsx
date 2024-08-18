import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PrevPageBtn } from "../../reusable_operations/PrevPageBtn";
import { Pagination } from "./Pagination";
import { SearchBox } from "../../reusable_operations/SearchBox";
import { AddItem_btn } from "../../add_or_edit_product/AddItem_btn";
import { Table } from "../reusable_table1/Table";


const numOfRows_singlePage = 5; //در هر صفحه چند ردیف از حدول نمایش داده شود

export const Reusable_table = (props) => {
  const location = useLocation();
  //🏮👉 اشonClick :از این هوک اینجا استفاده شده in Operations_product

  const {
    nameOfColumn, // اسم هر کدام از ستون ها- هدرها
    dataOfRows, //کل دیتاهایی که از بک اند میگیریم
    placeholder_searchBox,
    go_where, //this icon ➕ link to where - hamishe ham link nist
    show_addButton,
    modal_addButton,
    modal_compo,
    show_compo,
    show_subGroup,
    having_searchBox,
    additionField,
  } = props;

  const [dataAnyPage, setDataAnyPage] = useState([]); //slice shodeye dataOfRows
  const [currentPage, setCurrentPage] = useState(1);
  const [countPage, setCountPage] = useState(2); //page_count = dataOfRows.length / numOfRows_singlePage (تعداد کل صفحات)
  const [pageArr, setPageArr] = useState([]); //[0,1,2,3,4,...,countPage]
  const [searchData, setSearchData] = useState(dataAnyPage);
  const [searchChar, setSearchChar] = useState("");

  //======== فیلتر کردن آیتم هایی که نمایش داده می شود برحسب سرچ ===========
  useEffect(() => {
    dataOfRows[0]?.title
      ? setSearchData(dataOfRows.filter((d) => d.title?.includes(searchChar)))
      : dataOfRows[0]?.original_name
      ? setSearchData(
          dataOfRows.filter((d) => d.original_name?.includes(searchChar))
        )
      : console.log("hint: check name of title(for search box)");
  }, [searchChar, dataOfRows]);
  //==================   تقسیم کردن ردیف ها بین صفحات   ======================
  useEffect(() => {
    //in useEffect , row ha ro be tedad page ha slice mikone
    const start = currentPage * numOfRows_singlePage - numOfRows_singlePage;
    const end = currentPage * numOfRows_singlePage;
    setDataAnyPage(searchData.slice(start, end));
  }, [currentPage, searchData]);

  //==========================================================================

  useEffect(() => {
    // Math.ceil() ==> round to up number
    const page_count = Math.ceil(searchData.length / numOfRows_singlePage);
    setCountPage(page_count);
    // ========================= //
    let arrOfPages = [];
    for (let i = 1; i <= page_count; i++) arrOfPages = [...arrOfPages, i]; //[0,1,2,3,4,...,dataOfRows.length]
    setPageArr(arrOfPages);
    setCurrentPage(1);
  }, [searchData]);

  //===============================  return ==================================

  return (
    <div className="p-1 reusable_table">
      {show_subGroup ? (
        location.state ? (
          <h5 className="text-center d-flex justify-content-center">
            زیر گروه:
            <PrevPageBtn
              returnTitle={
                location.state?.parentData
                  ? location.state.parentData?.title
                  : "dd"
              }
            />
          </h5>
        ) : null
      ) : null}

      <div className="d-flex justify-content-between align-items-center p-2">
        {/* ================== 🔍 start searchBox👇 ================== */}
        {having_searchBox ? (
          <SearchBox
            setSearchChar={setSearchChar}
            placeholder_searchBox={placeholder_searchBox}
          />
        ) : null}

        {/* ================== 🔍 end searchBox👆 ==================== */}

        {/* ================== ➕ start show_addButton👇 ================== */}
        {/* in icon ➕  */}
        {show_addButton ? (
          <NavLink to={go_where}>
            <AddItem_btn show_compo={show_compo} />
          </NavLink>
        ) : null}
        {modal_addButton && modal_compo}
        {/* ================== ➕ end show_addButton👆 ==================== */}
      </div>
  
      {/* ================== start table👇 ====================== */}
      <Table
        dataOfRows={dataOfRows}
        nameOfColumn={nameOfColumn}
        additionField={additionField}
        dataAnyPage={dataAnyPage}
      />
      {/* ================== end table👆 ======================== */}

      {/* ================== start pagination👇 ================= */}
      <Pagination
        countPage={countPage}
        currentPage={currentPage}
        setCountPage={setCountPage}
        pageArr={pageArr}
        setCurrentPage={setCurrentPage}
      />
      {/* ================== end pagination👆 =================== */}
    </div>
  );
};
