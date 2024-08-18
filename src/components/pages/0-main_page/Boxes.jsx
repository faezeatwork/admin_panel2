import React from "react";
import { Card } from "./Card";

export const Boxes = () => {
  return (
    <div className="pe-4 row">
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
        <Card
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13"
          num_last_month="18"
          backGround="today_cart_of_mainPage"
        />
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
        <Card
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13"
          num_last_month="18"
          backGround="today_other_orders_of_mainPage"
        />
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
        <Card
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13"
          num_last_month="18"
          backGround="today_orders_of_mainPage"
        />
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
        <Card
          control="card"
          supply="7"
          title="سبد خرید امروز"
          desc="سبد های خرید مانده امروز"
          num_last_week="13"
          num_last_month="18"
          backGround="total_of_mainPage"
        />
      </div>
    </div>
  );
};
