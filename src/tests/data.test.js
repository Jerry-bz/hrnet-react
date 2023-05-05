import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DataEmployees from "../components/data";

// Fake employee
const fakeEmployee = {
  firstName: "John",
  lastName: "Doe",
  startDate: "2020-01-01",
  department: "Sales",
  dateOfBirth: "1990-01-01",
  street: "123 Main St",
  city: "New York",
  zipCode: "10001",
  state: "NY",
};

// Test the DataEmployees component
describe("Checks the display data of employees", () => {
  it("should display employees", () => {
    // Pass the fake employee to the DataEmployees component
    render(
      <BrowserRouter>
        <DataEmployees data={[fakeEmployee]} />
      </BrowserRouter>
    );

    const firstName = screen.getByText(/John/i);
    expect(firstName).toBeInTheDocument();

    const lastName = screen.getByText(/Doe/i);
    expect(lastName).toBeInTheDocument();

    const startDate = screen.getByText(/2020-01-01/i);
    expect(startDate).toBeInTheDocument();

    const department = screen.getByText(/Sales/i);
    expect(department).toBeInTheDocument();

    const dateOfBirth = screen.getByText(/1990-01-01/i);
    expect(dateOfBirth).toBeInTheDocument();

    const street = screen.getByText(/123 Main St/i);
    expect(street).toBeInTheDocument();

    const city = screen.getByText(/New York/i);
    expect(city).toBeInTheDocument();

    const zipCode = screen.getByText(/10001/i);
    expect(zipCode).toBeInTheDocument();

    const state = screen.getByText(/NY/i);
    expect(state).toBeInTheDocument();

    // Compare the snapshot
    expect(DataEmployees).toMatchSnapshot();
  });
});
