import { useEffect, useState } from "react";

import { getAssignedShipments } from "../../api/driver";

import ShipmentCard from "../../components/shipment/DriverShipmentCard";
import DriverShipmentCard from "../../components/shipment/DriverShipmentCard";

function Deliveries() {
  const [shipments, setShipments] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadShipments();
  }, []);

  const loadShipments = async () => {
    try {
      const data = await getAssignedShipments();

      setShipments(data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        My Deliveries
      </h1>

      {shipments.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center shadow">
          No assigned deliveries.
        </div>
      ) : (
        <div className="grid gap-6">

          {shipments.map((shipment) => (
            <DriverShipmentCard
              key={shipment.uuid}
              shipment={shipment}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default Deliveries;