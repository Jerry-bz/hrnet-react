import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EmployeeForm } from "../components/form";

// Create a fake store with a reducer that returns an empty array
const store = configureStore({
  reducer: {
    employees: () => [],
  },
});

// Test the Employee Form component
describe("Checks the display of the Employee Form component", () => {
  // Test that the form renders a save button
  it("should display the save button", () => {
    render(
      <Provider store={store}>
        <EmployeeForm />
      </Provider>
    );

    const saveButton = screen.getByText(/save/i);
    expect(saveButton).toBeInTheDocument();
  });

  // Test that the form have text "First Name"
  it("should display the first name", () => {
    render(
      <Provider store={store}>
        <EmployeeForm />
      </Provider>
    );

    const firstName = screen.getByText(/First Name/i);
    expect(firstName).toBeInTheDocument();
  });

  // Test that the form renders a first name input
  it("should change value a firstname input", () => {
    render(
      <Provider store={store}>
        <EmployeeForm />
      </Provider>
    );

    // Get the input
    const lastName = screen.getByTestId(/firstName/i);

    // Change the value
    fireEvent.change(lastName, { target: { value: "John" } });

    // Check the value
    expect(lastName).toHaveAttribute("type", "text");
    expect(lastName).toHaveValue("John");
  });

  // Verify that the component is displayed correctly
  it("should show component Employee Form", () => {
    render(
      <Provider store={store}>
        <EmployeeForm />
      </Provider>
    );

    // Get the component
    expect(EmployeeForm).toMatchSnapshot();
  });
});
