"use client";

import Link from "next/link";
import React, { useState } from "react";

const PharmcistSidebar = () => {
  const [selected, setSelected] = useState(null);
  const menu = [
    { label: "Dashboard", path: "/dashboard-pharmacy", icon: "fas fa-th-large" },
    { label: "Patients", path: "/patients-pharmacy", icon: "fas fa-users" },
    { label: "Prescriptions", path: "/prescriptions-pharmacy", icon: "fas fa-users" },
    { label: "Approved prescriptions", path: "/approved-prescriptions", icon: "fas fa-users" },

    // {
    //   label: "Patients",
    //   path: "/patients-pharcmist",
    //   icon: "fas fa-users",
    //   hasSubmenu: true,
    //   subMenu: [
    //     { label: "New Patient", path: "/new-patient" },
    //     { label: "All Patients", path: "/all-patients" },
    //   ],
    // },

    { label: "Settings", path: "/settings-pharmcy", icon: "fas fa-th-large" },
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

export default PharmcistSidebar;
