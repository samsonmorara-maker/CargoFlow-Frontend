function ShipmentTimeline({ status }) {
  const steps = [
    "PENDING",
    "CONFIRMED",
    "DRIVER_ASSIGNED",
    "PICKED_UP",
    "IN_TRANSIT",
    "DELIVERED",
  ];

  const current = steps.indexOf(status);

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">
        Shipment Progress
      </h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-4"
          >
            <div
              className={`h-5 w-5 rounded-full ${
                index <= current
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            />

            <span
              className={
                index <= current
                  ? "font-semibold"
                  : "text-gray-500"
              }
            >
              {step.replaceAll("_", " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShipmentTimeline;