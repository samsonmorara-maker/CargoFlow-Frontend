import { useNavigate } from "react-router-dom";
import {
  FaBox,
  FaMapMarkerAlt,
  FaTruck,
  FaCalendarAlt,
} from "react-icons/fa";

function ShipmentCard({ shipment }) {
  const navigate = useNavigate();

  const statusColors = {
    PENDING: "bg-yellow-100 text-yellow-700",
    ASSIGNED: "bg-blue-100 text-blue-700",
    IN_TRANSIT: "bg-indigo-100 text-indigo-700",
    DELIVERED: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-xl font-semibold">
            {shipment.package_name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Tracking: {shipment.tracking_number}
          </p>
        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            statusColors[shipment.status] ||
            "bg-gray-100 text-gray-700"
          }`}
        >
          {shipment.status.replaceAll("_", " ")}
        </span>

      </div>

      {/* Details */}
      <div className="mt-6 grid gap-5 md:grid-cols-2">

        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="mt-1 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">
              Pickup
            </p>

            <p className="font-medium">
              {shipment.pickup_address}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaTruck className="mt-1 text-green-600" />

          <div>
            <p className="text-sm text-gray-500">
              Delivery
            </p>

            <p className="font-medium">
              {shipment.delivery_address}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaBox className="mt-1 text-amber-500" />

          <div>
            <p className="text-sm text-gray-500">
              Goods
            </p>

            <p className="font-medium">
              {shipment.goods_type}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaCalendarAlt className="mt-1 text-purple-600" />

          <div>
            <p className="text-sm text-gray-500">
              Created
            </p>

            <p className="font-medium">
              {new Date(shipment.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">

        <button
          onClick={() =>
            navigate(`/customer/shipment/${shipment.uuid}`)
          }
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          View Details
        </button>

        <button
          onClick={() =>
            navigate(`/customer/tracking/${shipment.tracking_number}`)
          }
          className="rounded-lg border border-gray-300 px-5 py-3 hover:bg-gray-100"
        >
          Track Shipment
        </button>

      </div>

    </div>
  );
}

export default ShipmentCard;