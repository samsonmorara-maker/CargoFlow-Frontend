import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBarcode } from "react-icons/fa";

function TrackingSearch() {
  const navigate = useNavigate();

  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      alert("Please enter a tracking number.");
      return;
    }

    navigate(`/customer/tracking/${trackingNumber.trim()}`);
  };

  return (
    <div className="mx-auto max-w-xl">

      <div className="rounded-2xl bg-white p-8 shadow">

        <div className="mb-8 text-center">

          <FaBarcode className="mx-auto mb-4 text-5xl text-blue-600" />

          <h1 className="text-3xl font-bold">
            Track Shipment
          </h1>

          <p className="mt-2 text-gray-500">
            Enter your shipment tracking number.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Example: CFG202600000001"
            value={trackingNumber}
            onChange={(e) =>
              setTrackingNumber(e.target.value.toUpperCase())
            }
            className="w-full rounded-xl border p-4 text-lg outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-white hover:bg-blue-700"
          >
            <FaSearch />
            Track Shipment
          </button>

        </form>

      </div>

    </div>
  );
}

export default TrackingSearch;