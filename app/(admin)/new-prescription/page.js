import React from "react";

const NewPrescription = () => {
  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="new_prescription main_container">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="text-primary">New Prescription</h4>
                <p className="mb-0">Add New Prescription</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow mb-4 pb-4">
                <div className="card-header">
                  <h4 className="card-title">Patient informations</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <select className="form-control form-select">
                        <option>Select Patient...</option>
                        <option>Full Name</option>
                        <option>Full Name</option>
                        <option>Full Name</option>
                        <option>Full Name</option>
                        <option>Full Name</option>
                        <option>Full Name</option>
                        <option>Full Name</option>
                      </select>
                    </div>
                    <div className="mt-5">
                      <h5>Attachments / Documents photocopies</h5>
                    </div>
                    <div className="row mt-4 form-group widget-3">
                      <div className="col-lg-3">
                        <h6>Upload CNIC</h6>
                        <div className="form-input position-relative">
                          <label className="labeltest" for="file-ip-1">
                            <span
                              style={{
                                position: "absolute",
                                top: 50,
                                right: 100,
                                color: "rgb(86, 86, 255)",
                                textDecoration: "underline",
                                fontSize: 17,
                              }}
                            >
                              Browse
                            </span>
                          </label>
                          <input
                            type="file"
                            id="file-ip-1"
                            accept="image/*"
                            onchange="showPreview(event);"
                          />
                          {/* <!-- <div className="preview">
                              <img id="file-ip-1-preview" src="#" alt="img" />
                            </div> --> */}
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <h6>Upload prescription photocopy</h6>
                        <div className="form-input position-relative">
                          <label className="labeltest" for="file-ip-1">
                            <span
                              style={{
                                position: "absolute",
                                top: 50,
                                right: 100,
                                color: "rgb(86, 86, 255)",
                                textDecoration: "underline",
                                fontsize: 17,
                              }}
                            >
                              Browse
                            </span>
                          </label>
                          <input
                            type="file"
                            id="file-ip-1"
                            accept="image/*"
                            onchange="showPreview(event);"
                          />
                          {/* <!-- <div className="preview">
                              <img id="file-ip-1-preview" src="#" alt="img" />
                            </div> --> */}
                        </div>
                      </div>
                    </div>
                    <div className="form-group text-center d-none">
                      <img
                        src="assets/images/patient-icon.png"
                        className="img-profile rounded-circle img-fluid"
                        alt="img"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card shadow mb-4">
                <div className="card-header">
                  <h4 className="card-title">Drugs list</h4>
                </div>
                <div className="card-body">
                  <div className="drugslist"></div>
                  <div className="form-group" style={{ textAlign: "right" }}>
                    <button type="button" className="btn btn-primary float-end" id="butonAddDrug">
                      Add Drug
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card shadow mb-4">
                <div className="card-header">
                  <h4 className="card-title">Tests list</h4>
                </div>
                <div className="card-body">
                  <div className="addTest"></div>
                  <div className="form-group" style={{ textAlign: "right" }}>
                    <button type="submit" className="btn btn-primary float-end" id="butonAddTest">
                      Add Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="form-group" style={{ textAlign: "right" }}>
                    <button type="submit" className="btn btn-primary float-end">
                      Create Prescription
                    </button>
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

export default NewPrescription;
