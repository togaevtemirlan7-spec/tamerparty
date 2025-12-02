import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";
import ScannerPage from "./ScannerPage";
import PersonPage from "./PersonPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/scanner" element={<ScannerPage />} />
        <Route path="/person" element={<PersonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
