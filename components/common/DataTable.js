"use client";

import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

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
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  // Download record as CSV
  function downloadCSV(data) {
    const headers = Object.keys(data[0]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      headers.join(",") +
      "\n" +
      data.map((row) => headers.map((header) => row[header]).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("target", "_blank");
    link.setAttribute("download", "patients-list.csv");
    document.body.appendChild(link);
    link.click();
  }

  // Filter data
  const handleFilterChange = (e) => {
    const searchText = e.target.value;
    setFilterText(searchText);

    const filteredItems = props.data.filter(
      (item) => item.name && item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setData(filteredItems);
    setResetPaginationToggle(!resetPaginationToggle);
  };

  return (
    <section className="all-patients main_container mb-5">
      <div className="pt-4 pb-4 px-4 bg-white ">
        <div className="row">
          <div className="col-8">
            <div className=" exportBtn" onClick={() => downloadCSV(props.data)}>
              <span className="fas fa-cloud-download-alt"></span>
              <p>Export list</p>
            </div>
          </div>
          <div className="col-4">
            <FilterComponent
              onFilter={(e) => {
                handleFilterChange(e);
              }}
              filterText={filterText}
            />
          </div>
        </div>
        <DataTable
          className="table-responsive mt-3"
          pagination
          data={data}
          columns={props.columns}
          selectableRowsComponent={"checkbox"}
          sortIcon={<i class="fas fa-sort"></i>}
          defaultSortField="id"
          selectableRowsComponentProps={selectProps}
          dense
          customStyles={customStyles}
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          highlightOnHover
          selectableRows
          persistTableHead
        />
      </div>
    </section>
  );
}

export default DataTableBase;
