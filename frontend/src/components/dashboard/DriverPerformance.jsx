function DriverPerformance() {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-semibold">
        Driver Performance
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Completion Rate</span>
          <span className="font-semibold">0%</span>
        </div>

        <div className="flex justify-between">
          <span>Average Delivery Time</span>
          <span className="font-semibold">--</span>
        </div>

        <div className="flex justify-between">
          <span>Deliveries This Week</span>
          <span className="font-semibold">0</span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <span className="font-semibold text-green-600">
            Available
          </span>
        </div>
      </div>
    </div>
  );
}

export default DriverPerformance;