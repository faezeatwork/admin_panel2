import React from "react";

export const Card = (props) => {
  const { supply, title, desc, num_last_week, num_last_month, backGround } =
    props;
  return (
    <div className="">
      {/* =================== تیکه بالا کارت ها ============== */}
      <div className="mt-2 box_of_mainPage">
        <div
          className={`pointer p-3 rounded-top box1_of_mainPage ${backGround} d-flex justify-content-between`}
        >
          <div>
            <div>{supply}</div>
            <div>{title}</div>
            <div>{desc}</div>
          </div>
          <div className=" ms-4 mt-3 icon_of_mainPage d-flex justify-content-center rounded-circle align-items-center">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
        {/* =================== تیکه پایین کارت ها ============== */}
        <div
          className={`pointer p-3 mt-2 rounded-bottom box1_of_mainPage box2_of_mainPage ${backGround}`}
        >
          <div>{num_last_week} در هفته گذشته</div>
          <div>{num_last_month}  در ماه گذشته</div>
        </div>
      </div>
    </div>
  );
};
