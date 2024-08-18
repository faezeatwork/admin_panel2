import React from "react";
import { MainPage } from "./0-main_page/MainPage";
import { Route, Routes } from "react-router-dom";
import { AddNewColor } from "./5-colour/add_or_edit_color/AddNewColor";
import { ProductGroupManagement } from "./1-productGroup/ProductGroupManagement";
import { ProductManagement } from "./2-product/ProductManagement";
import { BrandsManagement } from "./3-brand/BrandsManagement";
import { AddNewBrands } from "./3-brand/add_or_edir_brands/AddNewBrands";
import { AddNewGuarantee } from "./4-guarantee/add_or_edit_guarantee/AddNewGuarantee";
import { GuaranteeManagement } from "./4-guarantee/GuaranteeManagement";
import { ColourManagement } from "./5-colour/ColourManagement";
import { DiscountManagement } from "./6-discount/DiscountManagement";
import { CardsManagement } from "./7-card/CardsManagement";
import { OrdersManagement } from "./8-order/OrdersManagement";
import { SendManagement } from "./9-how_to_send/SendManagement";
import { Users } from "./10-users/Users";
import { Roles } from "./11-roles/Roles";
import { Permissions } from "./12-permission/Permissions";
import { Questions } from "./13-question/Questions";
import { ReusableAdding } from "../general_compo/reusable_operations/ReusableAdding";
import { ControlPages } from "../general_compo/reusable_operations/ControlPages";
import { Register } from "./authorization/register/Register";
import { Exit } from "../layouts/header/dropdown/Exit";
import { AddAttribute } from "../general_compo/attributes/AddAttribute";
import { AddProduct } from "./2-product/add_or_edit_product/AddProduct";
import { AddAttributes } from "./2-product/table_addition/AddAttributes";
import { AddEditUser } from "./10-users/AddEditUser";

export const Admin = () => {
  return (
    <div>
      <Routes>
        {/* ======================  داشبورد  ======================== */}
        <Route path="/" element={<ControlPages namePage={<MainPage />} />} />

        {/* ======================  ثبت ویژگی ها ======================== */}

        {/* ================= 1- مدیریت گروه محصول  ===================== */}
        <Route
          path="/product-group-management"
          element={<ControlPages namePage={<ProductGroupManagement />} />}
        >
          <Route path=":productId" />
        </Route>
        <Route
          path="/product-group-management/:productId/adding-attribute"
          element={<AddAttribute />}
        >
          <Route path=":attId" />
        </Route>
        <Route path="/adding-items" element={<ReusableAdding />} />

        {/* =================== 2- مدیریت محصول ======================== */}
        <Route
          path="/product-management"
          element={<ControlPages namePage={<ProductManagement />} />}
        />
        <Route
          path="/product-management/:productId/adding-attribute"
          element={<AddAttributes />}
        ></Route>
        <Route path="/adding-product" element={<AddProduct />} />

        {/* ===================  مدیریت برندها   ===================== */}
        <Route
          path="/brand-management"
          element={<ControlPages namePage={<BrandsManagement />} />}
        />
        <Route path="/adding-brands" element={<AddNewBrands />} />

        {/* ==================  مدیریت گارانتی ها  ================== */}
        <Route
          path="/guarantee-management"
          element={<ControlPages namePage={<GuaranteeManagement />} />}
        />
        <Route path="/adding-guarantee" element={<AddNewGuarantee />} />

        {/* ==================  مدیریت رنگ ها  ====================== */}
        <Route
          path="/colour-management"
          element={<ControlPages namePage={<ColourManagement />} />}
        />
        <Route path="/add-colour" element={<AddNewColor />} />

        {/* ==================  مدیریت تخفیف ها  ==================== */}
        <Route
          path="/discount-management"
          element={<ControlPages namePage={<DiscountManagement />} />}
        >
          <Route path="/discount-management/add-edit-discount" />
        </Route>

        {/* ==================  مدیریت سبد ها  ====================== */}
        <Route
          path="/card-management"
          element={<ControlPages namePage={<CardsManagement />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

        {/* ==================  مدیریت سفارشات  ==================== */}
        <Route
          path="/order-management"
          element={<ControlPages namePage={<OrdersManagement />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

        {/* =================  مدیریت نحوه ارسال ================== */}
        <Route
          path="/send-management"
          element={<ControlPages namePage={<SendManagement />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}
        {/* =================  کاربران  ================== */}
        <Route path="/users" element={<ControlPages namePage={<Users />} />} />

        <Route path="/add-user" element={<AddEditUser />} />

        {/* ==================    نقش ها   ======================= */}
        <Route path="/roles" element={<ControlPages namePage={<Roles />} />} />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

        {/* ==================    مجوز ها   ====================== */}
        <Route
          path="/license"
          element={<ControlPages namePage={<Permissions />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

        {/* ==================    سوالات    ======================= */}
        <Route
          path="/question"
          element={<ControlPages namePage={<Questions />} />}
        />
        {/* <Route path="/add-colour" element={<AddColour />} /> */}

        {/* ==================    register    ======================= */}
        <Route path="/register" element={<Register />} />

        {/* ====================================================== */}

        <Route path="/exit" element={<Exit />} />

        {/* ====================================================== */}

        <Route path="*" element={<ControlPages namePage={<MainPage />} />} />
      </Routes>
    </div>
  );
};
