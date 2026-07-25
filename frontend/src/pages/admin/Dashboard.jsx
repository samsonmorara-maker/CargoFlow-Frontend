import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBox,
  FaTruck,
  FaUsers,
  FaCheckCircle,
  FaUserTie,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa";

import { getDashboard } from "../../api/admin";
import Card from "../../components/common/Card";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboard();
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!stats) {
    return (
      <div className="py-20 text-center text-lg">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome to the CargoFlow Administration Panel
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <Card
          title="Total Shipments"
          value={stats.total_shipments}
          icon={<FaBox className="text-blue-600 text-2xl" />}
        />

        <Card
          title="Pending Shipments"
          value={stats.pending_shipments}
          icon={<FaClipboardList className="text-yellow-500 text-2xl" />}
        />

        <Card
          title="Driver Assigned"
          value={stats.driver_assigned}
          icon={<FaTruck className="text-indigo-600 text-2xl" />}
        />

        <Card
          title="In Transit"
          value={stats.in_transit}
          icon={<FaTruck className="text-orange-500 text-2xl" />}
        />

        <Card
          title="Delivered"
          value={stats.delivered}
          icon={<FaCheckCircle className="text-green-600 text-2xl" />}
        />

        <Card
          title="Cancelled"
          value={stats.cancelled}
          icon={<FaBox className="text-red-500 text-2xl" />}
        />

        <Card
          title="Customers"
          value={stats.total_customers}
          icon={<FaUsers className="text-blue-500 text-2xl" />}
        />

        <Card
          title="Drivers"
          value={stats.total_drivers}
          icon={<FaUserTie className="text-purple-600 text-2xl" />}
        />

      </div>

      {/* Driver Statistics */}
      <div>

        <h2 className="text-2xl font-semibold mb-5">
          Driver Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card
            title="Available Drivers"
            value={stats.available_drivers}
          />

          <Card
            title="Busy Drivers"
            value={stats.busy_drivers}
          />

          <Card
            title="Offline Drivers"
            value={stats.offline_drivers}
          />

        </div>

      </div>

      {/* Management */}
      <div>

        <h2 className="text-2xl font-semibold mb-5">
          Management
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            to="/admin/shipments"
            className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition"
          >
            <FaBox className="text-4xl text-blue-600 mb-4" />

            <h3 className="font-bold text-xl">
              Shipments
            </h3>

            <p className="text-gray-500 mt-2">
              View and manage all shipments.
            </p>

            <div className="mt-5 flex items-center text-blue-600 font-semibold">
              Open
              <FaArrowRight className="ml-2" />
            </div>
          </Link>

          <Link
            to="/admin/customers"
            className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition"
          >
            <FaUsers className="text-4xl text-green-600 mb-4" />

            <h3 className="font-bold text-xl">
              Customers
            </h3>

            <p className="text-gray-500 mt-2">
              Manage customer accounts.
            </p>

            <div className="mt-5 flex items-center text-green-600 font-semibold">
              Open
              <FaArrowRight className="ml-2" />
            </div>
          </Link>

          <Link
            to="/admin/drivers"
            className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition"
          >
            <FaTruck className="text-4xl text-orange-600 mb-4" />

            <h3 className="font-bold text-xl">
              Drivers
            </h3>

            <p className="text-gray-500 mt-2">
              View and approve drivers.
            </p>

            <div className="mt-5 flex items-center text-orange-600 font-semibold">
              Open
              <FaArrowRight className="ml-2" />
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;