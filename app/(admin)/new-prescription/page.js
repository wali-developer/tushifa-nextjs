"use client";

import ButtonLoader from "@/components/common/ButtonLoader";
import FileInput from "@/components/common/FileInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const NewPrescription = () => {
  const router = useRouter();
  const header = getHeader();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    photocopy: "",
    patient: "",
  });

  // Load patients dropdown
  useEffect(() => {
    const loadPatientsDropdown = async () => {
      try {
        const { data } = await API.get("/patients/dropdown", header);
        if (Array.isArray(data)) {
          setPatients(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    loadPatientsDropdown();
  }, []);

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  // create prescription handler
  const createPrescription = async (e) => {
    e.preventDefault();
    const header = getHeader();

    const formData = new FormData();
    formData.append("photocopy", payload.photocopy);
    formData.append("patient", payload.patient);

    try {
      setLoading(true);
      const { data } = await API.post("/prescriptions", formData, header);
      if (data?.success == true) {
        toast.success(data?.message);
        setPayload({
          photocopy: "",
          patient: "",
        });
        router.push("/all-prescription");
      } else if (data?.success == false) {
        toast.error("Failed to create prescription, please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="new_prescription main_container">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="text-primary">New Prescription</h4>
                <p className="mb-0">Add New Prescription</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow mb-4 pb-4">
                <div className="card-header">
                  <h4 className="card-title">Patient informations</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={createPrescription}>
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="form-group row widget-3">
                          <div className="col-lg-12">
                            <FileInput
                              required
                              label="Prescription photocopy"
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

                      <div className="col-xl-4">
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
                        <button type="submit" className="btn btn-primary float-end">
                          {loading ? <ButtonLoader /> : "Create"}
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
    </div>
  );
};

export default NewPrescription;
