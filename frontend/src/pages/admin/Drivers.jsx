import { useEffect, useState } from "react";
import { getAllDrivers } from "../../api/admin";
import DriverTable from "../../components/admin/DriverTable";

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDrivers();
  }, []);

  async function loadDrivers() {
    try {
      const data = await getAllDrivers();
      setDrivers(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load drivers.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading drivers...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Drivers
        </h1>

        <p className="text-gray-500">
          Manage all registered drivers.
        </p>
      </div>

      <DriverTable drivers={drivers} />

    </div>
  );
}

export default Drivers;