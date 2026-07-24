import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getShipment } from "../../api/shipment";
import { confirmDelivery } from "../../api/driver";

function Delivery() {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const [shipment, setShipment] = useState(null);

  const [deliveryCode, setDeliveryCode] = useState("");
  const [deliveryToken, setDeliveryToken] = useState("");

  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

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

  const handleSubmit = async () => {
    if (!receiverName.trim()) {
      alert("Recipient name is required.");
      return;
    }

    if (!receiverPhone.trim()) {
      alert("Recipient phone is required.");
      return;
    }

    if (!deliveryCode && !deliveryToken) {
      alert("Enter the delivery code or delivery QR token.");
      return;
    }

    try {
      setSaving(true);

      const response = await confirmDelivery({
        delivery_qr_token: deliveryToken || null,
        delivery_code: deliveryCode || null,
        received_by_name: receiverName,
        received_by_phone: receiverPhone,
      });

      alert(response.message);

      navigate("/driver/deliveries");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
        "Delivery failed."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">

      <h1 className="text-3xl font-bold">
        Confirm Delivery
      </h1>

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="text-xl font-semibold">
          Shipment
        </h2>

        <div className="mt-4 space-y-2">

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
            <strong>Delivery Address:</strong>{" "}
            {shipment.delivery_address}
          </p>

        </div>

      </div>

      <div className="rounded-xl bg-white p-6 shadow space-y-5">

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Delivery Code"
          value={deliveryCode}
          onChange={(e) => setDeliveryCode(e.target.value)}
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Delivery QR Token"
          value={deliveryToken}
          onChange={(e) => setDeliveryToken(e.target.value)}
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Recipient Name"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Recipient Phone"
          value={receiverPhone}
          onChange={(e) => setReceiverPhone(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={saving}
          className="w-full rounded-lg bg-green-600 py-3 text-white hover:bg-green-700"
        >
          {saving
            ? "Confirming..."
            : "Complete Delivery"}
        </button>

      </div>

    </div>
  );
}

export default Delivery;