"use client";

import DataTableBase from "@/components/common/DataTable";
import Loader from "@/components/common/Loader";
import DeleteConfirmationModal from "@/components/common/DeleteConfirmationModal";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import EditPatientModal from "@/components/admin/patients/EditPatientModal";
import ViewPatientModal from "@/components/admin/patients/ViewPatientModal";

const AllPatients = () => {
  const header = getHeader();
  const [patientsList, setPatientsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    loadPatientsData();
  }, []);
  const loadPatientsData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/patients", header);
      if (Array.isArray(data.data)) {
        setPatientsList(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const { data } = await API.delete(`/patients/${selected._id}`, header);
      if (data?.success) {
        toast.success(data?.message);
        setSelected({});
        loadPatientsData();
      } else {
        toast.error(data?.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeleting(false);
    }
  };

  const columns = [
    {
      name: "Patient name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },

    {
      name: "Contact",
      selector: (row) => row.contact,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "CNIC number",
      selector: (row) => row.cnic.cnic_number,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="table-action d-flex align-items-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#viewModal"
            onClick={() => setSelected(row)}
          >
            <i class="fas fa-eye"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">All Patient</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card pt-4">
                  <DataTableBase columns={columns} data={patientsList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        modalId="deleteConfimation"
        onConfirm={() => handleDelete()}
        loading={deleting}
      />
      <EditPatientModal modalId="editModal" data={selected} callback={() => loadPatientsData()} />
      <ViewPatientModal modalId="viewModal" data={selected} />
      {loading && <Loader />}
    </>
  );
};

export default AllPatients;
