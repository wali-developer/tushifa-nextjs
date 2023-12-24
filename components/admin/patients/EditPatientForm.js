"use client";

import ButtonLoader from "@/components/common/ButtonLoader";
import FileInput from "@/components/common/FileInput";
import Loader from "@/components/common/Loader";
import TextAreaInput from "@/components/common/TextAreaInput";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditPatientForm = ({ data, callback }) => {
  const router = useRouter();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    cnic_number: "",
    photocopy: "",
    attending_physician_name: "",
    attendantName: "",
    attendantContact: "",
    attendantRelation: "",
  });

  useEffect(() => {
    setImage(data?.cnic?.photocopy);
    setPayload({
      name: data?.name,
      age: data?.age,
      gender: data?.gender,
      contact: data?.contact,
      address: data?.address,
      cnic_number: data?.cnic?.cnic_number,
      photocopy: "",
      attending_physician_name: data?.attending_physician_name,
      attendantName: data?.attendant_details?.name,
      attendantContact: data?.attendant_details?.contact,
      attendantRelation: data?.attendant_details?.relation_to_patient,
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

  //   add patient handler
  const handleUpdate = async (e) => {
    e.preventDefault();
    const header = getHeader();

    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("age", payload.age);
    formData.append("gender", payload.gender);
    formData.append("contact", payload.contact);
    formData.append("address", payload.address);
    formData.append("cnic_number", payload.cnic_number);
    formData.append("photocopy", payload.photocopy);
    formData.append("attending_physician_name", payload.attending_physician_name);
    formData.append("attendantName", payload.attendantName);
    formData.append("attendantContact", payload.attendantContact);
    formData.append("attendant_relation_to_patient", payload.attendantRelation);

    try {
      setLoading(true);
      const response = await API.put(`/patients/${data?._id}`, formData, header);
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
    <>
      <form className="" style={{ paddingLeft: 16 }} onSubmit={handleUpdate}>
        <div className="row">
          <div className="col-xl-4" style={{ paddingRight: 30 }}>
            <div className="form-group row widget-3">
              <FileInput
                required
                label="CNIC Photocopy"
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
          <div className="col-xl-4">
            <TextInput
              required
              name="name"
              placeholder="Patient name"
              value={payload.name}
              onChange={handleChange}
            />
            <TextInput
              required
              type="number"
              min={1}
              name="cnic_number"
              placeholder="CNIC number"
              value={payload.cnic_number}
              onChange={handleChange}
            />
            <TextInput
              required
              name="contact"
              type="number"
              min={1}
              placeholder="Contact no."
              value={payload.contact}
              onChange={handleChange}
            />
            <TextInput
              required
              name="attendantName"
              placeholder="Attendant name"
              value={payload.attendantName}
              onChange={handleChange}
            />
            <TextInput
              required
              type="number"
              min={1}
              name="attendantContact"
              placeholder="Attendant phone number"
              value={payload.attendantContact}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4">
            <TextInput
              required
              type="number"
              min={1}
              name="age"
              placeholder="Age"
              value={payload.age}
              onChange={handleChange}
            />
            <TextInput
              required
              name="attending_physician_name"
              placeholder="Attending physician name"
              value={payload.attending_physician_name}
              onChange={handleChange}
            />
            <TextInput
              required
              name="attendantRelation"
              placeholder="Attendant relation to patient"
              value={payload.attendantRelation}
              onChange={handleChange}
            />
            <div className="form-group">
              <select
                className="form-control form-select"
                placeholder="Gender"
                name="gender"
                value={payload.gender}
                onChange={handleChange}
              >
                <option defaultChecked>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4"></div>
          <div className="col-xl-8">
            <TextAreaInput
              required
              name="address"
              placeholder="Address"
              value={payload.address}
              onChange={handleChange}
              rows={4}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            {loading ? <ButtonLoader /> : "Update"}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditPatientForm;
