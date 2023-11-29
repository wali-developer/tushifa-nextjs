import React from "react";

const PatientsList = () => {
  return (
    <div className="all-patients main_container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header fix-card">
              <div className="row">
                <div className="col-8">
                  <h4 className="card-title">New Patients</h4>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table id="example2" className="display nowrap">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Patient Name</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Mobile No.</th>
                      <th>Birthday</th>
                      <th>Gender</th>
                      <th>Sex</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          className="rounded-circle"
                          width="35"
                          src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                          alt=""
                        />
                      </td>
                      <td>Airi</td>
                      <td>20</td>
                      <td>test@gmail.com</td>
                      <td>658543469</td>
                      <td>2011/04/25</td>
                      <td>Married</td>
                      <td>Male</td>
                      <td>
                        <a className="mr-4 vue">
                          <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                        </a>
                        <a data-bs-toggle="modal" data-bs-target="#modal-edit" className="mr-4">
                          <span className="fas fa-pencil-alt tbl-edit"></span>
                        </a>
                        <a className="mr-4 delet">
                          <span className="fas fa-trash-alt tbl-delet"></span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="rounded-circle"
                          width="35"
                          src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                          alt=""
                        />
                      </td>
                      <td>Angelica</td>
                      <td>33</td>
                      <td>test@gmail.com</td>
                      <td>658543469</td>
                      <td>2011/04/25</td>
                      <td>Married</td>
                      <td>Male</td>
                      <td>
                        <a className="mr-4 vue">
                          <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                        </a>
                        <a data-bs-toggle="modal" data-bs-target="#modal-edit" className="mr-4">
                          <span className="fas fa-pencil-alt tbl-edit"></span>
                        </a>
                        <a className="mr-4 delet">
                          <span className="fas fa-trash-alt tbl-delet"></span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="rounded-circle"
                          width="35"
                          src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                          alt=""
                        />
                      </td>
                      <td>Ashton</td>
                      <td>44</td>
                      <td>test@gmail.com</td>
                      <td>658543469</td>
                      <td>2011/04/25</td>
                      <td>Married</td>
                      <td>Male</td>
                      <td>
                        <a className="mr-4 vue">
                          <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                        </a>
                        <a data-bs-toggle="modal" data-bs-target="#modal-edit" className="mr-4">
                          <span className="fas fa-pencil-alt tbl-edit"></span>
                        </a>
                        <a className="mr-4 delet">
                          <span className="fas fa-trash-alt tbl-delet"></span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="rounded-circle"
                          width="35"
                          src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                          alt=""
                        />
                      </td>
                      <td>Bradley</td>
                      <td>55</td>
                      <td>test@gmail.com</td>
                      <td>658543469</td>
                      <td>2011/04/25</td>
                      <td>Married</td>
                      <td>Male</td>
                      <td>
                        <a className="mr-4 vue">
                          <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                        </a>
                        <a data-bs-toggle="modal" data-bs-target="#modal-edit" className="mr-4">
                          <span className="fas fa-pencil-alt tbl-edit"></span>
                        </a>
                        <a className="mr-4 delet">
                          <span className="fas fa-trash-alt tbl-delet"></span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="rounded-circle"
                          width="35"
                          src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                          alt=""
                        />
                      </td>
                      <td>Brenden</td>
                      <td>43</td>
                      <td>test@gmail.com</td>
                      <td>658543469</td>
                      <td>2011/04/25</td>
                      <td>Married</td>
                      <td>Male</td>
                      <td>
                        <a className="mr-4 vue">
                          <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                        </a>
                        <a data-bs-toggle="modal" data-bs-target="#modal-edit" className="mr-4">
                          <span className="fas fa-pencil-alt tbl-edit"></span>
                        </a>
                        <a className="mr-4 delet">
                          <span className="fas fa-trash-alt tbl-delet"></span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="rounded-circle"
                          width="35"
                          src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                          alt=""
                        />
                      </td>
                      <td>Brielle</td>
                      <td>25</td>
                      <td>test@gmail.com</td>
                      <td>658543469</td>
                      <td>2011/04/25</td>
                      <td>Married</td>
                      <td>Male</td>
                      <td>
                        <a className="mr-4 vue">
                          <span className="fa fa-eye tbl-eye" aria-hidden="true"></span>
                        </a>
                        <a data-bs-toggle="modal" data-bs-target="#modal-edit" className="mr-4">
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
  );
};

export default PatientsList;
