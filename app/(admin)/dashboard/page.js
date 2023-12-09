"use client";

import PatientsList from "@/components/admin/dashboard/PatientsList";
import StatisticsCards from "@/components/admin/dashboard/StatisticsCards";
import DataTableBase from "@/components/common/DataTable";
import React from "react";

const Dashboard = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="row page-titles mx-0">
          <div className="col-lg-12 p-md-0">
            <h4 className="text-primary">
              Good morning <span className="names">Roberts</span>
            </h4>
          </div>
        </div>
        <StatisticsCards />
        <PatientsList />

        {/*  */}
        <DataTableBase columns={columns} data={data} selectableRows />
      </div>
    </div>
  );
};

export default Dashboard;
