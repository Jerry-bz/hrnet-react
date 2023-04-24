import Home from "./pages/home";
import EmployeeList from "./pages/employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
