import { createSlice } from "@reduxjs/toolkit";

// Slice Employee
const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    // get all employees
    getEmployee: (state, action) => {
      // State is the current state
      // Action is the action to be performed
      return [...state, action.payload];
    },
  },
});

export const { getEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
