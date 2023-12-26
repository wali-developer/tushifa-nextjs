"use client";

import ButtonLoader from "@/components/common/ButtonLoader";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfileSettingForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    userId: "",
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setPayload({
      userId: user?._id,
      name: user?.name,
      email: user?.email,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  }, [user]);

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  // update pharmacy handler
  const updateHanlder = async (e) => {
    e.preventDefault();
    const header = getHeader();

    try {
      setLoading(true);
      const { data } = await API.put(`/admin/account-settings`, payload, header);
      if (data?.success == true) {
        toast.success(data?.message);
      } else if (data?.success == false) {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={updateHanlder}>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group row">
            <label className="col-lg-4 col-form-label">Name</label>
            <div className="col-lg-6">
              <TextInput
                name="name"
                placeholder="Name"
                value={payload.name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group row">
            <label className="col-lg-4 col-form-label">Email</label>
            <div className="col-lg-6">
              <TextInput
                type="email"
                name="email"
                placeholder="Email"
                value={payload.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group row">
            <label className="col-lg-4 col-form-label">Current password</label>
            <div className="col-lg-6">
              <TextInput
                type="password"
                name="currentPassword"
                placeholder="Current password"
                value={payload.currentPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group row">
            <label className="col-lg-4 col-form-label">New password</label>
            <div className="col-lg-6">
              <TextInput
                type="password"
                name="newPassword"
                placeholder="New password"
                value={payload.newPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group row">
            <label className="col-lg-4 col-form-label">Confirm password</label>
            <div className="col-lg-6">
              <TextInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={payload.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-11">
          <div className="form-group" style={{ textAlign: "right" }}>
            <button type="submit" className="btn btn-primary float-end" disabled={loading}>
              {loading ? <ButtonLoader /> : "Save"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileSettingForm;
