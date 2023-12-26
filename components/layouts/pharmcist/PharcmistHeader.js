import Link from "next/link";
import React from "react";
import AccountDropdown from "../dashboard/AccountDropdown";

const PharmcistHeader = () => {
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
          <div className="nav-control"></div>
          <div className="header-right">
            <AccountDropdown link="settings-pharmcy" />
          </div>
        </header>
      </div>
      {/* <!-- End section header --> */}
    </>
  );
};

export default PharmcistHeader;
