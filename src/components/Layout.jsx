import { Route, BrowserRouter as Router, Routes } from "react-router";
import { LoginPage } from "./login/LoginPage";
import { RegisterPage } from "./login/RegisterPage";

export function Layout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/dashboard/*" element={<DashboardLayout />} /> */}
      </Routes>
    </Router>
  );
}
