import { useEffect, useState } from "react";
import { getAllCustomers } from "../../api/admin";
import CustomerTable from "../../components/admin/CustomerTable";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const data = await getAllCustomers();
      setCustomers(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load customers.");
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter((customer) => {
    const query = search.toLowerCase();

    return (
      customer.first_name?.toLowerCase().includes(query) ||
      customer.last_name?.toLowerCase().includes(query) ||
      customer.email?.toLowerCase().includes(query) ||
      customer.phone_number?.toLowerCase().includes(query)
    );
  });

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading customers...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Customers
        </h1>

        <p className="text-gray-500">
          Manage every customer in CargoFlow.
        </p>
      </div>

      <input
        type="text"
        placeholder="Search customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border p-3"
      />

      <CustomerTable customers={filteredCustomers} />

    </div>
  );
}

export default Customers;