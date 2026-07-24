import { Routes, Route, Navigate } from "react-router-dom";
import TrackingSearch from "../pages/customer/TrackingSearch";
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
import Tracking from "../pages/customer/Tracking";
import Deliveries from "../pages/driver/Deliveries";
import ShipmentsDetails from "../pages/driver/ShipmentsDetails";
import Pickup from "../pages/driver/Pickup";
import Delivery from "../pages/driver/Delivery";
import DriverHistory from "../pages/driver/History";
import DriverProfile from "../pages/driver/Profile";
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
              }/> 
        <Route
  path="/customer/tracking"
  element={
    <ProtectedRoute allowedRoles={["CUSTOMER"]}>
      <TrackingSearch />
    </ProtectedRoute>
  }
/>
              <Route
        path="/customer/tracking/:trackingNumber"
        element={
        <ProtectedRoute allowedRoles={["CUSTOMER"]}>
        <Tracking />
      </ProtectedRoute>
      }/>
      <Route
        path="/driver/dashboard"
        element={
          <ProtectedRoute allowedRoles={["DRIVER"]}>
            <DriverDashboard />
          </ProtectedRoute>
        }
      />
      <Route
  path="/driver/deliveries"
  element={
    <ProtectedRoute allowedRoles={["DRIVER"]}>
      <Deliveries />
    </ProtectedRoute>
  }
/>
    <Route
  path="/driver/shipment/:uuid"
  element={
    <ProtectedRoute allowedRoles={["DRIVER"]}>
      <ShipmentsDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/driver/pickup/:uuid"
  element={
    <ProtectedRoute allowedRoles={["DRIVER"]}>
      <Pickup />
    </ProtectedRoute>
  }
/>
<Route
  path="/driver/delivery/:uuid"
  element={
    <ProtectedRoute allowedRoles={["DRIVER"]}>
      <Delivery />
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
    path="/driver/profile"
    element={
        <ProtectedRoute allowedRoles={["DRIVER"]}>
            <DriverProfile />
        </ProtectedRoute>
    }
/>
        <Route
    path="/driver/history"
    element={
        <ProtectedRoute allowedRoles={["DRIVER"]}>
            <DriverHistory />
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