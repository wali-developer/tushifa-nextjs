import React from "react";

const AllPatients = () => {
  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="all-patients main_container">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="text-primary">All Patient</h4>
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
                    <div className="col-4 " style={{ textAlign: "right" }}>
                      <a href="/new-patient.html" className="btn btn-primary float-end">
                        New Patient
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table id="example2" className="display nowrap">
                      <thead>
                        <tr>
                          {/* <!-- <th></th> --> */}
                          <th>SN</th>
                          <th>Patient Name</th>
                          <th>Age</th>
                          <th>Email</th>
                          <th>Mobile No.</th>
                          <th>Gender</th>
                          <th>Sex</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>TU-0001</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0002</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0003</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0004</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0005</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0006</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0007</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0008</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0009</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0010</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0011</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0012</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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
                          <td>TU-0013</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                              alt=""
                            />{" "}
                            <span className="text-black ms-2">Airi Satou</span>
                          </td>

                          <td>20</td>
                          <td>test@gmail.com</td>
                          <td>658543469</td>
                          <td>Male</td>
                          <td>Maried</td>

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

export default AllPatients;
