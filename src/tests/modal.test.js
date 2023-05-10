import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "react-modal-hrnet";

// Simulated function
const handleClose = jest.fn();

// Create a fake store with a reducer that returns an empty array
const store = configureStore({
  reducer: {
    employees: () => [],
  },
});

// Test the Modal component
describe("Checks the display of the Modal component", () => {
  render(
    <Provider store={store}>
      <Modal closeModal={handleClose} />
    </Provider>
  );

  // Test that the modal renders a close button
  it("should display the close button", () => {
    // Get the close button
    const closeButton = screen.getByAltText(/close-modal/i);

    // Simulate a click on the close button
    fireEvent.click(closeButton);

    // Check that the close button is in the document
    expect(closeButton).toBeInTheDocument();

    // Check that the function has been called
    expect(handleClose).toHaveBeenCalledTimes(1);

    expect(Modal).toMatchSnapshot();
  });
});
