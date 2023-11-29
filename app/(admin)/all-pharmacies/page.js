import Link from "next/link";
import React from "react";

const AllPharmacies = () => {
  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="all-patients main_container">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="text-primary">All Pharmacy</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header fix-card">
                  <div className="row">
                    <div className="col-8 d-flex gap-2 align-items-center">
                      {/* <!-- <div className="exportBtn">
                      <span className="fas fa-cloud-upload-alt"></span>
                      <p>Import list</p>
                    </div> --> */}
                      <div className="exportBtn">
                        <span className="fas fa-cloud-download-alt"></span>
                        <p>Export list</p>
                      </div>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                      <a href="#" className="btn btn-primary float-end">
                        New Pharmacy
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table id="example2" className="display nowrap">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Pharmacy Name</th>
                          <th>Email</th>
                          <th>Mobile No.</th>
                          <th>Address</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>P-0001</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Peshawar, Pakistan</td>
                          <td>
                            <a className="mr-4 vue">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#modal-edit"
                              className="mr-4"
                            >
                              <span className="fas fa-pencil-alt tbl-edit"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>P-0002</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Peshawar, Pakistan</td>
                          <td>
                            <a className="mr-4 vue">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#modal-edit"
                              className="mr-4"
                            >
                              <span className="fas fa-pencil-alt tbl-edit"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>P-0003</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Peshawar, Pakistan</td>
                          <td>
                            <a className="mr-4 vue">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#modal-edit"
                              className="mr-4"
                            >
                              <span className="fas fa-pencil-alt tbl-edit"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>P-0004</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Peshawar, Pakistan</td>
                          <td>
                            <a className="mr-4 vue">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#modal-edit"
                              className="mr-4"
                            >
                              <span className="fas fa-pencil-alt tbl-edit"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>P-0005</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Peshawar, Pakistan</td>
                          <td>
                            <a className="mr-4 vue">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#modal-edit"
                              className="mr-4"
                            >
                              <span className="fas fa-pencil-alt tbl-edit"></span>
                            </a>
                            <a className="mr-4 delet">
                              <span className="fas fa-trash-alt tbl-delet"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>P-0006</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Peshawar, Pakistan</td>
                          <td>
                            <a className="mr-4 vue">
                              <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#modal-edit"
                              className="mr-4"
                            >
                              <span className="fas fa-pencil-alt tbl-edit"></span>
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
          <div className="row">
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
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

export default AllPharmacies;
