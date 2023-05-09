import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../features/employee.slice";

// Create a Redux store holding the state of your app.

export const store = configureStore({
  reducer: {
    employees: employeeSlice,
  },
});
