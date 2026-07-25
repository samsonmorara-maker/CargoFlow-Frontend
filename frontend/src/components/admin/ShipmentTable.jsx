import { useNavigate } from "react-router-dom";

function ShipmentTable({ shipments }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Tracking
            </th>

            <th className="px-6 py-4 text-left">
              Customer
            </th>

            <th className="px-6 py-4 text-left">
              Driver
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-left">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {shipments.map((shipment) => (

            <tr
              key={shipment.uuid}
              className="border-t"
            >

              <td className="px-6 py-4">
                {shipment.tracking_number}
              </td>

              <td className="px-6 py-4">
                {shipment.customer_name}
              </td>

              <td className="px-6 py-4">
                {shipment.driver_name || "Unassigned"}
              </td>

              <td className="px-6 py-4">
                {shipment.status}
              </td>

              <td className="px-6 py-4">

                <button
                  onClick={() =>
                    navigate(`/admin/shipment/${shipment.uuid}`)
                  }
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  View
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ShipmentTable;