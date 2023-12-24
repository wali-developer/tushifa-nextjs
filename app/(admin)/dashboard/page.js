"use client";

import PatientsList from "@/components/admin/dashboard/PatientsList";
import StatisticsCards from "@/components/admin/dashboard/StatisticsCards";
import DataTableBase from "@/components/common/DataTable";
import React from "react";

const Dashboard = () => {
  const columns = [
    {
      name: "Patient name",
      selector: (row) => row.title,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Contact",
      selector: (row) => row.mobile,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "CNIC number",
      selector: (row) => row.sex,
    },
    {
      name: "Action",
      selector: (row) => {
        return <button>Button</button>;
      },
    },
  ];

  const data = [
    {
      id: 1,
      title: "Airi",
      age: "20",
      email: "test@gmail.com",
      mobile: "658543469",
      gender: "Male",
      sex: "4930284902",
    },
    {
      id: 2,
      title: "Airi",
      age: "20",
      email: "test@gmail.com",
      mobile: "658543469",
      gender: "Male",
      sex: "4930284902",
    },
    {
      id: 3,
      title: "Airi",
      age: "20",
      email: "test@gmail.com",
      mobile: "658543469",
      gender: "Male",
      sex: "4930284902",
    },
    {
      id: 4,
      title: "Airi",
      age: "20",
      email: "test@gmail.com",
      mobile: "658543469",
      gender: "Male",
      sex: "4930284902",
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
        <DataTableBase columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
