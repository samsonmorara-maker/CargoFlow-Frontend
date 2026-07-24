import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getShipment } from "../../api/shipment";
import { pickupShipment } from "../../api/driver";

import QRScanner from "../../components/qr/QRScanner";

function Pickup() {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [pickupToken, setPickupToken] = useState("");
  const [showScanner, setShowScanner] = useState(false);

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
      alert("Enter or scan the pickup code.");
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

      {/* Shipment Information */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="text-xl font-semibold">
          Shipment Information
        </h2>

        <div className="mt-5 space-y-3">

          <p>
            <strong>Tracking Number:</strong>{" "}
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

      {/* Pickup Verification */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="text-xl font-semibold">
          Pickup Verification
        </h2>

        <p className="mt-2 text-gray-500">
          Scan the sender's QR code or manually enter the pickup code.
        </p>

        <label className="mt-6 block font-medium">
          Pickup Code
        </label>

        <input
          type="text"
          value={pickupToken}
          onChange={(e) =>
            setPickupToken(e.target.value)
          }
          className="mt-2 w-full rounded-lg border p-3"
          placeholder="Enter pickup code"
        />

        <div className="mt-6 flex gap-4">

          <button
            onClick={() => setShowScanner(true)}
            className="flex-1 rounded-lg bg-gray-800 py-3 text-white hover:bg-gray-900"
          >
            Scan QR Code
          </button>

          <button
            onClick={handlePickup}
            disabled={submitting}
            className="flex-1 rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:bg-blue-300"
          >
            {submitting
              ? "Confirming..."
              : "Confirm Pickup"}
          </button>

        </div>

      </div>

      {/* QR Scanner */}

      {showScanner && (
        <QRScanner
          onScan={(value) => {
            setPickupToken(value);
            setShowScanner(false);
          }}
          onClose={() => setShowScanner(false)}
        />
      )}

    </div>
  );
}

export default Pickup;