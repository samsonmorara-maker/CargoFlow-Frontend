import { useNavigate } from "react-router-dom";
import {
  FaBox,
  FaMapMarkerAlt,
  FaTruck,
  FaCalendarAlt,
} from "react-icons/fa";

function DriverShipmentCard({ shipment }) {
  const navigate = useNavigate();

  const statusColors = {
    PENDING: "bg-yellow-100 text-yellow-700",
    CONFIRMED: "bg-sky-100 text-sky-700",
    DRIVER_ASSIGNED: "bg-blue-100 text-blue-700",
    PICKED_UP: "bg-indigo-100 text-indigo-700",
    IN_TRANSIT: "bg-purple-100 text-purple-700",
    DELIVERED: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-xl font-semibold">
            {shipment.package_name}
          </h2>

          <p className="text-gray-500">
            {shipment.tracking_number}
          </p>
        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            statusColors[shipment.status]
          }`}
        >
          {shipment.status.replaceAll("_", " ")}
        </span>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        <div className="flex gap-3">
          <FaMapMarkerAlt className="mt-1 text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Pickup</p>
            <p>{shipment.pickup_address}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <FaTruck className="mt-1 text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Delivery</p>
            <p>{shipment.delivery_address}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <FaBox className="mt-1 text-orange-500" />
          <div>
            <p className="text-sm text-gray-500">Customer</p>
            <p>{shipment.customer_name}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <FaCalendarAlt className="mt-1 text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">Created</p>
            <p>{new Date(shipment.created_at).toLocaleDateString()}</p>
          </div>
        </div>

      </div>

      <div className="mt-8 flex gap-3 flex-wrap">

        <button
          onClick={() =>
            navigate(`/driver/shipment/${shipment.uuid}`)
          }
          className="rounded-lg border px-5 py-3 hover:bg-gray-100"
        >
          View Details
        </button>

        {shipment.status === "DRIVER_ASSIGNED" && (
          <button
            onClick={() =>
              navigate(`/driver/pickup/${shipment.uuid}`)
            }
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Start Pickup
          </button>
        )}

        {(shipment.status === "PICKED_UP" ||
          shipment.status === "IN_TRANSIT") && (
          <button
            onClick={() =>
              navigate(`/driver/delivery/${shipment.uuid}`)
            }
            className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
          >
            Deliver Package
          </button>
        )}

      </div>

    </div>
  );
}

export default DriverShipmentCard;