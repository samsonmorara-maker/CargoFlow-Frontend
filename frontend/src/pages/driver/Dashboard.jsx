import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaTruck,
  FaBoxOpen,
  FaCheckCircle,
  FaShippingFast,
  FaHistory,
  FaCar,
  FaUser,
  FaClipboardList,
} from "react-icons/fa";

import StatsCard from "../../components/dashboard/StatsCard";
import DriverPerformance from "../../components/dashboard/DriverPerformance";
import ShipmentChart from "../../components/dashboard/ShipmentChart";
import RecentShipment from "../../components/dashboard/RecentShipment";
import { getDriverDashboard } from "../../api/driver";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDriverDashboard();
      setStats(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Driver Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back. Here's today's delivery overview.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Pending Pickups"
          value={stats.pending_pickups}
          icon={<FaBoxOpen />}
        />

        <StatsCard
          title="In Transit"
          value={stats.in_transit}
          icon={<FaShippingFast />}
        />

        <StatsCard
          title="Completed Today"
          value={stats.completed_today}
          icon={<FaCheckCircle />}
        />

        <StatsCard
          title="Total Delivered"
          value={stats.total_completed}
          icon={<FaTruck />}
        />

      </div>

      {/* Charts */}
      <div className="grid gap-8 xl:grid-cols-2">

        <ShipmentChart />

        <DriverPerformance />

      </div>

      {/* Recent Shipment */}
      <RecentShipment />

      {/* Quick Actions */}
      <div>

        <h2 className="mb-5 text-2xl font-semibold">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <button
            onClick={() => navigate("/driver/history")}
            className="rounded-xl bg-white p-6 text-left shadow transition hover:-translate-y-1 hover:shadow-lg"
          >

            <FaHistory className="mb-4 text-3xl text-green-600" />

            <h3 className="text-lg font-semibold">
              Delivery History
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              View all completed deliveries.
            </p>

          </button>

          <button
            onClick={() => navigate("/driver/vehicle")}
            className="rounded-xl bg-white p-6 text-left shadow transition hover:-translate-y-1 hover:shadow-lg"
          >

            <FaCar className="mb-4 text-3xl text-blue-600" />

            <h3 className="text-lg font-semibold">
              My Vehicle
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              View and manage your assigned vehicle.
            </p>

          </button>
              <button
                onClick={() => navigate("/driver/deliveries")}
                className="rounded-xl bg-white p-6 text-left shadow transition hover:-translate-y-1 hover:shadow-lg"
                  >

                <FaClipboardList className="mb-4 text-3xl text-orange-600" />

                <h3 className="text-lg font-semibold">
                Assigned Shipments
                </h3>

              <p className="mt-2 text-sm text-gray-500">
               View today's assigned deliveries and pickups.
            </p>

          </button>
          <button
        onClick={() => navigate("/driver/profile")}
        className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
              >

        <FaUser className="mb-4 text-3xl text-purple-600"/>

          <h3 className="text-lg font-semibold">
            My Profile
        </h3>

            <p className="mt-2 text-sm text-gray-500">
             Update your personal information.
          </p>

        </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;