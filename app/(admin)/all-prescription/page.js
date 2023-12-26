"use client";

import EditPatientModal from "@/components/admin/patients/EditPatientModal";
import EditPrescriptionModal from "@/components/admin/prescriptions/EditPrescriptionModal";
import DataTableBase from "@/components/common/DataTable";
import DeleteConfirmationModal from "@/components/common/DeleteConfirmationModal";
import Loader from "@/components/common/Loader";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllPrescription = () => {
  const header = getHeader();
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    loadPrescriptionsData();
  }, []);
  const loadPrescriptionsData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/prescriptions", header);
      if (Array.isArray(data.data)) {
        setPrescriptions(data.data);
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
      const { data } = await API.delete(`/prescriptions/${selected._id}`, header);
      if (data?.success) {
        toast.success(data?.message);
        setSelected({});
        loadPrescriptionsData();
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
      name: "Prescription photocopy",
      // selector: (row) => row?.photocopy,
      cell: (row) => <Image src={row?.photocopy} alt="" width={40} height={40} />,
      sortable: true,
    },
    {
      name: "Patient name",
      selector: (row) => row?.patient?.name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Status",
      // selector: (row) => row.approved,
      cell: (row) => {
        return (
          <span style={{ color: row?.approved ? "yellow" : "red" }}>
            {row?.approved ? "Approved" : "Not approved"}
          </span>
        );
      },
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="table-action d-flex align-items-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            onClick={() => setSelected(row)}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteConfimation"
            onClick={() => setSelected(row)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all_prescriptions main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">All Prescriptions</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header fix-card">
                    <div className="row">
                      <div className="col-4">
                        <Link href="/new-prescription" className="btn btn-primary float-end">
                          New Prescription
                        </Link>
                      </div>
                    </div>
                  </div>
                  <DataTableBase columns={columns} data={prescriptions} isPrescription={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
      <DeleteConfirmationModal
        modalId="deleteConfimation"
        onConfirm={() => handleDelete()}
        loading={deleting}
      />
      <EditPrescriptionModal
        modalId="editModal"
        data={selected}
        callback={() => {
          setSelected({});
          loadPrescriptionsData();
        }}
      />
    </>
  );
};

export default AllPrescription;
