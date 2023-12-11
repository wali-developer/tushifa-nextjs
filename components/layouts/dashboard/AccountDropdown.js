"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AccountDropdown = () => {
  const { data, status } = useSession();
  const user = data?.user;
  return (
    <div className="my-account-wrapper widget-7">
      <div className="account-wrapper">
        <div className="account-control">
          <Link className="login header-profile" href="#" title="Sign in">
            <div className="header-info">
              <span>{user?.name}</span>
              <small>{user?.role} </small>
            </div>
            <img src="https://via.placeholder.com/150/f8f8f8/2b2b2b" alt="people" />
          </Link>
          <div className="account-dropdown-form dropdown-container">
            <div className="form-content">
              <Link href="doctor-settings.html">
                <i className="far fa-user"></i>
                <span className="ml-2">Profile</span>
              </Link>
              <button className="listitem" type="button" onClick={() => signOut()}>
                <i className="fas fa-sign-in-alt"></i>
                <span className="ml-2">Logout </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
