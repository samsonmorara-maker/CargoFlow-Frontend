import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTruck, FaMapMarkerAlt, FaUser, FaCar } from "react-icons/fa";
import { getTracking } from "../../api/shipment";

function Tracking() {
  const { trackingNumber } = useParams();

  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTracking();
  }, []);

  const loadTracking = async () => {
    try {
      const data = await getTracking(trackingNumber);
      setShipment(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load tracking.");
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

  const steps = [
    "CREATED",
    "DRIVER_ASSIGNED",
    "PICKED_UP",
    "IN_TRANSIT",
    "DELIVERED",
  ];

  const currentStep = steps.indexOf(shipment.status);

  return (
    <div className="mx-auto max-w-6xl space-y-8">

      <h1 className="text-3xl font-bold">
        Shipment Tracking
      </h1>

      <div className="rounded-xl bg-white p-6 shadow">

        <p className="text-gray-500">
          Tracking Number
        </p>

        <h2 className="text-2xl font-bold">
          {shipment.tracking_number}
        </h2>

      </div>

      {/* Progress */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-8 text-xl font-semibold">
          Shipment Progress
        </h2>

        <div className="flex justify-between">

          {steps.map((step, index) => (

            <div
              key={step}
              className="flex flex-col items-center"
            >

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${
                  index <= currentStep
                    ? "bg-green-600"
                    : "bg-gray-300"
                }`}
              >
                ✓
              </div>

              <p className="mt-3 text-center text-sm font-medium">
                {step.replaceAll("_", " ")}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Addresses */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <FaMapMarkerAlt />
            Pickup
          </h2>

          <p>{shipment.pickup_address}</p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <FaMapMarkerAlt />
            Delivery
          </h2>

          <p>{shipment.delivery_address}</p>

        </div>

      </div>

      {/* Driver */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
          <FaTruck />
          Driver
        </h2>

        {shipment.driver_name ? (
          <>
            <p>
              <FaUser className="mr-2 inline" />
              {shipment.driver_name}
            </p>

            <p className="mt-2">
              {shipment.driver_phone}
            </p>

            <div className="mt-6">

              <p className="font-semibold">
                <FaCar className="mr-2 inline" />
                Vehicle
              </p>

              <p>{shipment.vehicle_type}</p>
              <p>{shipment.vehicle_color}</p>
              <p>{shipment.vehicle_number_plate}</p>

            </div>
          </>
        ) : (
          <p className="text-gray-500">
            Driver has not been assigned yet.
          </p>
        )}

      </div>

      {/* Timeline */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-semibold">
          Shipment Timeline
        </h2>

        {shipment.events?.length ? (

          <div className="space-y-5">

            {shipment.events.map((event) => (

              <div
                key={event.created_at}
                className="border-l-4 border-blue-600 pl-4"
              >

                <h3 className="font-semibold">
                  {event.event_type.replaceAll("_", " ")}
                </h3>

                <p className="text-gray-600">
                  {event.description}
                </p>

                <p className="text-sm text-gray-400">
                  {new Date(event.created_at).toLocaleString()}
                </p>

              </div>

            ))}

          </div>

        ) : (

          <p>No events available.</p>

        )}

      </div>

    </div>
  );
}

export default Tracking;