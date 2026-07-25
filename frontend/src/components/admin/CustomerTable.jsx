function CustomerTable({ customers }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Name
            </th>

            <th className="px-6 py-4 text-left">
              Email
            </th>

            <th className="px-6 py-4 text-left">
              Phone
            </th>

            <th className="px-6 py-4 text-left">
              Shipments
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-t"
            >

              <td className="px-6 py-4">
                {customer.first_name} {customer.last_name}
              </td>

              <td className="px-6 py-4">
                {customer.email}
              </td>

              <td className="px-6 py-4">
                {customer.phone_number}
              </td>

              <td className="px-6 py-4">
                {customer.total_shipments}
              </td>

              <td className="px-6 py-4">

                <span className="rounded bg-green-100 px-3 py-1 text-green-700">
                  Active
                </span>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CustomerTable;