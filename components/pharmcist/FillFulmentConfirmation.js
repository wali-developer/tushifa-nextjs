"use client";

import React, { useState } from "react";
import ButtonLoader from "../common/ButtonLoader";
import FileInput from "../common/FileInput";
import TextInput from "../common/TextInput";
import FileInputField from "../common/FileInputField";
import getHeader from "@/utils/getHeader";
import API from "@/utils/api";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const FullFilmentConfirmation = ({ modalId, patientId }) => {
  const session = useSession();
  const user = session?.data?.user;
  const [loading, setLoading] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);
  const [payload, setPayload] = useState({
    patientId: "",
    totalAmount: "",
    receiptPicture: "",
  });

  // Perform Fulfillment by pharmacy
  const createFulfillment = async (e) => {
    e.preventDefault();
    const header = getHeader();

    const updatedPrescriptions = prescriptions.map((item) => {
      return {
        drug_name: item.drug_name,
        drug_quantity: item.drug_quantity,
        price: item.price,
      };
    });

    const formData = new FormData();
    formData.append("patientId", patientId);
    formData.append("totalAmount", payload.totalAmount);
    formData.append("receiptPicture", payload.receiptPicture);
    // formData.append("prescriptions[]", updatedPrescriptions);
    formData.append("prescriptions[]", JSON.stringify(updatedPrescriptions));

    try {
      setLoading(true);
      const { data } = await API.post(
        `/pharmacies/${user?.pharmacyId}/fulfillments`,
        formData,
        header
      );
      console.log(data);
      if (data?.success == true) {
        toast.success(data?.message);
        setPayload({
          totalAmount: "",
          receiptPicture: "",
        });
        setPrescriptions([]);
      } else if (data?.success == false) {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const addPrescription = () => {
    setPrescriptions((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 2000),
        drug_name: "",
        drug_quantity: "",
        price: "",
      },
    ]);
  };

  const handleChange = (e, item) => {
    const name = e.target.name;
    const value = e.target.value;
    setPrescriptions((prev) => {
      return prev.map((p) => {
        if (p?.id == item?.id) {
          return {
            ...p,
            [name]: value,
          };
        }
      });
    });
  };

  const handleDelete = (item) => {
    setPrescriptions((prev) => {
      return prev.filter((p) => {
        return p?.id != item?.id;
      });
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id={modalId}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Filfillment Confirmation
              </h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <form onSubmit={createFulfillment}>
                <div className="row">
                  <div className="col-xl-6">
                    <FileInputField
                      required
                      label="Receipt picture"
                      file={payload.receiptPicture}
                      onChange={(file) => {
                        setPayload((prev) => {
                          return {
                            ...prev,
                            receiptPicture: file,
                          };
                        });
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="form-group">
                      <div className="">
                        <label style={{ color: "black" }}>Total amount</label>
                        <TextInput
                          required
                          min={1}
                          name="totalAmount"
                          placeholder="Total amount"
                          value={payload.totalAmount}
                          onChange={(e) => {
                            setPayload((prev) => {
                              return {
                                ...prev,
                                totalAmount: e.target.value,
                              };
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {prescriptions?.length > 0 &&
                  prescriptions.map((pres, index) => (
                    <div className="row" key={index}>
                      <div className="col-xl-5">
                        <TextInput
                          required
                          placeholder="Drug name"
                          name="drug_name"
                          value={pres?.drug_name}
                          onChange={(e) => handleChange(e, pres)}
                        />
                      </div>
                      <div className="col-xl-3">
                        <div className="form-group">
                          <div className="">
                            <TextInput
                              required
                              type="number"
                              min={1}
                              placeholder="Price"
                              name="price"
                              value={pres?.price}
                              onChange={(e) => handleChange(e, pres)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="form-group">
                          <div className="">
                            <TextInput
                              required
                              type="number"
                              min={1}
                              placeholder="Quantity"
                              name="drug_quantity"
                              value={pres?.drug_quantity}
                              onChange={(e) => handleChange(e, pres)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-1">
                        <div
                          className="mt-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDelete(pres)}
                        >
                          <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="d-flex justify-content-end">
                  <p
                    type="button"
                    className="border-0 bg-transparent"
                    style={{ color: "blue", textDecoration: "underline", fontSize: 15 }}
                    onClick={addPrescription}
                  >
                    Add Prescription
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {loading ? <ButtonLoader /> : "Fulfill"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullFilmentConfirmation;
