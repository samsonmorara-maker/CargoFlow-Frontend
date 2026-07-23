import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createVehicle } from "../../api/vehicle";
function Vehicle() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    vehicle_type: "",
    make: "",
    model: "",
    color: "",
    number_plate: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await createVehicle(formData);

    alert("Vehicle registered successfully.");

    navigate("/driver/dashboard");

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.detail ||
      "Unable to register vehicle."
    );
  }
};

  return (
    <div className="mx-auto max-w-4xl space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Register Vehicle
        </h1>

        <p className="text-gray-500 mt-2">
          Enter the details of the vehicle you will use for deliveries.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl bg-white p-8 shadow space-y-6"
      >

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium">
              Vehicle Type
            </label>

            <input
              name="vehicle_type"
              value={formData.vehicle_type}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              placeholder="Toyota Hiace, Box Truck..."
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Make
            </label>

            <input
              name="make"
              value={formData.make}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              placeholder="Toyota"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Model
            </label>

            <input
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              placeholder="Hiace"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Color
            </label>

            <input
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              placeholder="White"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Number Plate
            </label>

            <input
              name="number_plate"
              value={formData.number_plate}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              placeholder="KDM 432P"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Year
            </label>

            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              placeholder="2022"
            />
          </div>

        </div>

        <div className="flex justify-end">

          <button
            className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            Save Vehicle
          </button>

        </div>

      </form>

    </div>
  );
}

export default Vehicle;