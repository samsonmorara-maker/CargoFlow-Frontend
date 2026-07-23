import { useAuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuthContext();

  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">

      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          CargoFlow
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="font-semibold">
            {user?.first_name} {user?.last_name}
          </p>

          <p className="text-sm text-gray-500">
            {user?.role}
          </p>
        </div>

        <button
          onClick={logout}
          className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Navbar;