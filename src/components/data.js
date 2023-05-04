import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import noneEmployee from "../assets/logo-employee-none.png";
import "../styles/data.css";

/**
 *  DataEmployees component
 * @returns {JSX.Element}
 */

export default function DataEmployees() {
  // Data table
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
  ];

  // Get employee list from redux store
  const employees = useSelector((state) => state.employee);

  // Search term state and handler
  const [searchTerm, setSearchTerm] = useState("");

  // Fields to search
  const searchFields = [
    "firstName",
    "lastName",
    "department",
    "state",
    "city",
    "zipCode",
    "street",
    "dateOfBirth",
    "startDate",
  ];

  // Filter employee list by search term
  const filteredEmployees = employees.filter((employee) =>
    searchFields.some(
      (field) =>
        employee[field] &&
        employee[field].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // If there are employees, display the list
  const employeeExists = (
    <section className="data">
      <h1 className="data-title">Current Employee(s)</h1>
      <div className="data-search">
        <label htmlFor="search">Search</label>
        <input
          type="search"
          id="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
        className="data-table-responsive"
      />
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
    </section>
  );

  // If there are no employees, display a message
  const employeeNotExists = (
    <section className="data">
      <h1 className="data-title">Current Employee</h1>
      <img
        loading="eager"
        className="data-img"
        src={noneEmployee}
        alt="none-data"
      ></img>
      <p className="data-none">No employee is registered in the database</p>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
    </section>
  );

  return employees.length > 0 ? employeeExists : employeeNotExists;
}
