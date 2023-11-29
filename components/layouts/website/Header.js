import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-bar-info list-inline-item pl-0 mb-0">
                <li className="list-inline-item">
                  <Link href="#">
                    <i className="icofont-support-faq mr-2"></i>support@domain.com
                  </Link>
                </li>
                <li className="list-inline-item">
                  <i className="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                <a href="#">
                  <span>Call Now : </span>
                  <span className="h4">823-4565-13456</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img
              src="assets/images/logo-tagline.png"
              alt=""
              className="img-fluid"
              style={{ width: 135 }}
            />
          </a>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icofont-navigation-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
              <li style={{ marginLeft: 30 }}>
                <Link href="/auth/login" className="btn btn-main-2 btn-round-full btn-icon">
                  Login<i className="icofont-simple-right ml-3"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
