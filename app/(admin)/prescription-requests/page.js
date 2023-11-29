import React from "react";

const PrescriptionRequests = () => {
  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="all_prescriptions main_container">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="text-primary">Prescriptions Requests</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header fix-card">
                  <div className="row">
                    <div className="col-8">
                      <h4 className="card-title">Prescriptions requests</h4>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                      <a href="/new-prescription" className="btn btn-primary">
                        New Prescription
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table id="example1" className="display nowrap">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Patient Name</th>
                          <th>Date</th>
                          <th>Content</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Pr-0001</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pr-0002</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pr-0003</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pr-0004</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pr-0005</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pr-0006</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pr-0007</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pr-0008</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pr-0009</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Pr-0010</td>
                          <td>Airi Satou</td>
                          <td>01 Apr 2022</td>
                          <td>3 Drugs | 1 Tests</td>
                          <td>
                            <a href="#" className="mr-4">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a className="mr-4">
                              <span className="fas fa-vote-yea"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default PrescriptionRequests;
