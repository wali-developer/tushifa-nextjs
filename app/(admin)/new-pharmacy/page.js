"use client";

import ButtonLoader from "@/components/common/ButtonLoader";
import FileInput from "@/components/common/FileInput";
import TextAreaInput from "@/components/common/TextAreaInput";
import TextInput from "@/components/common/TextInput";
import PasswordField from "@/components/form/PasswordField";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const NewPharmacy = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    point_person: "",
  });

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  // Add pharmacy handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const header = getHeader();

    try {
      setLoading(true);
      const { data } = await API.post("/pharmacies", payload, header);
      if (data?.success == true) {
        toast.success(data?.message);
        setPayload({
          name: "",
          email: "",
          password: "",
          contact: "",
          address: "",
          point_person: "",
        });
        router.push("/all-pharmacies");
      } else if (data?.success == false) {
        toast.error("Failed to add pharmacy, please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="new-patients main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">New Pharmacy</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="basic-form">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-xl-4">
                            <TextInput
                              required
                              name="name"
                              placeholder="Pharmacy name"
                              value={payload.name}
                              onChange={handleChange}
                            />
                            <TextInput
                              required
                              name="contact"
                              placeholder="Mobile No."
                              value={payload.contact}
                              onChange={handleChange}
                            />
                            <TextAreaInput
                              required
                              name="address"
                              placeholder="Address"
                              value={payload.address}
                              onChange={handleChange}
                              rows={4}
                            />
                          </div>
                          <div className="col-xl-4">
                            <div className="form-group">
                              <TextInput
                                required
                                name="email"
                                placeholder="Email"
                                value={payload.email}
                                onChange={handleChange}
                              />
                              <TextInput
                                type="password"
                                required
                                name="password"
                                placeholder="Password"
                                value={payload.password}
                                onChange={handleChange}
                              />
                              <TextInput
                                required
                                name="point_person"
                                placeholder="Point person"
                                value={payload.point_person}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-8">
                            <div className="form-group text-right">
                              <button type="submit" className="btn btn-primary float-end">
                                {loading ? <ButtonLoader /> : "Save"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPharmacy;
