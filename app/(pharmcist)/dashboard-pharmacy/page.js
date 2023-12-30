"use client";

import StatisticsCards from "@/components/admin/dashboard/StatisticsCards";
import ViewPatientModal from "@/components/admin/patients/ViewPatientModal";
import DataTableBase from "@/components/common/DataTable";
import customStyles from "@/components/common/DataTableStyle";
import Loader from "@/components/common/Loader";
import PharmacyStatistics from "@/components/pharmcist/PharamacyStatistics";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";

const Dashboard = () => {
  const header = getHeader();
  const [patientsList, setPatientsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const [statistics, setStatistics] = useState({});
  const session = useSession();
  const user = session?.data?.user;

  useEffect(() => {
    loadStatisticsData();
    loadPatientsData();
  }, [user]);

  const loadStatisticsData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get(`/pharmacies/${user?.pharmacyId}/statistics`, header);
      if (data?.statistics) {
        setStatistics(data?.statistics);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const loadPatientsData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get(
        `/prescriptions/approved?pharmacy_id=${user?.pharmacyId}`,
        header
      );
      if (Array.isArray(data.prescriptions)) {
        setPatientsList(data.prescriptions);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      name: "Patient name",
      selector: (row) => row?.patient?.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row?.patient?.age,
      sortable: true,
    },

    {
      name: "Contact",
      selector: (row) => row?.patient?.contact,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row?.patient?.gender,
      sortable: true,
    },
    {
      name: "CNIC number",
      selector: (row) => row?.patient?.cnic.cnic_number,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row?.patient?.address,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <Link href={`/patient-detials?id=${row?.patient?._id}`}>
          <i class="fas fa-eye"></i>
        </Link>
      ),
    },
  ];

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="row page-titles mx-0">
            <div className="col-lg-12 p-md-0">
              <h4 className="text-primary">
                Good morning <span className="names">{user?.name}</span>
              </h4>
            </div>
          </div>
          <PharmacyStatistics statistics={statistics} />
          <div className="card">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text pl-4 pt-4">
                  <h4 className="text-primary">Approved Prescriptions for the Patients</h4>
                </div>
              </div>
            </div>
            <DataTableBase columns={columns} data={patientsList} />
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default Dashboard;
