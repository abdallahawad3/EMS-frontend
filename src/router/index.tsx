import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import LoginLandingPage from "../pages/LoginLanding";
import RootLayout from "../layouts";
import DashboardPage from "../pages/Dashboard";
import SettingsPage from "../pages/Settings";
import AttendancePage from "../pages/Attendance";
import EmployeesPage from "../pages/Employees";
import LeavePage from "../pages/Leave";
import PayslipsPage from "../pages/Payslips";
import PrintPayslipsPage from "../pages/PrintPayslips";
import LoginForm from "../components/Login/LoginForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginLandingPage />} />
      <Route
        path="/login/admin"
        element={
          <LoginForm title="Admin Portal" role="admin" subtitle="Sign in to access your account" />
        }
      />
      <Route
        path="/login/employee"
        element={
          <LoginForm
            title="Employee Portal"
            role="employee"
            subtitle="Sign in to access your account!"
          />
        }
      />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="attendance" element={<AttendancePage />} />
        <Route path="employees" element={<EmployeesPage />} />
        <Route path="leaves" element={<LeavePage />} />
        <Route path="payslips" element={<PayslipsPage />} />
        <Route path="print-payslip/:id" element={<PrintPayslipsPage />} />
      </Route>

      <Route path="*" element={<LoginLandingPage />} />
    </>,
  ),
);

export default router;
