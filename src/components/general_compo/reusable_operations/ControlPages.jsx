import React, { useEffect } from "react";
import { toggleSidebar } from "../../layouts/sidebar/toggleSidebar";
import { Header } from "../../layouts/header/Header";
import { Sidebar } from "../../layouts/sidebar/Sidebar";

export const ControlPages = ({ namePage }) => {
  useEffect(() => {
    toggleSidebar(); //بسط دهنده ی سایدبار
    // be joz in 👆 2 approach dg ham dare -j86
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main_page">{namePage}</div>
    </>
  );
};
