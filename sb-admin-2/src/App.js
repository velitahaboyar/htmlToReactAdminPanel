import Tables from "./Tables";
import Homepage from "./Homepage";
import Charts from "./Charts";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Tables" element={<Tables />} />
        <Route path="/Charts" element={<Charts />} />
      </Routes>
    </div>
  );
}

export default App;
