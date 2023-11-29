import Link from "next/link";
import React from "react";

const Settings = () => {
  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="doctorino_settings main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">Settings</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card shadow mb-4">
                  <div className="card-header">
                    <h4 className="card-title">Profile Settings</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label">
                              Name
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mr. Pharmacist"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label">
                              Phone<span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="212658543469"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label">
                              Pharmacy Email<span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="tabibligne@gmail.com"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label">
                              Address <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <input type="text" className="form-control" placeholder="address" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-sm-11">
                          <div className="form-group" style={{ textAlign: "right" }}>
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

            {/* <!-- Password update form  --> */}
            <div className="row">
              <div className="col-md-12">
                <div className="card shadow mb-4">
                  <div className="card-header">
                    <h4 className="card-title">Password Settings</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label">
                              Current password
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <div className="form-input position-relative">
                                <input
                                  className="form-control"
                                  type="password"
                                  placeholder="*********"
                                />
                                <div className="show-hide">
                                  <span className="show"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label">
                              New password
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <div className="form-input position-relative">
                                <input
                                  className="form-control"
                                  type="password"
                                  placeholder="*********"
                                />
                                <div className="show-hide">
                                  <span className="show"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group row">
                            <label className="col-lg-4 col-form-label">
                              Confirm password
                              <span className="text-danger">*</span>
                            </label>
                            <div className="col-lg-6">
                              <div className="form-input position-relative">
                                <input
                                  className="form-control"
                                  type="password"
                                  placeholder="*********"
                                />
                                <div className="show-hide">
                                  <span className="show"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-sm-11">
                          <div className="form-group" style={{ textAlign: "right" }}>
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
    </>
  );
};

export default Settings;
