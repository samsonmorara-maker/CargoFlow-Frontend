import { useEffect, useState } from "react";
import { getAllShipments } from "../../api/admin";
import ShipmentTable from "../../components/admin/ShipmentTable";

function Shipments() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading shipments...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Shipments
        </h1>

        <p className="text-gray-500">
          View and manage every shipment.
        </p>
      </div>

      <ShipmentTable shipments={shipments} />

    </div>
  );
}

export default Shipments;