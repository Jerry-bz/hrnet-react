import DataEmployees from "../components/data";
import { useSelector } from "react-redux";

// Show employees
export default function Employees() {
  // Get employees from the store
  const employees = useSelector((state) => state.employees);

  // Display the employees in a table
  return <DataEmployees data={employees} />;
}
