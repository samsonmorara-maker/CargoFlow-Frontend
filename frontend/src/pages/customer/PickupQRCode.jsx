import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import api from "../../api/axios";

function PickupQRCode() {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadShipment();
  }, []);

  const loadShipment = async () => {
    try {
      const response = await api.get(
        `/shipments/${uuid}/pickup-details/`
      );

      setShipment(response.data);
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

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">

      <div className="bg-white rounded-xl shadow-xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-green-600">
            Shipment Created Successfully
          </h1>

          <p className="text-gray-500 mt-2">
            Show this QR code or pickup code to the assigned driver.
          </p>

        </div>

        <div className="flex justify-center mb-8">

          <QRCode
            value={shipment.pickup_qr_token}
            size={240}
          />

        </div>

        <div className="text-center mb-10">

          <p className="text-gray-500">
            Pickup Code
          </p>

          <h2 className="text-5xl font-bold tracking-widest">
            {shipment.pickup_code}
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">
              Shipment Information
            </h3>

            <p>
              <strong>Tracking:</strong>{" "}
              {shipment.tracking_number}
            </p>

            <p className="mt-2">
              <strong>Pickup Address:</strong>
            </p>

            <p className="text-gray-600">
              {shipment.pickup_address}
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">
              Assigned Driver
            </h3>

            <p>
              <strong>Name:</strong>{" "}
              {shipment.driver_name || "Pending Assignment"}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {shipment.driver_phone || "-"}
            </p>

            <p>
              <strong>Vehicle:</strong>{" "}
              {shipment.vehicle_type || "-"}
            </p>

            <p>
              <strong>Plate:</strong>{" "}
              {shipment.vehicle_number_plate || "-"}
            </p>
          </div>

        </div>

        <div className="mt-10 flex gap-4">

          
          <button
            onClick={() => navigate("/customer/dashboard")}
            className="flex-1 bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700"
          >
            Back to Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}

export default PickupQRCode;