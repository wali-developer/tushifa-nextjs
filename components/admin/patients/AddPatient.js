"use client";

import ButtonLoader from "@/components/common/ButtonLoader";
import FileInput from "@/components/common/FileInput";
import Loader from "@/components/common/Loader";
import TextAreaInput from "@/components/common/TextAreaInput";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddPatient = () => {
  const router = useRouter();
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

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  //   add patient handler
  const addPatient = async (e) => {
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
      const { data } = await API.post("/patients", formData, header);
      if (data?.success == true) {
        toast.success(data?.message);
        setPayload({
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
        router.push("/all-patients");
      } else if (data?.success == false) {
        toast.error("Failed to add patient, please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={addPatient}>
        <div className="row">
          <div className="col-xl-4">
            <div className="form-group row widget-3">
              <div className="col-lg-12">
                <FileInput
                  required
                  label="CNIC Photocopy"
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
            <div className="form-group text-right mt-5">
              <button type="submit" className="btn btn-primary float-end">
                {loading ? <ButtonLoader /> : "Save"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPatient;
