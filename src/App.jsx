import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import AdminPage from "./AdminPage";
import ScannerPage from "./ScannerPage";
import AdminLogin from "./AdminLogin";
import PersonPage from "./PersonPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Register />} />

        {/* Логин админки */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Админ панель */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Страница сканера */}
        <Route path="/scanner" element={<ScannerPage />} />

        {/* Страница гостя по QR */}
        <Route path="/guest/:id" element={<PersonPage />} />

      </Routes>
    </BrowserRouter>
  );
}

