import {
  FaQrcode,
  FaMapMarkedAlt,
  FaTruckMoving,
  FaUsersCog,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaQrcode className="text-4xl text-blue-600" />,
    title: "QR Verification",
    description:
      "Every shipment generates secure QR codes and verification codes to prevent fraud during pickup and delivery.",
  },
  {
    icon: <FaTruckMoving className="text-4xl text-green-600" />,
    title: "Automatic Driver Assignment",
    description:
      "Drivers are intelligently assigned to deliveries, reducing delays and improving efficiency.",
  },
  {
    icon: <FaMapMarkedAlt className="text-4xl text-red-600" />,
    title: "Real-Time Tracking",
    description:
      "Track shipments from pickup to delivery with live status updates and location monitoring.",
  },
  {
    icon: <FaUsersCog className="text-4xl text-purple-600" />,
    title: "Driver Management",
    description:
      "Manage drivers, approvals, vehicles, performance and completed deliveries from one dashboard.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-orange-600" />,
    title: "Secure Deliveries",
    description:
      "Every delivery is verified using QR codes, confirmation codes and digital chain-of-custody.",
  },
  {
    icon: <FaChartLine className="text-4xl text-cyan-600" />,
    title: "Analytics Dashboard",
    description:
      "Businesses can monitor deliveries, customers, drivers and shipment performance in real time.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Platform Features
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Everything Needed To Run Modern Logistics
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            CargoFlow combines shipment management,
            intelligent driver assignment, QR verification,
            tracking and analytics into one unified platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;