import React from "react";
import { ItemsOfList } from "./ItemsOfList";
import { Title_itemsOfList } from "./Title_itemsOfList";

export const Sidebar = () => {
  return (
    <section id="sidebar_section">
      <div className=" mini_sidebar bg-dark vh-100">
        <ul className="p-0 pt-3">
          <ItemsOfList targetPath="/" item="داشبورد" icon="fa-tachometer-alt" />
          {/* ======================= فروشگاه ======================== */}
          <Title_itemsOfList item="فروشگاه" />
          <ItemsOfList
            targetPath="/product-group-management"
            item="مدیریت گروه محصولات"
            icon="fa-stream"
          />
          <ItemsOfList
            targetPath="/product-management"
            item="مدیریت محصول"
            icon="fa-cube"
          />
          <ItemsOfList
            targetPath="/brand-management"
            item="مدیریت برندها"
            icon="fa-copyright"
          />
          <ItemsOfList
            targetPath="/guarantee-management"
            item="مدیریت گارانتی ها"
            icon="fa-pagelines"
          />
          <ItemsOfList
            targetPath="/colour-management"
            item="مدیریت رنگ ها"
            icon="fa-palette"
          />
          <ItemsOfList
            targetPath="/discount-management"
            item="مدیریت تخفیف ها"
            icon="fa-percentage"
          />
          {/* ======================= سفارشات و سبد ======================== */}
          <Title_itemsOfList item="سفارشات و سبد " />
          <ItemsOfList
            targetPath="/card-management"
            item="مدیریت سبدها"
            icon="fa-shopping-basket"
          />
          <ItemsOfList
            targetPath="/order-management"
            item="مدیریرت سفارشات"
            icon="fa-luggage-cart"
          />
          <ItemsOfList
            targetPath="/send-management"
            item="مدیریت نحوه ارسال"
            icon="fa-truck-loading"
          />
          {/* ======================= کاربران و همکاران ======================== */}
          <Title_itemsOfList item="کاربران و همکاران " />
          <ItemsOfList
            targetPath="/users"
            item="مدیریت کاربران"
            icon="fa-users"
          />
          <ItemsOfList targetPath="/roles" item="نفش ها" icon="fa-user-tag" />
          <ItemsOfList
            targetPath="/license"
            item="مجوزها"
            icon="fa-shield-alt"
          />
          {/* ======================= ارتباطات ======================== */}
          <Title_itemsOfList item="ارتباطات" />
          <ItemsOfList
            targetPath="/question"
            item="سوالات"
            icon="fa-question-circle"
          />
        </ul>
      </div>
    </section>
  );
};
