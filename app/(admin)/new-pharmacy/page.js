import DashboardLayout from "@/components/layouts/dashboard";
import Link from "next/link";
import React from "react";

const NewPharmacy = () => {
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
              <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link href="#">New Pharmacy</Link>
                  </li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="basic-form">
                      <form>
                        <div className="row">
                          <div className="col-xl-4">
                            <div className="form-group row widget-3">
                              <div className="col-lg-12">
                                <div className="form-input">
                                  <label className="labeltest" for="file-ip-1">
                                    <span> Click to upload. </span>
                                  </label>
                                  <input
                                    type="file"
                                    id="file-ip-1"
                                    accept="image/*"
                                    onChange="showPreview(event);"
                                  />
                                  <div className="preview">
                                    <img
                                      id="file-ip-1-preview"
                                      src="/assets/images/avatar-download.png"
                                      alt="img"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Pharmacy name"
                              />
                            </div>

                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile No."
                              />
                            </div>
                          </div>
                          <div className="col-xl-4">
                            <div className="form-group">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  placeholder="Address"
                                  rows="4"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-4"></div>
                          <div className="col-xl-8">
                            <div className="form-group text-right">
                              <button type="submit" className="btn btn-primary float-end">
                                Save
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
