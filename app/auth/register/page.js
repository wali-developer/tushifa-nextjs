import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <main className="auth">
      <div id="main-wrapper" className="show">
        <div className="login-tabib">
          <div>
            <div className="text-center">
              <Link className="logo" href="/">
                <img className="img-fluid" src="/assets/images/logo.png" alt="loogin page" />
              </Link>
            </div>
            <div className="login-main">
              <form className="theme-form">
                <h4>Create your account</h4>
                <p>Enter your personal details to create account</p>
                <div className="form-group m-b-10">
                  <label className="col-form-label pt-0">Your Name</label>
                  <div className="row g-2">
                    <div className="col-md-12 col-lg-6">
                      <div className="form-group mb-0">
                        <input className="form-control" type="text" placeholder="First name" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <div className="form-group mb-0">
                        <input className="form-control" type="text" placeholder="Last name" />
                      </div>
                    </div>
                  </div>
                </div>
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
                      Agree with{" "}
                      <a className="ms-2 text-primary" href="#">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  <Link href="/dashboard" className="btn btn-primary w-100">
                    Create Account
                  </Link>
                </div>
                <p className="mt-4 mb-0">
                  Already have an account?
                  <Link className="ms-2 text-primary" href="/auth/login">
                    Sign in
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

export default Register;
