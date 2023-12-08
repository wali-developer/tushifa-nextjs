import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="auth">
      <div id="main-wrapper" className="show">
        <div className="login-tabib">
          <div>
            <div className="text-center">
              <Link className="logo" href="/">
                <img className="img-fluid" src="/assets/images/logo.png" alt="login page" />
              </Link>
            </div>
            <div className="login-main">
              <form className="theme-form">
                <h4>Sign in to account</h4>
                <p>Enter your email & password to login</p>
                <div className="form-group m-b-10">
                  <label className="col-form-label">Email Address</label>
                  <input className="form-control" type="email" placeholder="Tabib@gmail.com" />
                </div>
                <div className="form-group m-b-10">
                  <label className="col-form-label">Password</label>
                  <div className="form-input position-relative">
                    <input className="form-control" type="password" placeholder="*********" />
                    <div className="show-hide">
                      <span className="show"></span>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <div className="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label className="text-muted" for="checkbox1">
                      Remember password
                    </label>
                  </div>
                  <Link className="link text-primary" href="/auth/forgot-password">
                    Forgot password?
                  </Link>
                  <div className="mt-3">
                    <Link href="/dashboard" className="btn btn-primary w-100">
                      Sign in
                    </Link>
                  </div>
                </div>
                <p className="mt-4 mb-0">
                  {"Don't"} have account?{" "}
                  <Link className="ms-2 text-primary text-center" href="/auth/register">
                    Create Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
