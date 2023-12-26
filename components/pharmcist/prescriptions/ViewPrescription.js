import ButtonLoader from "@/components/common/ButtonLoader";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ViewPrescriptionsModal = ({ modalId, data, callback, action = true }) => {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const user = session?.data?.user;

  const handleUpdate = async () => {
    const header = getHeader();

    try {
      setLoading(true);
      const response = await API.put(
        `/prescriptions/${data?._id}/approve`,
        { pharmacyId: user?.id },
        header
      );
      if (response?.data?.success == true) {
        toast.success(response?.data?.message);
        callback();
      } else if (response?.data?.success == false) {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
              {`${data?.patient?.name} patient`}
            </h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="insertHere">
              <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                <div className="col-8">Patient Name</div>
                <div className="col-4">{data?.patient?.name}</div>
              </div>
              <div className="row py-3">
                <div className="col-8">Attending Physician name</div>
                <div className="col-4">{data?.patient?.attending_physician_name}</div>
              </div>
              <div className="py-3">
                <div style={{ color: "black", textAlign: "center" }}>Prescriptions photocopy</div>
                <div className="mt-3">
                  <Image
                    src={data?.photocopy}
                    alt="Prescription"
                    width={500}
                    height={350}
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {action ? (
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                {loading ? <ButtonLoader /> : "Approve"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ViewPrescriptionsModal;
