"use client";

import React from "react";
import FullFilmentConfirmation from "../FillFulmentConfirmation";

const PrescriptionFulfillment = ({ patientId }) => {
  return (
    <>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#confimation"
        >
          Fullfil prescriptions
        </button>
      </div>
      <FullFilmentConfirmation modalId={"confimation"} patientId={patientId} />
    </>
  );
};

export default PrescriptionFulfillment;
