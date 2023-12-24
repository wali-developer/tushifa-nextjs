import React from "react";

const FilterComponent = ({ onFilter, onClear, filterText }) => {
  return (
    <div className="mb-3 d-flex align-items-center position-relative ">
      <label className="d-inline-block mt-2">Search:</label>
      <input
        type="text"
        value={filterText}
        onChange={onFilter}
        style={{
          minWidth: 270,
          height: 44,
          borderRadius: 6,
          border: "1px solid #ddd",
          padding: "0 15px",
          fontSize: 14,
          marginLeft: 10,
        }}
      />
    </div>
  );
};

export default FilterComponent;
