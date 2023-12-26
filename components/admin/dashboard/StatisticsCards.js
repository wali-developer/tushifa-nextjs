import React from "react";

const StatisticsCards = ({ statistics }) => {
  return (
    <div className="new-patients main_container">
      <div className="row">
        <div className="col-sm-6 col-xl-3 col-lg-6">
          <div className="widget card card-primary bg-card1">
            <div className="card-body">
              <div className="media text-center">
                <span>
                  <i className="fas fa-calendar-check fa-2x"></i>
                </span>
                <div className="media-body">
                  <span className="text-white">Fullfilments</span>
                  <h3 className="mb-0 text-white">{statistics?.totalPharmacies}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3 col-lg-6">
          <div className="widget card card-danger bg-card2">
            <div className="card-body">
              <div className="media text-center">
                <span>
                  <i className="fas fa-user-nurse fa-2x"></i>
                </span>
                <div className="media-body">
                  <span className="text-white">Approved patients</span>
                  <h3 className="mb-0 text-white">{statistics?.totalPatients}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3 col-lg-6">
          <div className="widget card card-primary bg-card3">
            <div className="card-body">
              <div className="media text-center">
                <span>
                  <i className="fas fa-user-plus fa-2x"></i>
                </span>
                <div className="media-body">
                  <span className="text-white">Week summery</span>
                  <h3 className="mb-0 text-white">{statistics?.totalPrescriptions}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3 col-lg-6">
          <div className="widget card card-primary bg-card4">
            <div className="card-body">
              <div className="media text-center">
                <span>
                  <i className="fas fa-database fa-2x"></i>
                </span>
                <div className="media-body">
                  <span className="text-white">Total Investment</span>
                  <h3 className="mb-0 text-white">
                    {statistics?.totalInvestment} <span style={{ fontSize: 12 }}>PKR</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCards;
