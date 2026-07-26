import {
  FaClipboardList,
  FaQrcode,
  FaTruckMoving,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaArrowDown,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList className="text-4xl text-blue-600" />,
    title: "1. Create Shipment",
    description:
      "Customers enter pickup and delivery details, package information and recipient details.",
  },
  {
    icon: <FaQrcode className="text-4xl text-green-600" />,
    title: "2. QR Code Generated",
    description:
      "CargoFlow instantly creates a secure pickup QR code and a unique pickup verification code.",
  },
  {
    icon: <FaTruckMoving className="text-4xl text-orange-600" />,
    title: "3. Driver Pickup",
    description:
      "The assigned driver scans the sender's QR code or enters the pickup code to verify collection.",
  },
  {
    icon: <FaMapMarkedAlt className="text-4xl text-red-600" />,
    title: "4. Live Tracking",
    description:
      "Customers follow their shipment in real time as it moves to its destination.",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-purple-600" />,
    title: "5. Secure Delivery",
    description:
      "The recipient confirms delivery using the delivery QR code and verification code.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Delivery Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            How CargoFlow Works
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Every shipment follows a secure digital workflow that
            ensures accountability from pickup to delivery.
          </p>

        </div>

        <div className="mt-20 flex flex-col items-center">

          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full max-w-4xl"
            >

              <div className="flex gap-6 rounded-2xl bg-gray-50 p-8 shadow">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">
                  {step.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {step.description}
                  </p>
                </div>

              </div>

              {index !== steps.length - 1 && (
                <div className="flex justify-center py-6">
                  <FaArrowDown className="text-3xl text-blue-500" />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;