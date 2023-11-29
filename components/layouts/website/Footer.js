import React from "react";

const Footer = () => {
  return (
    <footer className="footer-front section gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <img
                  src="/assets/images/logo-tagline.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: 135 }}
                />
              </div>
              <p>
                Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati
                tenetur veritatis eveniet distinctio possimus.
              </p>

              <ul className="list-inline footer-socials mt-4">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.pinterest.com/">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Department</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <a href="#">Surgery </a>
                </li>
                <li>
                  <a href="#">{"Wome's"} Health</a>
                </li>
                <li>
                  <a href="#">Radiology</a>
                </li>
                <li>
                  <a href="#">Cardioc</a>
                </li>
                <li>
                  <a href="#">Medicine</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Support</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Company Support </a>
                </li>
                <li>
                  <a href="#">FAQuestions</a>
                </li>
                <li>
                  <a href="#">Company Licence</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Get in Touch</h4>
              <div className="divider mb-4"></div>

              <div className="footer-contact-block mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-email mr-3"></i>
                  <span className="h6 mb-0">Support Available for 24/7</span>
                </div>
                <h4 className="mt-2">
                  <a href="#">Support@email.com</a>
                </h4>
              </div>

              <div className="footer-contact-block">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-support mr-3"></i>
                  <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                </div>
                <h4 className="mt-2">
                  <a href="#">+23-456-6588</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-btm py-4 mt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="copyright">
                &copy; Copyright <span className="text-color">Tushifa</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form action="#" className="subscribe">
                  <input type="text" className="form-control" placeholder="Your Email address" />
                  <a href="#" className="btn btn-main-2 btn-round-full">
                    Subscribe
                  </a>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <a className="backtop js-scroll-trigger" href="#top">
                <i className="icofont-long-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
