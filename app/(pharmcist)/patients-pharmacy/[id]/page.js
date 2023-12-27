import React from "react";

const PatientDetails = () => {
  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="all-patients main_container">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="text-primary">Patient Details</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card pt-4">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="myModalLabel">
                      {/* {data?.name} */}
                      Name
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="insertHere">
                      <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                        <div className="col-8">Name</div>
                        {/* <div className="col-4">{data?.name}</div> */}
                      </div>
                      <div className="row py-3">
                        <div className="col-8">Age</div>
                        {/* <div className="col-4">{data?.age}</div> */}
                      </div>
                      <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                        <div className="col-8">Gender</div>
                        {/* <div className="col-4">{data?.gender}</div> */}
                      </div>
                      <div className="row py-3">
                        <div className="col-8">Contact</div>
                        {/* <div className="col-4">{data?.contact}</div> */}
                      </div>
                      <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                        <div className="col-8">Address</div>
                        {/* <div className="col-4">{data?.address}</div> */}
                      </div>
                      <div className="row py-3">
                        <div className="col-8">CNIC</div>
                        {/* <div className="col-4">{data?.cnic?.cnic_number}</div> */}
                      </div>
                      <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                        <div className="col-8">Attending Physician name</div>
                        {/* <div className="col-4">{data?.attending_physician_name}</div> */}
                      </div>
                      <div className="row py-3">
                        <div className="col-8">Attendent Name</div>
                        {/* <div className="col-4">{data?.attendant_details?.name}</div> */}
                      </div>
                      <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                        <div className="col-8">Attendent contact</div>
                        {/* <div className="col-4">{data?.attendant_details?.contact}</div> */}
                      </div>
                      <div className="row py-3">
                        <div className="col-8">Attendent relation to patient</div>
                        {/* <div className="col-4">{data?.attendant_details?.relation_to_patient}</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                      Close
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

export default PatientDetails;
