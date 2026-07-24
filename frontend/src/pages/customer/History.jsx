import { useEffect, useState } from "react";
import { getShipments } from "../../api/shipment";
import ShipmentCard from "../../components/shipment/ShipmentCard";

function History() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadShipments();
  }, []);

  const loadShipments = async () => {
    try {
      const data = await getShipments();
      setShipments(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load shipments.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading shipments...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Shipment History
        </h1>

        <p className="text-gray-500 mt-2">
          View all your shipments.
        </p>
      </div>

      {shipments.length === 0 ? (
        <div className="rounded-xl bg-white p-12 text-center shadow">

          <h2 className="text-xl font-semibold">
            No Shipments Yet
          </h2>

          <p className="mt-3 text-gray-500">
            Create your first shipment.
          </p>

        </div>
      ) : (
        <div className="grid gap-6">

          {shipments.map((shipment) => (
            <ShipmentCard
              key={shipment.uuid}
              shipment={shipment}
            />
          ))}

        </div>
      )}

    </div>
  );
}


export default History;