import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Dropdown = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    swal({
      title: "می خواهید از صفحه کاربری خود خارج شوید؟",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        navigate("/exit");
        swal("خروج با موفقیت انجام شد!", {
          icon: "success",
        });
      } else {
        swal("خروج متوقف شد.");
      }
    });
  };

  return (
    <div className="d-flex justify-content-end align-items-center">
      {/*1 🔍 👇 */}
      <i className="headerLogos fa-solid fa-magnifying-glass p-3 fs-4 pointer"></i>{" "}
      {/*2 🔔 👇*/}
      <i className="headerLogos fa-regular fa-bell p-3 fs-4 pointer"></i>{" "}
      {/*3 📃 👇*/}
      <div className="btn-group ul_header z-3">
        <button
          type="button"
          className="btn headerLogos dropdown-toggle p-0"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-sharp fa-solid fa-list-ul fs-4"></i>
        </button>
        <ul className="dropdown-menu text-end">
          {/* ============================================ */}
          <NavLink to={"/"} className="text-decoration-none">
            <li className="dropdown-item">
              <i className="fa-solid fa-gauge ps-2"></i> داشبورد
            </li>
          </NavLink>
          {/* ============================================= */}
          <NavLink to={"/"} className="text-decoration-none">
            <li className="dropdown-item">
              <i className="fa-brands fa-telegram ps-2"></i> تیکت ها
            </li>
          </NavLink>
          {/* ============================================== */}
          <NavLink to={"/"} className="text-decoration-none">
            <li className="dropdown-item">
              <i className="fa-solid fa-envelope ps-2"></i> پیام ها
            </li>
          </NavLink>
          {/* ============================================== */}
          <li className="hr-li-header">
            <hr className="dropdown-divider" />
          </li>
          {/* ============================================== */}
          <div onClick={handleLogout} className="pointer">
            <li className="dropdown-item">
              <i className="fa-solid fa-door-open ps-2 "></i> خروج
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
