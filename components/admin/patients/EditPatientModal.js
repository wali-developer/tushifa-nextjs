import React from "react";
import EditPatientForm from "./EditPatientForm";

const EditPatientModal = ({ modalId, data, callback }) => {
  return (
    <div
      className="modal fade"
      id={modalId}
      tabindex="-1"
      aria-labelledby="modal-title-edit-row"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal-title-edit-row">
              {data?.name}
            </h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="basic-form">
                  <EditPatientForm data={data} callback={callback} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPatientModal;
