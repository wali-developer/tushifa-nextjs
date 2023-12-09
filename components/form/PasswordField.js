import React from "react";

const PasswordField = ({ label, placeholder, ...rest }) => {
  return (
    <div className="form-group m-b-10">
      <label className="col-form-label">{label}</label>
      <div className="form-input position-relative">
        <input className="form-control" type="password" placeholder={placeholder} {...rest} />
        <div className="show-hide">
          <span className="show"></span>
        </div>
      </div>
    </div>
  );
};

export default PasswordField;
