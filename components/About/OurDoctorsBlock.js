import React from "react";

const OurDoctorsBlock = () => {
  return (
    <section className="section team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2 className="mb-4">Meet Our Specialist</h2>
              <div className="divider mx-auto my-4"></div>
              <p>
                Today’s users expect effortless experiences. Don’t let essential people and
                processes stay stuck in the past. Speed it up, skip the hassles
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-block mb-5 mb-lg-0">
              <img src="/assets/images/team/1.jpg" alt="" className="img-fluid w-100" />

              <div className="content">
                <h4 className="mt-4 mb-0">
                  <a href="doctor-single.html">John Marshal</a>
                </h4>
                <p>Internist, Emergency Physician</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-block mb-5 mb-lg-0">
              <img src="/assets/images/team/2.jpg" alt="" className="img-fluid w-100" />

              <div className="content">
                <h4 className="mt-4 mb-0">
                  <a href="doctor-single.html">Marshal Root</a>
                </h4>
                <p>Surgeon, Сardiologist</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-block mb-5 mb-lg-0">
              <img src="/assets/images/team/3.jpg" alt="" className="img-fluid w-100" />

              <div className="content">
                <h4 className="mt-4 mb-0">
                  <a href="doctor-single.html">Siamon john</a>
                </h4>
                <p>Internist, General Practitioner</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-block">
              <img src="/assets/images/team/4.jpg" alt="" className="img-fluid w-100" />

              <div className="content">
                <h4 className="mt-4 mb-0">
                  <a href="doctor-single.html">Rishat Ahmed</a>
                </h4>
                <p>Orthopedic Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctorsBlock;
