import { createSlice } from "@reduxjs/toolkit";

// Slice Employee
const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    // get all employees
    getEmployee: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { getEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
