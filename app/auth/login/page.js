"use client";

import InputField from "@/components/form/InputField";
import PasswordField from "@/components/form/PasswordField";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ButtonLoader from "@/components/common/ButtonLoader";
import API from "@/utils/api";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    setRedirecting(false);
    e.preventDefault();
    const { email, password } = userInfo;

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLoading(false);

      if (res?.error) return toast.error(res?.error);
      setUserInfo({
        email: "",
        password: "",
      });
      setRedirecting(true);

      const { data } = await API.get("/auth/session");
      console.log("Sessions", data?.user);

      if (data.user) {
        if (data?.user?.role == "admin") {
          router.replace("/dashboard");
        } else {
          router.replace("/dashboard-pharmacy");
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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
              <form className="theme-form" onSubmit={handleSubmit}>
                <h4>Sign in to account</h4>
                <p>Enter your email & password to login</p>
                <InputField
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                />
                <PasswordField
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleChange}
                />

                <div className="form-group mb-0">
                  <div className="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                  </div>
                  <Link className="link text-primary" href="#">
                    Forgot password?
                  </Link>
                  <div className="mt-3">
                    <button
                      className="btn btn-primary w-100"
                      type="submit"
                      accordion
                      disabled={loading}
                      style={{
                        opacity: loading ? 0.5 : 1,
                      }}
                    >
                      {loading ? <ButtonLoader /> : redirecting ? "Redirecting..." : "Sign in"}
                    </button>
                  </div>
                </div>
                {/* <p className="mt-4 mb-0">
                  {"Don't"} have account?{" "}
                  <Link className="ms-2 text-primary text-center" href="/auth/register">
                    Create Account
                  </Link>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
