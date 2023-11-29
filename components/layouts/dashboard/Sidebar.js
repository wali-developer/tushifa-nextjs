import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="left-panel nicescroll-box">
      <nav className="navigation">
        <ul className="list-unstyled main-menu">
          <li className="has-submenu active">
            <Link href="/dashboard">
              <i className="fas fa-th-large"></i>
              <span className="nav-label">Dashboard</span>
            </Link>
          </li>
          <li className="has-submenu">
            <Link href="javascript:void()" className="has-arrow mm-collapsed">
              <i className="fas fa-users"></i>
              <span className="nav-label">Pharmacies</span>
            </Link>
            <ul className="list-unstyled mm-collapse">
              <li>
                <Link href="/new-pharmacy">New pharmacy</Link>
              </li>
              <li>
                <Link href="/all-pharmacies">All pharmacy</Link>
              </li>
            </ul>
          </li>
          <li className="has-submenu">
            <Link href="javascript:void()" className="has-arrow mm-collapsed">
              <i className="fas fa-users"></i>
              <span className="nav-label">Patients</span>
            </Link>
            <ul className="list-unstyled mm-collapse">
              <li>
                <Link href="/new-patient">New Patient</Link>
              </li>
              <li>
                <Link href="/all-patients">All Patients</Link>
              </li>
            </ul>
          </li>

          <li className="has-submenu">
            <Link href="javascript:void()" className="has-arrow mm-collapsed">
              <i className="fas fa-book-medical"></i>
              <span className="nav-label">Prescriptions</span>
            </Link>
            <ul className="list-unstyled mm-collapse">
              <li>
                <Link href="/new-prescription">New Prescription</Link>
              </li>
              <li>
                <Link href="/all-prescription">All Prescriptions</Link>
              </li>
              <li>
                <Link href="/prescription-requests">Prescription requests</Link>
              </li>
            </ul>
          </li>
          <li className="has-submenu">
            <Link href="/settings">
              <i className="fas fa-th-large"></i>
              <span className="nav-label">Settings</span>
            </Link>
          </li>
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
