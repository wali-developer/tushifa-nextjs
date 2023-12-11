"use client";

import React from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const sortIcon = "Arrow icon";
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

const customStyles = {
  rows: {
    style: {
      height: "56px",
      fontFamily: "Rubik, sans-serif",
    },
  },
  headRow: {
    style: {
      borderBottomWidth: "0",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontSize: 14,
      height: "56px",
      borderBottom: 0,
      background: "#F8F8F8",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontSize: 14,
      color: "gray",
    },
  },
  pagination: {
    style: {
      borderTopWidth: "0",
      marginTop: "20px",
      fontSize: "14px",
    },
  },
};

function DataTableBase(props) {
  // const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = props?.data?.filter(
    (item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <section className="all-patients main_container mb-5">
      <div className="pt-4 pb-4 px-4 bg-white ">
        <DataTable
          className="table-responsive"
          pagination
          data={filteredItems}
          selectableRowsComponent={"checkbox"}
          selectableRowsComponentProps={selectProps}
          sortIcon={sortIcon}
          dense
          customStyles={customStyles}
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          selectableRows
          persistTableHead
          {...props}
        />
      </div>
    </section>
  );
}

export default DataTableBase;
