import ButtonLoader from "@/components/common/ButtonLoader";
import TextAreaInput from "@/components/common/TextAreaInput";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditPharmacyModal = ({ modalId, data, callback }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    point_person: "",
  });

  useEffect(() => {
    setPayload({
      name: data?.name,
      email: data?.email,
      contact: data?.contact,
      address: data?.address,
      point_person: data?.point_person,
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

  // update pharmacy handler
  const updateHanlder = async (e) => {
    e.preventDefault();
    const header = getHeader();

    try {
      setLoading(true);
      const resposne = await API.put(`/pharmacies/${data?._id}`, payload, header);
      if (resposne?.data?.success == true) {
        toast.success(resposne?.data?.message);
        router.push("/all-pharmacies");
        callback();
      } else if (resposne?.data?.success == false) {
        toast.error("Failed to add pharmacy, please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
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
              <div className="basic-form">
                <form onSubmit={updateHanlder}>
                  <div className="row">
                    <div className="col-xl-6">
                      <TextInput
                        required
                        name="name"
                        placeholder="Pharmacy name"
                        value={payload.name}
                        onChange={handleChange}
                      />
                      <TextInput
                        required
                        name="contact"
                        placeholder="Mobile No."
                        value={payload.contact}
                        onChange={handleChange}
                      />
                      <TextAreaInput
                        required
                        name="address"
                        placeholder="Address"
                        value={payload.address}
                        onChange={handleChange}
                        rows={4}
                      />
                    </div>
                    <div className="col-xl-6">
                      <div className="form-group">
                        <TextInput
                          required
                          name="email"
                          placeholder="Email"
                          value={payload.email}
                          onChange={handleChange}
                        />
                        <TextInput
                          required
                          name="point_person"
                          placeholder="Point person"
                          value={payload.point_person}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary float-end">
                          {loading ? <ButtonLoader /> : "Update"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPharmacyModal;
