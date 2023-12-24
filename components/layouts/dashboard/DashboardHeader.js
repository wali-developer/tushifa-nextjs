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
            <div className="fullscreen notification_dropdown widget-5">
              <div className="full">
                <Link className="text-dark" href="#" onclick="javascript:toggleFullScreen()">
                  <i className="fas fa-expand"></i>
                </Link>
              </div>
            </div>
            <div className="widget-6">
              <div className="cart-wrapper">
                <div className="cart-icon">
                  <Link className="cart-control" href="#">
                    <i className="fas fa-bell"></i>
                    <div className="pulse-css"></div>
                  </Link>
                </div>
                <div className="cart-dropdown-form dropdown-container">
                  <div className="form-content">
                    <div className="widget-media main-scroll nicescroll-box">
                      <ul className="timeline">
                        <li>
                          <h6 className="mb-0">Notitications</h6>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2">
                              <img
                                alt="image"
                                src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Incoming Message</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-info">
                              <img
                                alt="image"
                                src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">You got a new email</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-success">
                              <img
                                alt="image"
                                src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Hello world!</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2">
                              <img
                                alt="image"
                                src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Beep Boop. Beee...</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-danger">
                              <img
                                alt="image"
                                src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Hello world!</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-primary">
                              <img
                                alt="image"
                                src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Incoming Message</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <a className="all-notification btn btn-primary" href="#">
                      See all notifications
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <AccountDropdown />
          </div>
        </header>
      </div>
      {/* <!-- End section header --> */}
    </>
  );
};

export default DashboardHeader;
