import { useState } from "react";
import { createShipment } from "../../api/shipment";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

function Shipment() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    goods_type: "",
    package_name: "",
    description: "",
    quantity: 1,
    weight: "",
    declared_value: "",
    is_fragile: false,
    pickup_address: "",
    delivery_address: "",
    priority: "STANDARD",
    delivery_instructions: "",
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
        setLoading(true);

        const shipment = await createShipment(formData);

        navigate(
            `/customer/shipments/${shipment.uuid}/pickup`
        );

    } catch (error) {
        console.error(error);

        alert(
            error.response?.data?.detail ||
            "Unable to create shipment."
        );
    } finally {
        setLoading(false);
        }
    };
  return (
    <div className="mx-auto max-w-5xl">

      <h1 className="mb-2 text-3xl font-bold">
        Create Shipment
      </h1>

      <p className="mb-8 text-gray-500">
        Fill in the shipment details below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >

        <div className="rounded-xl bg-white p-6 shadow">

  <h2 className="mb-6 text-xl font-semibold">
    Package Information
  </h2>

  <div className="grid gap-6 md:grid-cols-2">

    <div>
      <label className="mb-2 block font-medium">
        Goods Type
      </label>

      <select
        name="goods_type"
        value={formData.goods_type}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
        required
      >
        <option value="">Select Goods Type</option>
        <option value="DOCUMENTS">Documents</option>
        <option value="ELECTRONICS">Electronics</option>
        <option value="FOOD">Food</option>
        <option value="FURNITURE">Furniture</option>
        <option value="MEDICINE">Medicine</option>
        <option value="CLOTHING">Clothing</option>
        <option value="OTHER">Other</option>
      </select>
    </div>

    <Input
      label="Package Name"
      name="package_name"
      value={formData.package_name}
      onChange={handleChange}
      required
    />

    <Input
      label="Quantity"
      type="number"
      name="quantity"
      value={formData.quantity}
      onChange={handleChange}
      required
    />

    <Input
      label="Weight (kg)"
      type="number"
      name="weight"
      value={formData.weight}
      onChange={handleChange}
      required
    />

    <Input
      label="Declared Value"
      type="number"
      name="declared_value"
      value={formData.declared_value}
      onChange={handleChange}
      required
    />

  </div>

  <div className="mt-6">

    <label className="mb-2 block font-medium">
      Description
    </label>

    <textarea
      rows="4"
      name="description"
      value={formData.description}
      onChange={handleChange}
      className="w-full rounded-lg border p-3"
    />

    </div>

    <div className="mt-6 flex items-center gap-3">

        <input
        type="checkbox"
        name="is_fragile"
        checked={formData.is_fragile}
        onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          is_fragile: e.target.checked,
            }))
        }
        />

        <label>Fragile Package</label>

    </div>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-6 text-xl font-semibold">
            Pickup & Delivery
          </h2>

          <div className="space-y-6">

            <Input
              label="Pickup Address"
              name="pickup_address"
              value={formData.pickup_address}
              onChange={handleChange}
              required
            />

            <Input
              label="Delivery Address"
              name="delivery_address"
              value={formData.delivery_address}
              onChange={handleChange}
              required
            />

          </div>

        </div>

       <div className="rounded-xl bg-white p-6 shadow">

  <h2 className="mb-6 text-xl font-semibold">
    Delivery Options
  </h2>

  <div>

    <label className="mb-2 block font-medium">
      Priority
    </label>

    <select
      name="priority"
      value={formData.priority}
      onChange={handleChange}
      className="w-full rounded-lg border p-3"
        >
             <option value="STANDARD">Standard</option>
                <option value="EXPRESS">Express</option>
        </select>

        </div>

        <div className="mt-6">

        <label className="mb-2 block font-medium">
         Delivery Instructions
        </label>

        <textarea
        rows="4"
        name="delivery_instructions"
        value={formData.delivery_instructions}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"/>

        </div>

            </div>
             

        <div className="flex flex-col gap-4 sm:flex-row">

    <button
        type="button"
        onClick={() => navigate("/customer/dashboard")}
        className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100"
        >
        Cancel
    </button>

    <Button
        type="submit"
        loading={loading}
        >
        Create Shipment
        </Button>

    </div>

      </form>

    </div>
  );
}

export default Shipment;