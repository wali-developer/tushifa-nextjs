import React from "react";
import DataTable from "react-data-table-component";

const sortIcon = "Arrow icon";
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

function DataTableBase(props) {
  return (
    <DataTable
      pagination
      selectableRowsComponent={"checkbox"}
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      dense
      {...props}
    />
  );
}

export default DataTableBase;
