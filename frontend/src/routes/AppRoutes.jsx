import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import CustomerDashboard from "../pages/customer/Dashboard";
import DriverDashboard from "../pages/driver/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";

import ProtectedRoute from "../components/auth/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute allowedRoles={["CUSTOMER"]}>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/driver/dashboard"
        element={
          <ProtectedRoute allowedRoles={["DRIVER"]}>
            <DriverDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;