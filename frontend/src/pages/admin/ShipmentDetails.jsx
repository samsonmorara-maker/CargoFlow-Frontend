import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getShipment } from "../../api/shipment";

function ShipmentDetails() {
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
        Loading shipment...
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
    <div className="mx-auto max-w-5xl space-y-8">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Shipment Details
        </h1>

        <button
          onClick={() => navigate("/admin/shipments")}
          className="rounded-lg bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
        >
          Back
        </button>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-5 text-xl font-semibold">
          Shipment Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <p><strong>Tracking:</strong> {shipment.tracking_number}</p>

          <p><strong>Status:</strong> {shipment.status}</p>

          <p><strong>Package:</strong> {shipment.package_name}</p>

          <p><strong>Goods Type:</strong> {shipment.goods_type}</p>

          <p><strong>Weight:</strong> {shipment.weight} kg</p>

          <p><strong>Quantity:</strong> {shipment.quantity}</p>

          <p><strong>Estimated Price:</strong> ${shipment.estimated_price}</p>

          <p><strong>Priority:</strong> {shipment.priority}</p>

        </div>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-5 text-xl font-semibold">
          Customer Information
        </h2>

        <div className="space-y-3">

          <p><strong>Name:</strong> {shipment.customer_name}</p>

          <p><strong>Email:</strong> {shipment.customer_email}</p>

          <p><strong>Phone:</strong> {shipment.customer_phone}</p>

        </div>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-5 text-xl font-semibold">
          Driver Information
        </h2>

        {shipment.driver_name ? (

          <div className="space-y-3">

            <p><strong>Name:</strong> {shipment.driver_name}</p>

            <p><strong>Email:</strong> {shipment.driver_email}</p>

            <p><strong>Phone:</strong> {shipment.driver_phone}</p>

          </div>

        ) : (

          <p>No driver assigned.</p>

        )}

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-5 text-xl font-semibold">
          Addresses
        </h2>

        <div className="space-y-4">

          <p>
            <strong>Pickup:</strong><br />
            {shipment.pickup_address}
          </p>

          <p>
            <strong>Delivery:</strong><br />
            {shipment.delivery_address}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ShipmentDetails;