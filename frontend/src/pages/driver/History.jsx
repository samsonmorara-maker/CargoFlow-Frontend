import { useEffect, useState } from "react";
import { getDriverHistory } from "../../api/driver";
import ShipmentCard from "../../components/shipment/ShipmentCard";

function DriverHistory() {

  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {

      const data = await getDriverHistory();

      setShipments(data);

    } catch (error) {

      console.error(error);

      alert("Unable to load history.");

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

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Delivery History
        </h1>

        <p className="text-gray-500 mt-2">
          All completed deliveries.
        </p>

      </div>

      {shipments.length === 0 ? (

        <div className="rounded-xl bg-white p-10 shadow text-center">

          No completed deliveries yet.

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

export default DriverHistory;