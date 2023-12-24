import React from "react";

const TextInput = ({ name, value, onChange, placeholder, type, ...rest }) => {
  return (
    <div className="form-group">
      <input
        type={type ? type : "text"}
        className="form-control"
        style={{ height: 50 }}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
