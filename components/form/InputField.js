import React from "react";

const InputField = ({ label, type, placeholder, ...rest }) => {
  return (
    <div className="form-group m-b-10">
      <label className="col-form-label">{label}</label>
      <input className="form-control" type={type} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default InputField;
