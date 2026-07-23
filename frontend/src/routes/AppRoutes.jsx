import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import History from "../pages/customer/History";
import Details from "../pages/customer/Details";
import CustomerDashboard from "../pages/customer/Dashboard";
import DriverDashboard from "../pages/driver/Dashboard";
import Vehicle from "../pages/driver/Vehicle";
import AdminDashboard from "../pages/admin/Dashboard";
import Shipment from "../pages/customer/Shipment";
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
        path="/customer/shipment"
        element={
        <ProtectedRoute allowedRoles={["CUSTOMER"]}>
        <Shipment />
        </ProtectedRoute>
          }
          />

          <Route
            path="/customer/history"
            element={
            <ProtectedRoute allowedRoles={["CUSTOMER"]}>
            <History />
          </ProtectedRoute>
            }
            />
            <Route
            path="/customer/shipment/:uuid"
            element={
            <ProtectedRoute allowedRoles={["CUSTOMER"]}>
            <Details />
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
        path="/driver/vehicle"
        element={
        <ProtectedRoute allowedRoles={["DRIVER"]}>
          <Vehicle />
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