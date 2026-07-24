import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getShipment } from "../../api/shipment";

import {
  FaMapMarkerAlt,
  FaTruck,
  FaBox,
  FaUser,
} from "react-icons/fa";

import ShipmentTimeline from "../../components/shipment/ShipmentTimeline";

function ShipmentsDetails() {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadShipment();
  }, []);

  const loadShipment = async () => {
    try {
      const data = await getShipment(uuid);
      setShipment(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load shipment.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!shipment) {
    return (
      <div className="py-20 text-center">
        Shipment not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">

      <button
        onClick={() => navigate(-1)}
        className="rounded-lg border px-4 py-2 hover:bg-gray-100"
      >
        ← Back
      </button>

      <div className="rounded-xl bg-white p-6 shadow">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              {shipment.package_name}
            </h1>

            <p className="text-gray-500">
              {shipment.tracking_number}
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
            {shipment.status}
          </span>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <FaBox />
            Package Information
          </h2>

          <div className="space-y-3">

            <p>
              <strong>Goods Type:</strong>
              {" "}
              {shipment.goods_type}
            </p>

            <p>
              <strong>Quantity:</strong>
              {" "}
              {shipment.quantity}
            </p>

            <p>
              <strong>Weight:</strong>
              {" "}
              {shipment.weight} kg
            </p>

            <p>
              <strong>Fragile:</strong>
              {" "}
              {shipment.is_fragile ? "Yes" : "No"}
            </p>

            <p>
              <strong>Description:</strong>
              {" "}
              {shipment.description}
            </p>

          </div>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <FaUser />
            Customer
          </h2>

          <div className="space-y-3">

            <p>
              <strong>Name:</strong>
              {" "}
              {shipment.customer_name}
            </p>

            <p>
              <strong>Phone:</strong>
              {" "}
              {shipment.customer_phone}
            </p>

          </div>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <FaMapMarkerAlt />
            Pickup Address
          </h2>

          <p>{shipment.pickup_address}</p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <FaMapMarkerAlt />
            Delivery Address
          </h2>

          <p>{shipment.delivery_address}</p>

          {shipment.delivery_instructions && (
            <div className="mt-4">
              <p className="font-semibold">
                Instructions
              </p>
              <p>{shipment.delivery_instructions}</p>
            </div>
          )}

        </div>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <FaTruck />
          Vehicle
        </h2>

        <div className="space-y-2">

          <p>
            <strong>Type:</strong>
            {" "}
            {shipment.vehicle_type}
          </p>

          <p>
            <strong>Color:</strong>
            {" "}
            {shipment.vehicle_color}
          </p>

          <p>
            <strong>Number Plate:</strong>
            {" "}
            {shipment.vehicle_number_plate}
          </p>

        </div>

      </div>

      <ShipmentTimeline status={shipment.status} />

      <div className="flex gap-4">

        {shipment.status === "DRIVER_ASSIGNED" && (
          <button
            onClick={() =>
              navigate(`/driver/pickup/${shipment.uuid}`)
            }
            className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
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
            className="rounded-lg bg-orange-600 px-6 py-3 text-white hover:bg-orange-700"
          >
            Confirm Delivery
          </button>
        )}

      </div>

    </div>
  );
}

export default ShipmentsDetails;