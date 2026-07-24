import { useEffect, useState } from "react";

import {
  FaTruck,
  FaBoxOpen,
  FaCheckCircle,
  FaShippingFast,
} from "react-icons/fa";

import StatsCard from "../../components/dashboard/StatsCard";
import DriverPerformance from "../../components/dashboard/DriverPerformance";
import ShipmentChart from "../../components/dashboard/ShipmentChart";
import RecentShipment from "../../components/dashboard/RecentShipment";

import { getDriverDashboard } from "../../api/driver";

function Dashboard() {
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
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Driver Dashboard
      </h1>

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

      <div className="grid gap-8 xl:grid-cols-2">

        <ShipmentChart />

        <DriverPerformance />

      </div>

      <RecentShipment />

    </div>
  );
}

export default Dashboard;