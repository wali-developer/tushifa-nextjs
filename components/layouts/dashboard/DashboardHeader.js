import Link from "next/link";
import React from "react";
import AccountDropdown from "./AccountDropdown";

const DashboardHeader = () => {
  return (
    <>
      {/* <!-- start logo components --> */}
      <div className="nav-header">
        <div className="brand-logo">
          <Link href="/dashboard">
            <img className="brand-title" src="/assets/images/logo-tagline.png" alt="" />
          </Link>
        </div>
      </div>
      {/* <!-- End logo components --> */}

      {/* <!-- start section header --> */}
      <div className="header">
        <header className="top-head container-fluid">
          <div className="nav-control">
            {/* <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div> */}
            <div className="left-header content-header__menu">
              <ul className="list-unstyled">
                <li className="nav-link btn">
                  <Link href="/new-prescription">
                    <i className="far fa-file-alt"></i> <span> Write a prescription</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-right">
            <AccountDropdown />
          </div>
        </header>
      </div>
      {/* <!-- End section header --> */}
    </>
  );
};

export default DashboardHeader;
