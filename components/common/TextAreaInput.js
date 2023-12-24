import React from "react";

const TextAreaInput = ({ name, value, onChange, placeholder, type, ...rest }) => {
  return (
    <div className="form-group">
      <textarea
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default TextAreaInput;
