"use client";

import DataTableBase from "@/components/common/DataTable";
import Loader from "@/components/common/Loader";
import ViewPrescriptionsModal from "@/components/pharmcist/prescriptions/ViewPrescription";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AllPrescription = () => {
  const session = useSession();
  const user = session?.data?.user;
  const header = getHeader();
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    loadPrescriptionsData();
  }, [session]);

  const loadPrescriptionsData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get(`/prescriptions/approved?pharmacy_id=${user?.id}`, header);
      if (Array.isArray(data.prescriptions)) {
        setPrescriptions(data.prescriptions);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
          <span style={{ color: row?.approved ? "green" : "red" }}>
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
            data-bs-target="#viewPrescription"
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
          <div className="all_prescriptions main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">My Approved Prescriptions</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card pt-3">
                  <DataTableBase columns={columns} data={prescriptions} isPrescription={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
      <ViewPrescriptionsModal
        data={selected}
        modalId={"viewPrescription"}
        callback={() => loadPrescriptionsData()}
        action={false}
      />
    </>
  );
};

export default AllPrescription;
