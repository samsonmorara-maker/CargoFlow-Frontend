import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShipment } from "../../api/shipment";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaTruck,
} from "react-icons/fa";
function Details() {
  const { uuid } = useParams();

  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadShipment();
  }, []);

  const loadShipment = async () => {
    try {
      const data = await getShipment(uuid);
      setShipment(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load shipment.");
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

  if (!shipment) {
  return (
    <div className="py-20 text-center">
      Shipment not found.
    </div>
  );
    }
    return (
    <div className="mx-auto max-w-6xl space-y-6">

    <button
      onClick={() => window.history.back()}
      className="rounded-lg border px-4 py-2 hover:bg-gray-100"
    >
      ← Back
    </button>

    <h1 className="text-3xl font-bold">
      Shipment Details
    </h1>

    {/* Summary */}

    <div className="grid gap-6 md:grid-cols-4">

      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-gray-500">Tracking Number</p>
        <h3 className="font-bold">
          {shipment.tracking_number}
        </h3>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-gray-500">Status</p>
        <h3 className="font-bold">
          {shipment.status}
        </h3>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-gray-500">Priority</p>
        <h3 className="font-bold">
          {shipment.priority}
        </h3>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-gray-500">Estimated Price</p>
        <h3 className="font-bold">
          KES {shipment.estimated_price}
        </h3>
      </div>

    </div>
    <div className="rounded-xl bg-white p-6 shadow">

    <h2 className="mb-4 text-xl font-semibold">
            Package Information
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

    <div>

    <strong>Package</strong>

    <p>{shipment.package_name}</p>

    </div>

    <div>

    <strong>Goods Type</strong>

    <p>{shipment.goods_type}</p>

    </div>

    <div>

    <strong>Quantity</strong>

    <p>{shipment.quantity}</p>

        </div>

        <div>

        <strong>Weight</strong>

        <p>{shipment.weight} kg</p>

        </div>

        <div>

    <strong>Declared Value</strong>

    <p>KES {shipment.declared_value}</p>

    </div>

    <div>

    <strong>Fragile</strong>

    <p>{shipment.is_fragile ? "Yes" : "No"}</p>

    </div>

    </div>

    <div className="mt-6">

    <strong>Description</strong>

    <p>{shipment.description}</p>

        </div>

        </div>
    <div className="rounded-xl bg-white shadow p-6">

    <h2 className="flex items-center gap-2 mb-6 text-xl font-semibold">

    <FaMapMarkerAlt />

        Delivery Information

    </h2>

    <p>

    <strong>Pickup</strong>

    </p>

    <p>

    {shipment.pickup_address}

    </p>

    <br />

    <p>

        <strong>Delivery</strong>

    </p>

<p>

{shipment.delivery_address}

</p>

<br />

<p>

<strong>Instructions</strong>

</p>

<p>

{shipment.delivery_instructions || "None"}

</p>

</div><div className="rounded-xl bg-white shadow p-6">

<h2 className="flex items-center gap-2 mb-6 text-xl font-semibold">

<FaMoneyBillWave />

Pricing

</h2>

<p>

Estimated Price

</p>

<h3 className="text-2xl font-bold">

KES {shipment.estimated_price}

</h3>

<p className="mt-6">

Final Price

</p>

<h3 className="text-2xl font-bold">

{shipment.final_price
? `KES ${shipment.final_price}`
: "Pending"}

</h3>

</div>
<div className="rounded-xl bg-white shadow p-6">

<h2 className="flex items-center gap-2 mb-6 text-xl font-semibold">

<FaTruck />

Driver & Vehicle

</h2>

{

shipment.driver_name ?

<>

<p>

<strong>Driver</strong>

</p>

<p>

{shipment.driver_name}

</p>

<p>

{shipment.driver_phone}

</p>

<br />

<p>

<strong>Vehicle</strong>

</p>

<p>

{shipment.vehicle_type}

</p>

<p>

{shipment.vehicle_color}

</p>

<p>

{shipment.vehicle_number_plate}

</p>

</>

:

<p className="text-gray-500">

Waiting for driver assignment.

</p>

}

</div>
</div>

);

}

export default Details;