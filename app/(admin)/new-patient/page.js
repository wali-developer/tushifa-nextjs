import React from "react";

const NewPatient = () => {
  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="new-patients main_container">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="text-primary">New Patient</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Personal Information</h4>
                </div>
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
                                  onchange="showPreview(event);"
                                />
                                <div className="preview">
                                  <img
                                    id="file-ip-1-preview"
                                    src="assets/images/avatar-download.png"
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
                              placeholder="Patient Name"
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mobile No."
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="CNIC number"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Prescription details"
                            />
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group">
                            <div className="form-group">
                              <input
                                type="number"
                                min="1"
                                className="form-control"
                                placeholder="Age"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <select className="form-control form-select">
                              <option>Marital status</option>
                              <option>Married</option>
                              <option>Unmarried</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <select className="form-control form-select">
                              <option>Gender</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <select className="form-control form-select">
                              <option>Blood Group</option>
                              <option>A+</option>
                              <option>A-</option>
                              <option>B+</option>
                              <option>B-</option>
                              <option>O+</option>
                              <option>O-</option>
                              <option>AB+</option>
                              <option>AB-</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4"></div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Attending physician name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Attendant name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4"></div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Attendant relation to patient "
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="number"
                                min="1"
                                className="form-control"
                                placeholder="Attendant phone number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4"></div>
                        <div className="col-xl-8">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Address"
                              rows="4"
                            ></textarea>
                          </div>
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
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Medical Information</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <form>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label className="form-label">known diseases</label>
                            <select className="form-control form-select">
                              <option>Type 1 Diabetes</option>
                              <option>Multiple Sclerosis</option>
                              <option>Rheumatoid Arthritis</option>
                              <option>Allergies & Asthma</option>
                            </select>
                            <div className="col-lg-12"></div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label className="form-label">Period</label>
                            <input className="form-control" type="text" placeholder="Period" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label className="form-label"> Family History </label>
                            <select className="form-control form-select">
                              <option>Mother</option>
                              <option>Father</option>
                              <option>Brother</option>
                              <option>Sister</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label className="form-label">Diseases</label>
                            <select className="form-control form-select">
                              <option>Type 1 Diabetes</option>
                              <option>Multiple Sclerosis</option>
                              <option>Rheumatoid Arthritis</option>
                              <option>Allergies & Asthma</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary float-end">
                          Save
                        </button>
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
  );
};

export default NewPatient;
