import React from "react";

const ViewPatientModal = ({ modalId, data }) => {
  return (
    <div
      className="modal fade"
      id={modalId}
      tabindex="-1"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="myModalLabel">
              <img
                className="rounded-circle"
                width="35"
                src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                alt=""
              />
              {data?.name}
            </h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="insertHere">
              <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                <div className="col-8">Name</div>
                <div className="col-4">{data?.name}</div>
              </div>
              <div className="row py-3">
                <div className="col-8">Age</div>
                <div className="col-4">{data?.age}</div>
              </div>
              <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                <div className="col-8">Gender</div>
                <div className="col-4">{data?.gender}</div>
              </div>
              <div className="row py-3">
                <div className="col-8">Contact</div>
                <div className="col-4">{data?.contact}</div>
              </div>
              <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                <div className="col-8">Address</div>
                <div className="col-4">{data?.address}</div>
              </div>
              <div className="row py-3">
                <div className="col-8">CNIC</div>
                <div className="col-4">{data?.cnic?.cnic_number}</div>
              </div>
              <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                <div className="col-8">Attending Physician name</div>
                <div className="col-4">{data?.attending_physician_name}</div>
              </div>
              <div className="row py-3">
                <div className="col-8">Attendent Name</div>
                <div className="col-4">{data?.attendant_details?.name}</div>
              </div>
              <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                <div className="col-8">Attendent contact</div>
                <div className="col-4">{data?.attendant_details?.contact}</div>
              </div>
              <div className="row py-3">
                <div className="col-8">Attendent relation to patient</div>
                <div className="col-4">{data?.attendant_details?.relation_to_patient}</div>
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
  );
};

export default ViewPatientModal;
