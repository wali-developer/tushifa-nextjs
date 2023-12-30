"use client";

import EditPharmacyModal from "@/components/admin/pharmacy/EditPharmacyModal";
import ViewPharmacyModal from "@/components/admin/pharmacy/ViewPharmacyModal";
import DataTableBase from "@/components/common/DataTable";
import DeleteConfirmationModal from "@/components/common/DeleteConfirmationModal";
import Loader from "@/components/common/Loader";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllPharmacies = () => {
  const header = getHeader();
  const [pharmaciesList, setPharmaciesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    loadPharmaciesData();
  }, []);

  // Load pharmacies record
  const loadPharmaciesData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/pharmacies", header);
      if (Array.isArray(data.data)) {
        setPharmaciesList(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete handler
  const handleDelete = async () => {
    try {
      setDeleting(true);
      const { data } = await API.delete(`/pharmacies/${selected._id}`, header);
      if (data?.success) {
        toast.success(data?.message);
        setSelected({});
        loadPharmaciesData();
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
      name: "Pharmacy name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
      name: "Contact",
      selector: (row) => row.contact,
      sortable: true,
    },

    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Point person",
      selector: (row) => row.point_person,
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
          <div className="all-patients main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">All Pharmacy</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header fix-card">
                    <div className="row">
                      <div className="col-8 d-flex gap-2 align-items-center"></div>
                      <div className="col-4" style={{ textAlign: "right" }}>
                        <Link href="/new-pharmacy" className="btn btn-primary float-end">
                          New Pharmacy
                        </Link>
                      </div>
                    </div>
                  </div>
                  <DataTableBase columns={columns} data={pharmaciesList} />
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
      <EditPharmacyModal
        modalId="editModal"
        data={selected}
        callback={() => loadPharmaciesData()}
      />
      <ViewPharmacyModal modalId="viewModal" pharmacyId={selected?._id} />
    </>
  );
};

export default AllPharmacies;
