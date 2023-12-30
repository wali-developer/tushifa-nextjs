import Loader from "@/components/common/Loader";
import API from "@/utils/api";
import React, { useEffect, useState } from "react";

const ViewPharmacyModal = ({ modalId, pharmacyId }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPharmacyDetails = async () => {
      try {
        setLoading(true);
        const { data } = await API.get(`/pharmacies/${pharmacyId}`);
        if (data?.pharmacy) {
          setData(data?.pharmacy);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (pharmacyId) {
      getPharmacyDetails();
    }
    return () => {
      setData({});
    };
  }, [pharmacyId]);

  return (
    <>
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
                  <div className="col-8">Contact</div>
                  <div className="col-4">{data?.contact}</div>
                </div>
                <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                  <div className="col-8">Address</div>
                  <div className="col-4">{data?.address}</div>
                </div>
                <div className="row py-3">
                  <div className="col-8">Point person</div>
                  <div className="col-4">{data?.point_person}</div>
                </div>
                {data?.approvedPrescriptions?.length ? (
                  <div className="row py-3">
                    <div className="col-8">Approved prescriptions</div>
                    <div className="col-4">{data?.approvedPrescriptions?.length}</div>
                  </div>
                ) : null}
                {data?.pharmacyFulfilments ? (
                  <div className="row py-3">
                    <div className="col-8">Total Fulfilments by this pharmacy</div>
                    <div className="col-4">{data?.pharmacyFulfilments}</div>
                  </div>
                ) : null}
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
      {loading && <Loader />}
    </>
  );
};

export default ViewPharmacyModal;
