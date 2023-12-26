"use client";

import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState(null);
  const menu = [
    { label: "Dashboard", path: "/dashboard", icon: "fas fa-th-large" },
    {
      label: "Pharmacies",
      path: "#",
      icon: "fas fa-users",
      hasSubmenu: true,
      subMenu: [
        { label: "New pharmacy", path: "/new-pharmacy" },
        { label: "All pharmacy", path: "/all-pharmacies" },
      ],
    },
    {
      label: "Patients",
      path: "#",
      icon: "fas fa-users",
      hasSubmenu: true,
      subMenu: [
        { label: "New Patient", path: "/new-patient" },
        { label: "All Patients", path: "/all-patients" },
      ],
    },
    {
      label: "Prescriptions",
      path: "#",
      icon: "fas fa-book-medical",
      hasSubmenu: true,
      subMenu: [
        { label: "New Prescription", path: "/new-prescription" },
        { label: "All Prescriptions", path: "/all-prescription" },
      ],
    },
    { label: "Settings", path: "settings", icon: "fas fa-th-large" },
  ];
  return (
    <aside className="left-panel nicescroll-box">
      <nav className="navigation">
        <ul className="list-unstyled main-menu">
          {menu.map((item, index) => {
            const active = selected?.label == item?.label;
            return !item?.hasSubmenu ? (
              <li className="has-submenu" key={index}>
                <Link href={item?.path} className={`itemWrapper ${active ? "active" : ""}`}>
                  <i className={item?.icon}></i>
                  <span className="nav-label">{item?.label}</span>
                </Link>
              </li>
            ) : (
              <li className="has-submenu" key={index}>
                <div
                  className={`itemWrapper has-arrow mm-collapsed ${active ? "active" : ""}`}
                  onClick={() => {
                    selected ? setSelected(null) : setSelected(item);
                  }}
                >
                  <i className={item?.icon}></i>
                  <span className="nav-label">{item?.label}</span>
                </div>
                <ul
                  className="list-unstyled subMenu"
                  style={{
                    height: active ? item?.subMenu?.length * 58 : 0,
                    visibility: active ? "visible" : "hidden",
                    opacity: active ? 1 : 0,
                  }}
                >
                  {item?.subMenu?.map((sub, i) => (
                    <li style={{ paddingLeft: 40 }} key={i}>
                      <Link href={sub?.path} className="itemWrapper">
                        <span>{sub?.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="sidebar-widgets">
        <div className="top-sidebar box-shadow mx-25 m-b-30 p-b-20 text-center">
          <img src="/assets/images/appointement.svg" className="side-img" alt="img" />
        </div>
        <div className="copyright text-center">
          <p className="mb-0">Tushifa © 2023</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
