import { useEffect, useState } from "react";
import { getAllShipments } from "../../api/admin";
import ShipmentTable from "../../components/admin/ShipmentTable";

function Shipments() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  useEffect(() => {
    loadShipments();
  }, []);

  const loadShipments = async () => {
    try {
      const data = await getAllShipments();
      setShipments(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load shipments.");
    } finally {
      setLoading(false);
    }
  };

  const filteredShipments = shipments.filter((shipment) => {
    const query = search.toLowerCase();

    const matchesSearch =
      shipment.tracking_number?.toLowerCase().includes(query) ||
      shipment.customer_name?.toLowerCase().includes(query) ||
      shipment.driver_name?.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "ALL" ||
      shipment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading shipments...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Shipments
        </h1>

        <p className="text-gray-500">
          View and manage every shipment.
        </p>
      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search by tracking number, customer or driver..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
      />

      {/* Status Filters */}

      <div className="flex flex-wrap gap-3">

        <button
          onClick={() => setStatusFilter("ALL")}
          className={`rounded-lg px-4 py-2 transition ${
            statusFilter === "ALL"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setStatusFilter("PENDING")}
          className={`rounded-lg px-4 py-2 transition ${
            statusFilter === "PENDING"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => setStatusFilter("DRIVER_ASSIGNED")}
          className={`rounded-lg px-4 py-2 transition ${
            statusFilter === "DRIVER_ASSIGNED"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Assigned
        </button>

        <button
          onClick={() => setStatusFilter("IN_TRANSIT")}
          className={`rounded-lg px-4 py-2 transition ${
            statusFilter === "IN_TRANSIT"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          In Transit
        </button>

        <button
          onClick={() => setStatusFilter("DELIVERED")}
          className={`rounded-lg px-4 py-2 transition ${
            statusFilter === "DELIVERED"
              ? "bg-green-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Delivered
        </button>

        <button
          onClick={() => setStatusFilter("CANCELLED")}
          className={`rounded-lg px-4 py-2 transition ${
            statusFilter === "CANCELLED"
              ? "bg-red-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Cancelled
        </button>

      </div>

      {/* Shipments Table */}

      <ShipmentTable shipments={filteredShipments} />

    </div>
  );
}

export default Shipments;