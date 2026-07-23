import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { useAuthContext } from "../../context/AuthContext";
function Login() {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [formData, setFormData] = useState({email: "", password: "",});
  const [loading, setLoading] = useState(false);

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

    const data = await loginUser(formData);

    login({
    user: data.user,
    access: data.access,
    refresh: data.refresh,
    });

    // Redirect according to role
    if (data.user.is_staff) {
      navigate("/admin/dashboard");
    } else if (data.user.role === "DRIVER") {
      navigate("/driver/dashboard");
    } else {
      navigate("/customer/dashboard");
    }

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.detail ||
      "Login failed."
    );

  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          CargoFlow
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          <div className="text-center pt-4">
          <span className="text-gray-600">
            Don't have an account?{" "}
              </span>

            <Link
            to="/signup"
            className="font-semibold text-blue-600 hover:underline">
            Sign Up
            </Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;