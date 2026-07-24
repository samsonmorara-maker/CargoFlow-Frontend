import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShipment } from "../../api/shipment";
import { pickupShipment } from "../../api/driver";

function Pickup() {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const [shipment, setShipment] = useState(null);
  const [pickupToken, setPickupToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

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

  const handlePickup = async () => {
    if (!pickupToken.trim()) {
      alert("Enter the pickup QR token.");
      return;
    }

    try {
      setSubmitting(true);

      const response = await pickupShipment(
        pickupToken
      );

      alert(response.message);

      navigate("/driver/deliveries");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
        "Pickup failed."
      );
    } finally {
      setSubmitting(false);
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
    <div className="mx-auto max-w-3xl space-y-8">

      <h1 className="text-3xl font-bold">
        Pickup Shipment
      </h1>

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="text-xl font-semibold">
          Shipment Information
        </h2>

        <div className="mt-5 space-y-3">

          <p>
            <strong>Tracking:</strong>{" "}
            {shipment.tracking_number}
          </p>

          <p>
            <strong>Package:</strong>{" "}
            {shipment.package_name}
          </p>

          <p>
            <strong>Customer:</strong>{" "}
            {shipment.customer_name}
          </p>

          <p>
            <strong>Pickup Address:</strong>{" "}
            {shipment.pickup_address}
          </p>

          <p>
            <strong>Delivery Address:</strong>{" "}
            {shipment.delivery_address}
          </p>

        </div>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <label className="font-semibold">
          Pickup QR Token
        </label>

        <input
          type="text"
          value={pickupToken}
          onChange={(e) =>
            setPickupToken(e.target.value)
          }
          className="mt-2 w-full rounded-lg border p-3"
          placeholder="Paste pickup QR token"
        />

        <button
          onClick={handlePickup}
          disabled={submitting}
          className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
        >
          {submitting
            ? "Confirming Pickup..."
            : "Confirm Pickup"}
        </button>

      </div>

    </div>
  );
}

export default Pickup;