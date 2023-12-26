import ButtonLoader from "@/components/common/ButtonLoader";
import FileInput from "@/components/common/FileInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const EditPrescriptionModal = ({ modalId, data, callback }) => {
  const header = getHeader();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState({
    photocopy: "",
    patient: "",
  });

  // Load patients dropdown
  useEffect(() => {
    const loadPatientsDropdown = async () => {
      try {
        const resposne = await API.get("/patients/dropdown", header);
        if (Array.isArray(resposne?.data)) {
          setPatients(resposne?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    loadPatientsDropdown();
  }, []);

  useEffect(() => {
    setImage(data?.photocopy);
    setPayload((prev) => {
      return {
        ...prev,
        patient: patients?.find((p) => p?.value == data?.patient?._id)?.value,
      };
    });
  }, [data]);

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  // create prescription handler
  const updatePrescription = async (e) => {
    e.preventDefault();
    const header = getHeader();

    const formData = new FormData();
    formData.append("photocopy", payload.photocopy);
    formData.append("patient", payload.patient);

    try {
      setLoading(true);
      const resposne = await API.put(`/prescriptions/${data?._id}`, formData, header);
      if (resposne?.data?.success == true) {
        toast.success(resposne?.data?.message);
        callback();

        // Close the Bootstrap modal
        const modalElement = document.getElementById(modalId);
        const bootstrapModal = new bootstrap.Modal(modalElement);
        bootstrapModal.hide();
      } else if (resposne?.data?.success == false) {
        toast.error("Failed to create prescription, please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`modal fade`}
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
                <form
                  onSubmit={updatePrescription}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-group row widget-3">
                        <div
                          className="col-lg-12"
                          style={{ width: 200, height: 300, overflow: "hidden" }}
                        >
                          <FileInput
                            required
                            label="Prescription photocopy"
                            file={image}
                            onChange={(file) => {
                              setPayload((prev) => {
                                return {
                                  ...prev,
                                  photocopy: file,
                                };
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12  pt-5">
                      <div className="form-group">
                        <select
                          className="form-control form-select"
                          placeholder="Gender"
                          name="patient"
                          value={payload.patient}
                          onChange={handleChange}
                        >
                          <option defaultChecked>Select patient</option>
                          {patients.map((patient, index) => (
                            <option value={patient?.value} key={index}>
                              {patient?.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4"></div>
                    <div className="form-group text-right mt-5 col-4">
                      <button
                        type="submit"
                        className="btn btn-primary float-end"
                        disabled={loading}
                      >
                        {loading ? <ButtonLoader /> : "Update"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPrescriptionModal;
