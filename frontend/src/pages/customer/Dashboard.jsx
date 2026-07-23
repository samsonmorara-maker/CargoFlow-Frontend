import { useNavigate } from "react-router-dom";

import Card from "../../components/common/Card";

import {
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaPlus,
  FaHistory,
  FaMapMarkedAlt,
  FaUser,
} from "react-icons/fa";

function CustomerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome back
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your shipments from one place.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <Card
          title="Total Shipments"
          value="0"
          subtitle="All shipments"
          icon={<FaBox className="text-blue-600" />}
        />

        <Card
          title="Active"
          value="0"
          subtitle="Currently moving"
          icon={<FaTruck className="text-amber-500" />}
        />

        <Card
          title="Delivered"
          value="0"
          subtitle="Completed"
          icon={<FaCheckCircle className="text-green-600" />}
        />

        <Card
          title="Pending"
          value="0"
          subtitle="Awaiting pickup"
          icon={<FaClock className="text-red-500" />}
        />

      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-5 text-2xl font-semibold">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          <button
            onClick={() => navigate("/customer/shipment")}
            className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FaPlus className="mb-4 text-3xl text-blue-600" />

            <h3 className="font-semibold text-lg">
              Create Shipment
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Send a new package.
            </p>
          </button>

          <button
            onClick={() => navigate("/customer/history")}
            className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FaHistory className="mb-4 text-3xl text-green-600" />

            <h3 className="font-semibold text-lg">
              Shipment History
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              View previous shipments.
            </p>
          </button>

          <button
            onClick={() => navigate("/customer/tracking")}
            className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FaMapMarkedAlt className="mb-4 text-3xl text-amber-500" />

            <h3 className="font-semibold text-lg">
              Track Shipment
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Track packages in real time.
            </p>
          </button>

          <button
            onClick={() => navigate("/customer/profile")}
            className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FaUser className="mb-4 text-3xl text-purple-600" />

            <h3 className="font-semibold text-lg">
              My Profile
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Manage your account.
            </p>
          </button>

        </div>
      </div>

    </div>
  );
}

export default CustomerDashboard;