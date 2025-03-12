import Tables from "./Tables";
import Homepage from "./Dashboard";
import Charts from "./Charts";
import { Routes, Route } from "react-router";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Tables" element={<Tables />} />
        <Route path="/Charts" element={<Charts />} />
      </Routes>
    </div>
  );
}

export default App;
