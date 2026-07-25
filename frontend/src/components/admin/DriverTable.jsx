function DriverTable({ drivers }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-5 py-4 text-left">
              Driver
            </th>

            <th className="px-5 py-4 text-left">
              Phone
            </th>

            <th className="px-5 py-4 text-left">
              Vehicle
            </th>

            <th className="px-5 py-4 text-left">
              Completed
            </th>

            <th className="px-5 py-4 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {drivers.map((driver) => (
            <tr
              key={driver.id}
              className="border-t"
            >
              <td className="px-5 py-4">
                {driver.first_name} {driver.last_name}
              </td>

              <td className="px-5 py-4">
                {driver.phone_number}
              </td>

              <td className="px-5 py-4">
                {driver.vehicle_type || "—"}
              </td>

              <td className="px-5 py-4">
                {driver.completed_deliveries}
              </td>

              <td className="px-5 py-4">
                {driver.status}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DriverTable;