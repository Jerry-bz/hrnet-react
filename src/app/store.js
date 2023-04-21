import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../features/employee.slice";

export const store = configureStore({
  reducer: {
    employee: employeeSlice,
  },
});
