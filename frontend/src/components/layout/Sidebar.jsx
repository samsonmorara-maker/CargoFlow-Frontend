import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

function Sidebar() {
  const { user } = useAuthContext();

  const customerLinks = [
    { name: "Dashboard", path: "/customer/dashboard" },
    { name: "Create Shipment", path: "/customer/create-shipment" },
    { name: "Shipment History", path: "/customer/history" },
    { name: "Tracking", path: "/customer/tracking" },
    { name: "Profile", path: "/customer/profile" },
  ];

  const driverLinks = [
    { name: "Dashboard", path: "/driver/dashboard" },
    { name: "Deliveries", path: "/driver/deliveries" },
    { name: "Pickup", path: "/driver/pickup" },
    { name: "Delivery", path: "/driver/delivery" },
    { name: "Profile", path: "/driver/profile" },
  ];

  const adminLinks = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Users", path: "/admin/users" },
    { name: "Drivers", path: "/admin/drivers" },
    { name: "Shipments", path: "/admin/shipments" },
    { name: "Analytics", path: "/admin/analytics" },
    { name: "Settings", path: "/admin/settings" },
  ];

  let links = customerLinks;

  if (user?.role === "DRIVER") {
    links = driverLinks;
  }

  if (user?.role === "ADMIN") {
    links = adminLinks;
  }

  return (
    <aside className="w-64 bg-slate-900 text-white">

      <div className="border-b border-slate-700 p-6">
        <h2 className="text-2xl font-bold">
          CargoFlow
        </h2>
      </div>

      <nav className="flex flex-col p-4">

        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `mb-2 rounded-lg px-4 py-3 ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;