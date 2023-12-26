"use client";

import StatisticsCards from "@/components/admin/dashboard/StatisticsCards";
import ViewPatientModal from "@/components/admin/patients/ViewPatientModal";
import customStyles from "@/components/common/DataTableStyle";
import Loader from "@/components/common/Loader";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";

const Dashboard = () => {
  const header = getHeader();
  const [patientsList, setPatientsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    loadStatisticsData();
    loadPatientsData();
  }, []);

  const loadStatisticsData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get(`/admin-statistics`, header);
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
      const { data } = await API.get(`/patients/getPatientsByCount?count=5`, header);
      if (Array.isArray(data.data)) {
        setPatientsList(data.data);
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
          <div className="row page-titles mx-0">
            <div className="col-lg-12 p-md-0">
              <h4 className="text-primary">
                Good morning <span className="names">Admin</span>
              </h4>
            </div>
          </div>
          <StatisticsCards statistics={statistics} />
          <div className="card">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text pl-4 pt-4">
                  <h4 className="text-primary">All Patient</h4>
                </div>
              </div>
            </div>
            <DataTable
              className="table-responsive mt-3"
              columns={columns}
              data={patientsList}
              selectableRowsComponent={"checkbox"}
              dense
              customStyles={customStyles}
              highlightOnHover
              selectableRows
              persistTableHead
            />
          </div>
        </div>
      </div>
      <ViewPatientModal modalId="viewModal" data={selected} />
      {loading && <Loader />}
    </>
  );
};

export default Dashboard;
