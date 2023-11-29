import PatientsList from "@/components/admin/dashboard/PatientsList";
import StatisticsCards from "@/components/admin/dashboard/StatisticsCards";
import React from "react";

const Dashboard = () => {
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
      </div>
    </div>
  );
};

export default Dashboard;
